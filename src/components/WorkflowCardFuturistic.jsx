"use client";

import { useEffect, useRef } from "react";

export default function WorkflowCardFuturistic() {
  const dotRef = useRef(null);

  useEffect(() => {
    const start = Date.now();

    const animate = () => {
      const t = (Date.now() - start) / 1000;
      const x = 20 + (t * 95) % 200;

      if (dotRef.current) {
        dotRef.current.style.transform = `translateX(${x}px) translateY(-50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="w-full max-w-md p-5 rounded-2xl border border-cyan-500/30 bg-black text-white shadow-[0_0_40px_rgba(34,211,238,0.1)]">
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-cyan-300">
          Intelligent Workflows
        </h3>
        <p className="text-xs text-cyan-500/70">
          Active automation engine
        </p>
      </div>

      <div className="relative h-14 flex items-center">

        <svg className="absolute w-full h-full">
          <line
            x1="20"
            y1="28"
            x2="220"
            y2="28"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.6"
          />
        </svg>

        {/* glowing nodes */}
        <div className="absolute left-[20px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        <div className="absolute left-[90px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        <div className="absolute left-[160px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
        <div className="absolute left-[220px] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

        {/* energy packet */}
        <div
          ref={dotRef}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_12px_#22d3ee]"
          style={{ top: "50%" }}
        />
      </div>
    </div>
  );
}