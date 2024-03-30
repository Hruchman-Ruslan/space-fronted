import React from "react";

export interface DemoProps {}

export default function Demo({}: DemoProps) {
  return (
    <div className="w-40 h-40 flex items-center justify-center bg-white">
      <p>Demo</p>
    </div>
  );
}
