import { useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="absolute inset-0 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px] transition-all duration-150"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </div>
  );
}
