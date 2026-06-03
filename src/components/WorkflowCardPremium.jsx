"use client";

import { useEffect, useRef } from "react";

export default function WorkflowCardPremium() {
  const dotRef = useRef(null);

  useEffect(() => {
    const start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;
      const x = 20 + (t * 70) % 200;

      if (dotRef.current) {
        dotRef.current.style.transform = `translateX(${x}px) translateY(-50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full max-w-md p-5 rounded-2xl border border-zinc-800 bg-zinc-950 text-white">
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Intelligent Workflows</h3>
        <p className="text-xs text-zinc-500">
          Deterministic automation pipeline
        </p>
      </div>

      <div className="relative h-14 flex items-center">

        <svg className="absolute w-full h-full">
          <line
            x1="20"
            y1="28"
            x2="220"
            y2="28"
            stroke="#3f3f46"
            strokeWidth="1"
            strokeDasharray="2 6"
            opacity="0.8"
          />
        </svg>

        {/* nodes */}
        <div className="absolute left-[20px] w-2 h-2 rounded-full bg-zinc-500" />
        <div className="absolute left-[90px] w-2 h-2 rounded-full bg-zinc-500" />
        <div className="absolute left-[160px] w-2 h-2 rounded-full bg-zinc-500" />
        <div className="absolute left-[220px] w-2 h-2 rounded-full bg-zinc-500" />

        {/* moving packet */}
        <div
          ref={dotRef}
          className="absolute w-2 h-2 bg-white rounded-full opacity-80"
          style={{ top: "50%" }}
        />
      </div>
    </div>
  );
}