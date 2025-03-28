import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={\`border rounded shadow p-4 bg-white \${className}\`}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-gray-700">{children}</div>;
}