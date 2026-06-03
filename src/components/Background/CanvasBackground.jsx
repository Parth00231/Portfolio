import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener('resize', resize);

    // Stars
    let stars = [];
    const numStars = window.innerWidth > 768 ? 1200 : 500;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          velocity: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    initStars();

    // Lightning
    let lightnings = [];

    const thunderAudio = new Audio('https://actions.google.com/sounds/v1/weather/thunder_crack.ogg');

    const handleGlobalClick = (e) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      lightnings.push(createLightning(clickX, clickY, width, height));
      
      // Screen Flash
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; // brighter flash
      ctx.fillRect(0, 0, width, height);
      
      // Play Thunder Sound with varying pitch/speed and louder volume
      const sound = thunderAudio.cloneNode();
      sound.volume = 0.6 + Math.random() * 0.4;
      sound.playbackRate = 0.7 + Math.random() * 0.6; // Simulates distance/intensity
      sound.play().catch(err => console.log('Audio play failed:', err));
    };

    window.addEventListener('click', handleGlobalClick);

    function createLightning(x, y, w, h) {
      const segments = [];
      const generateBranch = (x1, y1, x2, y2, displace) => {
        if (displace < 3) {
          segments.push({ x1, y1, x2, y2 });
        } else {
          let midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displace;
          let midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displace;
          generateBranch(x1, y1, midX, midY, displace / 2);
          generateBranch(midX, midY, x2, y2, displace / 2);
          
          if (Math.random() < 0.3) {
            let branchEndX = midX + (Math.random() - 0.5) * displace * 1.5;
            let branchEndY = midY + Math.random() * displace * 1.5;
            generateBranch(midX, midY, branchEndX, branchEndY, displace / 2);
          }
        }
      };

      const startX = x + (Math.random() - 0.5) * 200;
      generateBranch(startX, 0, x, y, 200);
      generateBranch(x, y, x + (Math.random() - 0.5) * 300, h, 200);
      
      return { segments, life: 1.5 };
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      stars.forEach(star => {
        star.alpha += star.velocity;
        if (star.alpha <= 0.1 || star.alpha >= 1) star.velocity *= -1;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Draw lightnings
      for (let i = lightnings.length - 1; i >= 0; i--) {
        const l = lightnings[i];
        l.life -= 0.04;
        if (l.life <= 0) {
          lightnings.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.strokeStyle = `rgba(220, 230, 255, ${l.life})`;
        ctx.lineWidth = 1.5 + Math.random() * 1;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(150, 200, 255, 0.8)';
        
        l.segments.forEach(seg => {
          ctx.moveTo(seg.x1, seg.y1);
          ctx.lineTo(seg.x2, seg.y2);
        });
        
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('click', handleGlobalClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-70"
    />
  );
}
