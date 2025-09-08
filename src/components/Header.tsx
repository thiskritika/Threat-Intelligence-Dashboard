"use client";
import { useState } from "react";

export default function Header({ onRefresh }: { onRefresh: () => void }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Threat Intelligence Dashboard</h1>
      <div className="flex gap-4">
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Refresh
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-700 rounded"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
