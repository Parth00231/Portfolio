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
    const numStars = window.innerWidth > 768 ? 900 : 400;

    const starColors = [
      'rgba(255, 255, 255, ',
      'rgba(14, 165, 233, ', // cyan
      'rgba(168, 85, 247, ', // violet
      'rgba(224, 231, 255, ', // ice white
    ];

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          velocity: (Math.random() - 0.5) * 0.015,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    initStars();

    // Shooting Meteors
    let meteors = [];
    const createMeteor = () => {
      if (Math.random() < 0.015 && meteors.length < 3) {
        meteors.push({
          x: Math.random() * width * 1.2,
          y: -50,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
          alpha: 1,
        });
      }
    };

    // Lightning
    let lightnings = [];

    const handleGlobalClick = (e) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      lightnings.push(createLightning(clickX, clickY, width, height));
      
      // Screen Flash (subtle cyan/white tint)
      ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
      ctx.fillRect(0, 0, width, height);
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
        if (star.alpha <= 0.15 || star.alpha >= 0.95) star.velocity *= -1;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.fill();
      });

      // Spawn and draw meteors
      createMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.012;

        if (m.y > height + 100 || m.x < -100 || m.alpha <= 0) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, 'rgba(14, 165, 233, 0)');
        gradient.addColorStop(1, `rgba(255, 255, 255, ${m.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw lightnings
      for (let i = lightnings.length - 1; i >= 0; i--) {
        const l = lightnings[i];
        l.life -= 0.04;
        if (l.life <= 0) {
          lightnings.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 242, 254, ${l.life})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.9)';
        
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}

