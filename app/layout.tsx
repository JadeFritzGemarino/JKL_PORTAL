"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Add the paths here where you want the top nav to DISAPPEAR
  // Example: If your login page is "/login" or "/student-auth"
  const hideNav =

    pathname === "/enrollment-page" ||
    pathname.startsWith("/dashboard");

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {!hideNav && (
          <nav className="bg-[#0a0f1e] px-10 py-5">
            <ul className="flex items-center w-full list-none">
              <li className="mr-8">
                <a href="/">
                  <img src="/jkl_assets/jkl.png" alt="Logo" className="h-10 w-auto" />
                </a>
              </li>

              <li className="mr-6">
                <a className="text-white font-bold hover:text-jkl-green" href="/">Home</a>
              </li>
              <li>
                <a className="text-white font-bold hover:text-jkl-green" href="/about">About</a>
              </li>

              <li className="ml-auto">
                <a
                  href="/auth-page"
                  className="group text-white font-bold flex items-center gap-1 hover:text-jkl-green transition-all duration-300 transform hover:scale-105"
                >
                  Login
                  <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                    ▼
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        )}

        <main>{children}</main>
      </body>
    </html>
  );
}