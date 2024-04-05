import React, { CSSProperties } from "react";

export interface DemoProps {
  style?: CSSProperties;
}

export default function Demo({ style }: DemoProps) {
  return (
    <div className="p-4 flex items-center justify-center" style={style}>
      <p>Demo</p>
    </div>
  );
}
