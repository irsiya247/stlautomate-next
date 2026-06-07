"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkflowEngine() {
  const dotRef = useRef(null);

  const [activeNode, setActiveNode] = useState(0);
  const [status, setStatus] = useState("queued");
  const [cycle, setCycle] = useState(0);

  const nodes = [
    { x: 20, label: "Webhook", action: "Request received" },
    { x: 90, label: "Validate", action: "Validating payload" },
    { x: 160, label: "Process", action: "Executing workflow" },
    { x: 220, label: "Output", action: "Writing result" }
  ];

  useEffect(() => {
    let running = true;

    const run = async () => {
      while (running) {
        setStatus("queued");
        setActiveNode(-1);

        await new Promise((r) => setTimeout(r, 500));

        setStatus("running");

        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];

          setActiveNode(i);
          setStatus(node.action);

          if (dotRef.current) {
            dotRef.current.style.transition =
              "transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)";

            dotRef.current.style.transform =
              `translateX(${node.x}px) translateY(-50%)`;
          }

          await new Promise((r) => setTimeout(r, 520));
        }

        setStatus("completed");
        setCycle((c) => c + 1);

        await new Promise((r) => setTimeout(r, 800));
      }
    };

    run();

    return () => {
      running = false;
    };
  }, []);

  const nodeClass = (i) =>
    `absolute w-2 h-2 rounded-full transition-all duration-200 ${
      i === activeNode
        ? "bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] scale-125"
        : "bg-cyan-900/40"
    }`;

  return (
    <div className="w-full max-w-md p-5 rounded-2xl border border-cyan-400/10 bg-black/90 backdrop-blur-sm text-white">

      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-cyan-300">
          Intelligent Workflows
        </h3>
        <p className="text-xs text-cyan-500/60">
          Real-time workflow orchestration
        </p>
      </div>

      {/* FLOW */}
      <div className="relative h-14 flex items-center">

        {/* PATH */}
        <svg className="absolute w-full h-full">
          <line
            x1="20"
            y1="28"
            x2="220"
            y2="28"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeDasharray="3 7"
            opacity="0.35"
          />
        </svg>

        {/* NODES */}
        {nodes.map((n, i) => (
          <div
            key={i}
            className={nodeClass(i)}
            style={{ left: n.x }}
          />
        ))}

        {/* PACKET */}
        <div
          ref={dotRef}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_14px_#22d3ee]"
          style={{
            top: "50%",
            transform: "translateX(20px) translateY(-50%)"
          }}
        />
      </div>

      {/* STATUS BAR */}
      <div className="mt-4 flex justify-between text-xs font-mono text-cyan-400/70">
        <span>status: {status}</span>
        <span>runs: {cycle}</span>
      </div>
    </div>
  );
}