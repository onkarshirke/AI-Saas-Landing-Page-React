import React, { useEffect, useRef } from "react";
import { useThemeStore } from "../../store/ThemeStore";

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  length: number;
  opacity: number;
}

export const SolarSystemAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = 150;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 1 + 0.5,
        length: Math.random() * 20 + 10,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = theme === "dark" ? "#000" : "#fff";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = theme === "dark" ? "white" : "black";
      ctx.lineCap = "round";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x, star.y + star.length);
        ctx.strokeStyle = theme === "dark"
          ? `rgba(255, 255, 255, ${star.opacity})`
          : `rgba(0, 0, 0, ${Math.min(1, star.opacity + 0.3)})`;
        ctx.lineWidth = theme === "dark" ? star.radius : star.radius * 1.5;
        ctx.stroke();

        star.y += star.speed;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = -star.length;
          star.radius = Math.random() * 1.5 + 0.5;
          star.speed = Math.random() * 1 + 0.5;
          star.length = Math.random() * 20 + 10;
          star.opacity = Math.random() * 0.5 + 0.5;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    />
  );
};
