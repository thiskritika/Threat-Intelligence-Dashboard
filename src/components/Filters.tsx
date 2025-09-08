"use client";
import { useState } from "react";
import { useIOCStore } from "../Store/useIOCStore";

export default function Filters() {
  const { iocs, setIOCs } = useIOCStore();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");

  const handleFilter = () => {
    fetch("/iocs.json")
      .then((res) => res.json())
      .then((data) => {
        let filtered = data;

        if (typeFilter !== "all") {
          filtered = filtered.filter((item: any) => item.type === typeFilter);
        }
        if (sourceFilter !== "all") {
          filtered = filtered.filter((item: any) => item.source === sourceFilter);
        }
        if (search) {
          filtered = filtered.filter((item: any) =>
            item.value.toLowerCase().includes(search.toLowerCase())
          );
        }

        setIOCs(filtered);
      });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center bg-white dark:bg-gray-800 p-4 rounded shadow">
      <input
        type="text"
        placeholder="Search by value..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border rounded w-64"
      />

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="px-3 py-2 border rounded"
      >
        <option value="all">All Types</option>
        <option value="ip">IP</option>
        <option value="subnet">Subnet</option>
        <option value="url">URL</option>
      </select>

      <select
        value={sourceFilter}
        onChange={(e) => setSourceFilter(e.target.value)}
        className="px-3 py-2 border rounded"
      >
        <option value="all">All Sources</option>
        <option value="blocklist.de">Blocklist.de</option>
        <option value="spamhaus">Spamhaus</option>
        <option value="digitalside">Digitalside</option>
      </select>

      <button
        onClick={handleFilter}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
}
