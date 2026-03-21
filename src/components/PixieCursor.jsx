import { useEffect } from "react";

const GOLD_SHADES = ["#ffd700", "#ffec6e", "#ffaa00", "#fffacd", "#ffc200"];

export const PixieCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "pixie-cursor";
    document.body.appendChild(cursor);

    const onMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      spawnParticles(e.clientX, e.clientY);
    };

    const spawnParticles = (x, y) => {
      const count = 5;
      for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "pixie-particle";
        const size = Math.random() * 6 + 3;
        const color = GOLD_SHADES[Math.floor(Math.random() * GOLD_SHADES.length)];
        const dx = (Math.random() - 0.5) * 40;
        const dy = (Math.random() - 0.5) * 40;
        p.style.cssText = `
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 ${size}px ${color};
          --dx: ${dx}px;
          --dy: ${dy}px;
          animation-delay: ${Math.random() * 0.1}s;
        `;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 900);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cursor.remove();
    };
  }, []);

  return null;
};