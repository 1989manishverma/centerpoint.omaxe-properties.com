"use client";

import { useEffect, useState } from "react";
import { img } from "@/lib/site";

const SLIDES = [
  img("centerpoint-aerial.webp"),
  img("centerpoint-arrival.webp"),
  img("centerpoint-promenade.webp"),
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      {SLIDES.map((src, index) => (
        <img key={src} className={index === active ? "active" : ""} src={src} alt="" />
      ))}
    </div>
  );
}
