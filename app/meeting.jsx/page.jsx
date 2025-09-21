import VideoCall from "@/components/VideoCall";

export default function MeetingPage({ params }) {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Meeting {params.id}</h1>
      <VideoCall meetingId={params.id} />
    </main>
  );
}
