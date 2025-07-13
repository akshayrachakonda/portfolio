'use client';
import { useEffect } from 'react';

export default function StarBackground() {
  useEffect(() => {
    const canvas = document.getElementById('star-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
    }));

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }
    };

    const update = () => {
      for (const star of stars) {
        star.y += 0.3;
        if (star.y > h) star.y = 0;
      }
    };

    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
        id="star-canvas"
        className="fixed inset-0 w-full h-full z-0"
        style={{ pointerEvents: 'none' }} // 👈 Add this
    />

  );
}
