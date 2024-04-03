import React, { CSSProperties } from "react";

export interface DemoProps {
  style?: CSSProperties;
}

export default function Demo({ style }: DemoProps) {
  return (
    <div
      className="p-16 flex items-center justify-center border-4 border-green-600"
      style={style}
    >
      <p>Demo</p>
    </div>
  );
}
