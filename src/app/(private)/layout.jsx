"use client";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

export default function Home({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg p-4">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white shadow-lg rounded-lg md:rounded-l-none p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
