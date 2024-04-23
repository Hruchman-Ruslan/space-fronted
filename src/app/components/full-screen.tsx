"use client";

import Button from "./button";

import { toggleFullscreen } from "../utils/fullScreen";

export interface FullScreenProps {}

export default function FullScreen({}: FullScreenProps) {
  return (
    <div className="absolute top-10 left-10">
      <Button
        onClick={toggleFullscreen}
        twClass="p-2 bg-transparent from-transparent border-dashed border-2 border-sky-500 animate-pulse"
      >
        Full Screen
      </Button>
    </div>
  );
}
