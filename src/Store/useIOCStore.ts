import { create } from "zustand";
import { IOC } from "../types/ioc";

interface IOCState {
  iocs: IOC[];
  setIOCs: (data: IOC[]) => void;
}

export const useIOCStore = create<IOCState>((set) => ({
  iocs: [],
  setIOCs: (data) => set({ iocs: data }),
}));
