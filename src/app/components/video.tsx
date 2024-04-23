import React, { HTMLAttributes } from "react";

export interface VideoProps extends Partial<HTMLAttributes<HTMLVideoElement>> {
  src: string;
}

export default function Video({ src }: VideoProps) {
  return (
    <div>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        preload="auto"
        loop
        style={{ objectFit: "cover" }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent from-30% via-indigo-700 via-50% to-transparent to-70%"></div>
    </div>
  );
}
