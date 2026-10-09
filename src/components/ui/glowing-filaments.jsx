import React, { useEffect, useRef } from 'react';

export default function GlowingFilaments({
  color = '#C4924A',
  secondaryColor = '#E5C388',
  filamentCount = 14,
  speed = 0.008,
  className = ''
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Filament lines structure
    const filaments = Array.from({ length: filamentCount }, (_, i) => ({
      startY: (height / filamentCount) * i + Math.random() * 20,
      amplitude: 40 + Math.random() * 60,
      frequency: 0.002 + Math.random() * 0.003,
      phase: Math.random() * Math.PI * 2,
      speed: speed * (0.6 + Math.random() * 0.8),
      lineWidth: 1.5 + Math.random() * 2,
      opacity: 0.25 + Math.random() * 0.45,
    }));

    // Embers / glowing particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1 + Math.random() * 2.5,
      speedY: 0.2 + Math.random() * 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: 0.2 + Math.random() * 0.7,
    }));

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Radial background glow spot in the center-right
      const radialGlow = ctx.createRadialGradient(
        width * 0.7,
        height * 0.5,
        20,
        width * 0.7,
        height * 0.5,
        width * 0.6
      );
      radialGlow.addColorStop(0, 'rgba(196, 146, 74, 0.18)');
      radialGlow.addColorStop(0.5, 'rgba(196, 146, 74, 0.05)');
      radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw Glowing Filaments
      filaments.forEach((f, idx) => {
        ctx.beginPath();

        const grad = ctx.createLinearGradient(0, 0, width, 0);
        const isGold = idx % 2 === 0;
        const strokeCol = isGold ? color : secondaryColor;

        grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        grad.addColorStop(0.2, `rgba(196, 146, 74, ${f.opacity * 0.3})`);
        grad.addColorStop(0.5, strokeCol);
        grad.addColorStop(0.8, `rgba(229, 195, 136, ${f.opacity * 0.5})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = f.lineWidth;
        ctx.shadowColor = '#C4924A';
        ctx.shadowBlur = 15;

        let prevX = 0;
        let prevY = f.startY + Math.sin(time * f.speed + f.phase) * f.amplitude;
        ctx.moveTo(prevX, prevY);

        const step = 20;
        for (let x = step; x <= width + step; x += step) {
          const wave1 = Math.sin(x * f.frequency + time * f.speed + f.phase) * f.amplitude;
          const wave2 = Math.cos(x * f.frequency * 0.5 + time * f.speed * 0.7) * (f.amplitude * 0.5);
          const y = f.startY + wave1 + wave2;

          const cpX = (prevX + x) / 2;
          const cpY = (prevY + y) / 2;
          ctx.quadraticCurveTo(prevX, prevY, cpX, cpY);

          prevX = x;
          prevY = y;
        }

        ctx.stroke();
        ctx.shadowBlur = 0; // Reset blur for performance
      });

      // Render drifting ember sparks
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 195, 136, ${p.opacity})`;
        ctx.shadowColor = '#C4924A';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, secondaryColor, filamentCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
