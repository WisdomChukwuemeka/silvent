"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function MeetingsList() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/meeting/") // 🚀 no auth header needed
      .then((res) => setMeetings(res.data.data))
      .catch((err) => console.error("Error fetching meetings:", err));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meetings</h1>
      {meetings.length === 0 ? (
        <p className="text-gray-500">No meetings found.</p>
      ) : (
        meetings.map((m) => (
          <div key={m.id} className="p-4 border rounded mb-3">
            <h2 className="text-lg font-semibold">{m.title}</h2>
            <p className="text-sm text-gray-600">{m.description}</p>
            <Link
              href={`/meeting/${m.id}`}
              className="text-blue-500 hover:underline"
            >
              Join Meeting
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
