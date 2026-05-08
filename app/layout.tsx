"use client"; 

import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <html lang="en">
      <body className="antialiased">
       <nav className="fixed top-0 w-full z-50 p-4 bg-gray-900 border-b border-gray-800">
          <ul className="flex items-center gap-6 list-none">
            <li className="logo-item">
              <a href="/">
                <img src="/jkl_assets/jkl.png" alt="Logo" className="h-10 w-auto" />
              </a>
            </li>
            <li><a className="text-white font-semibold hover:text-jkl-green" href="/">Home</a></li>
            <li><a className="text-white font-semibold hover:text-jkl-green" href="/about">About</a></li>
            
            <li className="relative">
              <button 
                onClick={() => setIsPortalOpen(!isPortalOpen)}
                className="text-white font-semibold flex items-center gap-1 cursor-pointer hover:text-jkl-green"
              >
                Portal
                <span className={`text-xs transition-transform ${isPortalOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isPortalOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                  <a 
                    href="/student-auth"
                    className="block px-4 py-2 text-gray-800 hover:bg-jkl-green hover:text-white"
                  >
                    Student Portal
                  </a>
                  <a 
                    href="/faculty-auth" 
                    className="block px-4 py-2 text-gray-800 hover:bg-jkl-green hover:text-white"
                  >
                    Employee Portal
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}