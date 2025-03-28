"use client";

import { ReactNode, useEffect } from "react";

interface ClientBodyProps {
  children: ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <div id="app">
      <div id="screen" className="min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
}
