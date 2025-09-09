"use client"
import { useState, useEffect } from "react"
import { Menu } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils"
import { RefreshCw, Sun, Moon } from "lucide-react"

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  )
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    // Check if dark mode is stored in localStorage
    const savedDarkMode = localStorage.getItem("darkMode");
    
    // Check system preference if no saved preference exists
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialDarkMode = savedDarkMode !== null 
      ? savedDarkMode === "true" 
      : systemPrefersDark;
    
    setIsDarkMode(initialDarkMode);
    
    // Apply the dark mode class
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleRefresh = () => {
    window.location.reload()
  }

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem("darkMode", String(newDarkMode));
    
    // Toggle the dark class
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center px-4 py-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Threat Intelligence
          </span>
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>

        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </Menu>
    </div>
  )
}