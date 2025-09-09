"use client";
import { useIOCStore } from "../Store/useIOCStore";

export default function SummaryCards() {
  const { iocs } = useIOCStore();

  // Count by type
  const totalIPs = iocs.filter((ioc) => ioc.type === "ip").length;
  const totalSubnets = iocs.filter((ioc) => ioc.type === "subnet").length;
  const totalURLs = iocs.filter((ioc) => ioc.type === "url").length;

  const cards = [
    { title: "Total IPs", count: totalIPs, color: "bg-gray-600" },
    { title: "Total Subnets", count: totalSubnets, color: "bg-gray-600" },
    { title: "Total URLs", count: totalURLs, color: "bg-gray-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white p-6 rounded-lg shadow-lg flex flex-col items-center`}
        >
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="text-3xl font-bold mt-2">{card.count}</p>
        </div>
      ))}
    </div>
  );
}
