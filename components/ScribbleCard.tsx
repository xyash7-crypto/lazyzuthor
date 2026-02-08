"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

interface Scribble {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

interface ScribbleCardProps {
  scribble: Scribble;
}

export function ScribbleCard({ scribble }: ScribbleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Link
      href={`/canvas/${scribble.id}`}
      className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors line-clamp-2">
        {scribble.title}
      </h3>
      <div className="flex flex-col gap-2 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(scribble.created_at)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{formatTime(scribble.created_at)}</span>
        </div>
      </div>
    </Link>
  );
}
