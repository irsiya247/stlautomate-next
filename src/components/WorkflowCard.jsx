"use client";

import { useEffect, useRef } from "react";

export default function WorkflowCard() {
  const dotRef = useRef(null);

  useEffect(() => {
    const start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;
      const x = 20 + (t * 90) % 220;

      if (dotRef.current) {
        dotRef.current.style.transform = `translateX(${x}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full max-w-md p-5 rounded-2xl border border-zinc-800 bg-zinc-950 text-white">
      
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">
          Intelligent Workflows
        </h3>
        <p className="text-xs text-zinc-400">
          Automated system execution layer
        </p>
      </div>

      {/* Mini Flow */}
      <div className="relative h-14 flex items-center">

        {/* line */}
        <svg className="absolute w-full h-full">
          <line
            x1="20"
            y1="28"
            x2="240"
            y2="28"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />
        </svg>

        {/* nodes */}
        <div className="absolute left-[20px] w-2 h-2 rounded-full bg-cyan-400" />
        <div className="absolute left-[90px] w-2 h-2 rounded-full bg-cyan-400" />
        <div className="absolute left-[160px] w-2 h-2 rounded-full bg-cyan-400" />
        <div className="absolute left-[240px] w-2 h-2 rounded-full bg-cyan-400" />

        {/* moving packet */}
        <div
          ref={dotRef}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        />
      </div>
    </div>
  );
}