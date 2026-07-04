"use client";

import type { ReactElement } from "react";

/**
 * Bold, animated SVG illustrations for each project card. Solid white art on
 * the card's accent gradient — reads clearly in both light and dark themes
 * (the gradient background is theme-independent). Keyed by project title.
 */

export function LiveStreamViz() {
  const bars = [14, 30, 46, 62, 40, 24, 52, 34, 18];
  return (
    <svg viewBox="0 0 220 120" className="h-24 w-auto" aria-hidden>
      <rect x="16" y="16" width="54" height="20" rx="10" fill="white" fillOpacity="0.95" />
      <circle cx="28" cy="26" r="4" fill="#ef4444">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <text x="38" y="30" fontSize="11" fontWeight="700" fill="#111">LIVE</text>
      {bars.map((h, i) => (
        <rect key={i} x={20 + i * 22} y={100 - h} width="10" height={h} rx="5" fill="white" fillOpacity="0.9">
          <animate attributeName="height" values={`${h};${h * 0.4};${h}`} dur={`${1 + (i % 4) * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="y" values={`${100 - h};${100 - h * 0.4};${100 - h}`} dur={`${1 + (i % 4) * 0.3}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

export function VideoCallViz() {
  const tiles = [
    { x: 24, y: 16 },
    { x: 116, y: 16 },
    { x: 24, y: 64 },
    { x: 116, y: 64 },
  ];
  return (
    <svg viewBox="0 0 220 120" className="h-24 w-auto" aria-hidden>
      {tiles.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width="80" height="40" rx="9" fill="white" fillOpacity="0.22" stroke="white" strokeOpacity="0.9" strokeWidth="1.5">
            <animate attributeName="fill-opacity" values="0.22;0.35;0.22" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </rect>
          {/* avatar: head + shoulders, solid white */}
          <circle cx={t.x + 40} cy={t.y + 15} r="7" fill="white" fillOpacity="0.95" />
          <path d={`M ${t.x + 27} ${t.y + 36} a 13 11 0 0 1 26 0 Z`} fill="white" fillOpacity="0.95" />
        </g>
      ))}
      {/* active-speaker ring cycling between tiles */}
      <rect width="80" height="40" rx="9" fill="none" stroke="#22c55e" strokeWidth="3">
        <animate attributeName="x" values="24;116;116;24;24" dur="4s" repeatCount="indefinite" />
        <animate attributeName="y" values="16;16;64;64;16" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.9;0.9;0.9;0.9" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

export function ArchitectureViz() {
  const layers = [
    { label: "UI", y: 16 },
    { label: "Domain", y: 50 },
    { label: "Data", y: 84 },
  ];
  return (
    <svg viewBox="0 0 220 120" className="h-24 w-auto" aria-hidden>
      {/* connectors */}
      <line x1="110" y1="40" x2="110" y2="50" stroke="white" strokeWidth="2.5" strokeOpacity="0.85" />
      <line x1="110" y1="74" x2="110" y2="84" stroke="white" strokeWidth="2.5" strokeOpacity="0.85" />
      {layers.map((l) => (
        <g key={l.label}>
          <rect x="50" y={l.y} width="120" height="24" rx="7" fill="white" fillOpacity="0.95" />
          <text x="110" y={l.y + 16} fontSize="12" fontWeight="700" fill="#312e81" textAnchor="middle">
            {l.label}
          </text>
        </g>
      ))}
      {/* data packet flowing down the layers and back */}
      <circle r="5" fill="#22d3ee" stroke="white" strokeWidth="1.5">
        <animate attributeName="cx" values="110;110;110;110;110" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" values="28;62;96;62;28" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function RealtimeViz() {
  const nodes = [
    { cx: 34, cy: 60 },
    { cx: 110, cy: 26 },
    { cx: 110, cy: 94 },
    { cx: 186, cy: 60 },
  ];
  const edges = [
    { x1: 34, y1: 60, x2: 110, y2: 26 },
    { x1: 34, y1: 60, x2: 110, y2: 94 },
    { x1: 110, y1: 26, x2: 186, y2: 60 },
    { x1: 110, y1: 94, x2: 186, y2: 60 },
  ];
  return (
    <svg viewBox="0 0 220 120" className="h-24 w-auto" aria-hidden>
      {edges.map((e, i) => (
        <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke="white" strokeWidth="2" strokeOpacity="0.55" />
      ))}
      {/* packets traveling along each edge */}
      {edges.map((e, i) => (
        <circle key={`p${i}`} r="4" fill="white">
          <animate attributeName="cx" values={`${e.x1};${e.x2}`} dur="1.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${e.y1};${e.y2}`} dur="1.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="11" fill="white" fillOpacity="0.95">
          <animate attributeName="r" values="11;13;11" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* central chat bubble */}
      <rect x="86" y="51" width="48" height="18" rx="9" fill="white" />
      {[98, 110, 122].map((cx, i) => (
        <circle key={cx} cx={cx} cy="60" r="2.2" fill="#6366f1">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export const projectVisuals: Record<string, () => ReactElement> = {
  "Live Streaming Platform": LiveStreamViz,
  "LiveKit Integration": VideoCallViz,
  "Android App Architecture": ArchitectureViz,
  "Realtime Communication": RealtimeViz,
};
