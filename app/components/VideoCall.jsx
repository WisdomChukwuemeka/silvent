"use client";
import { useEffect, useRef, useState } from "react";

export const VideoCall = ({ meetingId }) => {
  const localVideoRef = useRef(null);
  const [remoteStreams, setRemoteStreams] = useState({});
  const wsRef = useRef(null);
  const peersRef = useRef({});
  const localStreamRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:8000/ws/meeting/${meetingId}/`);
    wsRef.current = ws;

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localStreamRef.current = stream;
      localVideoRef.current.srcObject = stream;
    });

    ws.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      const { type, sender } = data;

      if (sender === wsRef.current.id) return;

      if (type === "join") {
        createPeerConnection(sender, true);
      } else if (type === "offer") {
        await handleOffer(sender, data.offer);
      } else if (type === "answer") {
        await peersRef.current[sender].setRemoteDescription(new RTCSessionDescription(data.answer));
      } else if (type === "candidate") {
        await peersRef.current[sender].addIceCandidate(new RTCIceCandidate(data.candidate));
      }
    };

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join" }));
    };

    return () => {
      ws.close();
      Object.values(peersRef.current).forEach((pc) => pc.close());
    };
  }, [meetingId]);

  const createPeerConnection = async (peerId, isInitiator) => {
    if (peersRef.current[peerId]) return;

    const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
    peersRef.current[peerId] = pc;

    localStreamRef.current.getTracks().forEach((track) => pc.addTrack(track, localStreamRef.current));

    pc.ontrack = (event) => {
      setRemoteStreams((prev) => ({ ...prev, [peerId]: event.streams[0] }));
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        wsRef.current.send(JSON.stringify({ type: "candidate", candidate: event.candidate, sender: wsRef.current.id }));
      }
    };

    if (isInitiator) {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      wsRef.current.send(JSON.stringify({ type: "offer", offer, sender: wsRef.current.id }));
    }
  };

  const handleOffer = async (peerId, offer) => {
    createPeerConnection(peerId, false);
    const pc = peersRef.current[peerId];
    await pc.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    wsRef.current.send(JSON.stringify({ type: "answer", answer, sender: wsRef.current.id }));
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <video ref={localVideoRef} autoPlay playsInline muted className="rounded border" />
      {Object.entries(remoteStreams).map(([peerId, stream]) => (
        <video
          key={peerId}
          autoPlay
          playsInline
          ref={(el) => el && (el.srcObject = stream)}
          className="rounded border"
        />
      ))}
    </div>
  );
}
