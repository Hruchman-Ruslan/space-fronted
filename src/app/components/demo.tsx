import React from "react";

export interface DemoProps {}

export default function Demo({}: DemoProps) {
  return (
    <div className="w-96 h-96 flex items-center justify-center border-4 border-green-600">
      <p>Demo</p>
    </div>
  );
}
