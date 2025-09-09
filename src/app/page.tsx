"use client";
import { useIOCStore } from "../Store/useIOCStore";
import { useEffect } from "react";
import Navbar from "../components/navbar-menu-demo";
import SummaryCards from "../components/SummaryCards"
import Filters from "../components/Filters";
import DataTable from "../components/DataTable";
import Loader from "../components/Loader";
import { IOC } from "../types/ioc"


export default function Page() {
  const { iocs, setIOCs } = useIOCStore();

  const fetchIOCs = async () => {
    const res = await fetch("/iocs.json");
    const data: IOC[] = await res.json();
    setIOCs(data);
  };

  useEffect(() => {
    fetchIOCs();
  }, []);
  return (

    <>
      <main className="p-6 bg-gray-900 min-h-screen text-white">
        <div className="h-32  dark:bg-black">
           <Navbar />
        </div>
      
      <div className="p-6 space-y-6">
        <SummaryCards />
        <Filters />
        {iocs.length === 0 ? <Loader /> : <DataTable />}
      </div>
    </main >
       </>
  );
}
