import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, Move, RefreshCw } from 'lucide-react';

export default function DraggableKnotOfLight() {
  const canvasRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0.3, y: 0.5, z: 0 });
  const velocityRef = useRef({ x: 0.003, y: 0.005 });
  const [isDraggingState, setIsDraggingState] = useState(false);
  const [activePalette, setActivePalette] = useState('ember'); // 'ember' | 'apple' | 'vital'

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set high-DPI resolution
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Knot Parametric Formula (Trefoil / Torus Knot)
    // x(t) = sin(t) + 2*sin(2t)
    // y(t) = cos(t) - 2*cos(2t)
    // z(t) = -sin(3t)
    const pointsCount = 450;
    const strandsCount = 3;

    // Color Palettes
    const palettes = {
      ember: [
        { r: 255, g: 121, b: 27 },   // Signal Orange
        { r: 255, g: 48,  b: 55 },   // Pulse Red
        { r: 196, g: 146, b: 74 },   // Flame Gold
      ],
      apple: [
        { r: 0,   g: 113, b: 227 },  // Apple Blue
        { r: 0,   g: 217, b: 89 },   // Vital Green
        { r: 245, g: 245, b: 247 },  // Porcelain
      ],
      vital: [
        { r: 0,   g: 217, b: 89 },   // Vital Green
        { r: 255, g: 121, b: 27 },   // Signal Orange
        { r: 0,   g: 102, b: 204 },  // Link Blue
      ]
    };

    // Orbiting particle embers
    const particles = Array.from({ length: 80 }, () => ({
      u: Math.random() * Math.PI * 2,
      speed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      offsetRadius: Math.random() * 25 + 10,
      size: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.7 + 0.3
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const scale = Math.min(width, height) * 0.11;

      ctx.clearRect(0, 0, width, height);

      // Apply physics inertia if not dragging
      if (!isDraggingRef.current) {
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        velocityRef.current.x *= 0.98;
        velocityRef.current.y *= 0.98;
        
        // Maintain a minimum ambient drift
        if (Math.abs(velocityRef.current.x) < 0.002) velocityRef.current.x = 0.002;
        if (Math.abs(velocityRef.current.y) < 0.003) velocityRef.current.y = 0.003;
      }

      const rx = rotationRef.current.x;
      const ry = rotationRef.current.y;

      // 3D rotation matrix calculations
      const cosX = Math.cos(rx), sinX = Math.sin(rx);
      const cosY = Math.cos(ry), sinY = Math.sin(ry);

      const project = (x, y, z) => {
        // Rotate around Y
        let x1 = x * cosY + z * sinY;
        let y1 = y;
        let z1 = -x * sinY + z * cosY;

        // Rotate around X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Perspective projection
        const fov = 400;
        const distance = fov / (fov + z2);
        return {
          px: centerX + x2 * scale * distance,
          py: centerY + y2 * scale * distance,
          pz: z2,
          scale: distance
        };
      };

      const currentPalette = palettes[activePalette] || palettes.ember;

      // Draw Multi-Strand Knot Filaments
      for (let s = 0; s < strandsCount; s++) {
        const strandOffset = (s * Math.PI * 2) / strandsCount;
        const color = currentPalette[s % currentPalette.length];

        ctx.beginPath();
        let prevPt = null;

        for (let i = 0; i <= pointsCount; i++) {
          const t = (i / pointsCount) * Math.PI * 4 + time * 0.2;
          
          // Parametric Torus Knot (p=2, q=3) with phase offset
          const r = 2 + 0.8 * Math.sin(3 * t + strandOffset);
          const rawX = r * Math.cos(2 * t);
          const rawY = r * Math.sin(2 * t);
          const rawZ = 0.8 * Math.cos(3 * t + strandOffset);

          const proj = project(rawX, rawY, rawZ);

          if (i === 0) {
            ctx.moveTo(proj.px, proj.py);
          } else {
            // Depth shading & line width
            const depthFactor = (proj.pz + 4) / 8;
            const alpha = Math.max(0.2, Math.min(1, depthFactor));
            const lineWidth = Math.max(1.5, 4.5 * proj.scale);

            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha * 0.85})`;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.shadowBlur = 18 * proj.scale;
            ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;

            ctx.lineTo(proj.px, proj.py);
          }
          prevPt = proj;
        }
        ctx.stroke();
      }

      // Draw Orbiting Particle Embers around the Knot
      particles.forEach((p, idx) => {
        p.u += p.speed;
        const t = p.u;
        const rawX = (2 + 0.8 * Math.sin(3 * t)) * Math.cos(2 * t) + Math.cos(t * 5) * 0.3;
        const rawY = (2 + 0.8 * Math.sin(3 * t)) * Math.sin(2 * t) + Math.sin(t * 5) * 0.3;
        const rawZ = 0.8 * Math.cos(3 * t) + Math.sin(t * 3) * 0.3;

        const proj = project(rawX, rawY, rawZ);
        const color = currentPalette[idx % currentPalette.length];

        ctx.beginPath();
        ctx.arc(proj.px, proj.py, Math.max(0.5, p.size * proj.scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.alpha * proj.scale})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
        ctx.fill();
      });

      // Ambient Core Glow Bloom behind knot
      const gradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, Math.min(width, height) * 0.35);
      const leadColor = currentPalette[0];
      gradient.addColorStop(0, `rgba(${leadColor.r}, ${leadColor.g}, ${leadColor.b}, 0.15)`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activePalette]);

  // Mouse & Touch Drag Event Handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDraggingState(true);
    previousMousePositionRef.current = {
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      y: e.clientY || (e.touches && e.touches[0].clientY) || 0
    };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const deltaX = currentX - previousMousePositionRef.current.x;
    const deltaY = currentY - previousMousePositionRef.current.y;

    rotationRef.current.y += deltaX * 0.008;
    rotationRef.current.x += deltaY * 0.008;

    velocityRef.current = {
      x: deltaY * 0.002,
      y: deltaX * 0.002
    };

    previousMousePositionRef.current = { x: currentX, y: currentY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDraggingState(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
      
      {/* 3D INTERACTIVE CANVAS */}
      <div 
        className={`relative w-full h-[420px] sm:h-[480px] lg:h-[540px] rounded-[28px] overflow-hidden bg-[#000000] border border-white/10 transition-cursor ${
          isDraggingState ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
        />

        {/* OVERLAY INSTRUCTION BADGE */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="bg-[#111111]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <Move className="w-3.5 h-3.5 text-[#ff791b] animate-bounce" />
            <span className="text-xs font-semibold text-[#f5f5f7] tracking-tight">
              {isDraggingState ? 'Girando Nudo de Luz 3D...' : 'Arrastra para girar el nudo de luz 3D'}
            </span>
          </div>

          <div className="bg-[#111111]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#00d959]">
            <span className="w-2 h-2 rounded-full bg-[#00d959] animate-ping" />
            <span>60 FPS KNOT</span>
          </div>
        </div>

        {/* PALETTE TOGGLE CONTROLS (INTERACTIVE) */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 bg-[#111111]/90 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            <span className="text-[10px] uppercase font-semibold text-[#86868b] px-2 hidden sm:inline-block">
              Espectro:
            </span>
            
            <button
              onClick={() => setActivePalette('ember')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activePalette === 'ember'
                  ? 'bg-[#ff791b] text-black font-bold shadow-md'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              Fuego Encino
            </button>

            <button
              onClick={() => setActivePalette('apple')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activePalette === 'apple'
                  ? 'bg-[#0071e3] text-white font-bold shadow-md'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              Cava Blue
            </button>

            <button
              onClick={() => setActivePalette('vital')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activePalette === 'vital'
                  ? 'bg-[#00d959] text-black font-bold shadow-md'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              Maduración
            </button>
          </div>

          <span className="text-[11px] text-[#86868b] font-mono hidden md:inline-block">
            PÚA HERO 33 BLOCK
          </span>
        </div>

      </div>

    </div>
  );
}
