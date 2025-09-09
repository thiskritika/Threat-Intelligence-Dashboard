"use client";
import { useIOCStore } from "../Store/useIOCStore";

export default function DataTable() {
  const { iocs } = useIOCStore();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 dark:border-gray-700 bg-gray-800 dark:bg-gray-800 rounded">
        <thead className="bg-gray-700 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-2 border">Value</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Source</th>
            <th className="px-4 py-2 border">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {iocs.map((ioc, index) => (
            <tr key={index} className="hover:bg-gray-700 dark:hover:bg-gray-600">
              <td className="px-4 py-2 border">{ioc.value}</td>
              <td className="px-4 py-2 border capitalize">{ioc.type}</td>
              <td className="px-4 py-2 border">{ioc.source}</td>
              <td className="px-4 py-2 border">
                {new Date(ioc.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
