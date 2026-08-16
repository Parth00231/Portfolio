import { useEffect, useRef, useState } from 'react';

export default function LightningCursor() {
  const canvasRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -100, y: -100 };
    let hue = 180; // Start at Teal

    // Cache interactables to prevent layout thrashing
    let interactables = [];
    const updateInteractables = () => {
      const elements = document.querySelectorAll('a, button, input, [role="button"], .skill-node');
      interactables = Array.from(elements).map(el => {
        const rect = el.getBoundingClientRect();
        return { el, rect };
      });
    };

    // Update interactables occasionally or on scroll/resize
    updateInteractables();
    const intervalId = setInterval(updateInteractables, 500);

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      updateInteractables();
    };

    const onScroll = () => {
      updateInteractables();
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Procedural Lightning using midpoint displacement
    const drawLightning = (x1, y1, x2, y2, opacity) => {
      const segments = [];
      const createBranch = (startX, startY, endX, endY, displace) => {
        if (displace < 2) {
          segments.push({ x1: startX, y1: startY, x2: endX, y2: endY });
        } else {
          let midX = (startX + endX) / 2;
          let midY = (startY + endY) / 2;
          midX += (Math.random() - 0.5) * displace;
          midY += (Math.random() - 0.5) * displace;
          createBranch(startX, startY, midX, midY, displace / 2);
          createBranch(midX, midY, endX, endY, displace / 2);
        }
      };
      
      const dist = Math.hypot(x2 - x1, y2 - y1);
      createBranch(x1, y1, x2, y2, dist * 0.4);

      ctx.beginPath();
      const strobe = opacity * (Math.random() > 0.2 ? 1 : 0.1);
      ctx.strokeStyle = `hsla(${hue}, 100%, 80%, ${strobe})`;
      ctx.lineWidth = (Math.random() * 4 + 1) * (opacity + 0.2); 
      ctx.shadowBlur = Math.random() * 20 + 10;
      ctx.shadowColor = `hsla(${hue}, 100%, 50%, 0.9)`;

      segments.forEach(seg => {
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
      });
      ctx.stroke();
      ctx.shadowBlur = 0; // reset
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Cycle color (Neon Teal -> Violet -> Cosmic Pink -> Electric Blue)
      hue += 0.8;
      if (hue > 360) hue = 0;

      // Draw Proximity Lightning Arcs
      interactables.forEach(({ rect }) => {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distToCenter = Math.hypot(centerX - mouse.x, centerY - mouse.y);

        if (distToCenter < 220 && distToCenter > 0) {
          const edgeX = Math.max(rect.left, Math.min(mouse.x, rect.right));
          const edgeY = Math.max(rect.top, Math.min(mouse.y, rect.bottom));
          
          const edgeDist = Math.hypot(edgeX - mouse.x, edgeY - mouse.y);
          
          if (edgeDist < 220) {
            const opacity = 1 - (edgeDist / 220);
            drawLightning(mouse.x, mouse.y, edgeX, edgeY, opacity);
          }
        }
      });

      // Draw Core Pointer
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue}, 100%, 75%)`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen"
    />
  );
}

