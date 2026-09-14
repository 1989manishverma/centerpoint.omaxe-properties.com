"use client";

import { useEffect, useState } from "react";
import { img } from "@/lib/site";

const GALLERY = [
  {
    src: img("centerpoint-arrival.webp"),
    alt: "Omaxe Centre Point Amausi grand arrival commercial property Lucknow",
  },
  {
    src: img("centerpoint-lobby.webp"),
    alt: "Premium hotel lobby concept at Centre Point Amausi Lucknow",
  },
  {
    src: img("centerpoint-airport-view.webp"),
    alt: "Airport-facing hospitality investment concept in Amausi Lucknow",
  },
  {
    src: img("centerpoint-promenade.webp"),
    alt: "Retail promenade at Omaxe Centre Point Amausi",
  },
  {
    src: img("centerpoint-dining.webp"),
    alt: "Food and beverage commercial destination at Centre Point Amausi",
  },
];

export function Gallery() {
  const [open, setOpen] = useState<(typeof GALLERY)[number] | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="gallery">
        {GALLERY.map((item) => (
          <button key={item.src} className="g" type="button" onClick={() => setOpen(item)}>
            <img loading="lazy" src={item.src} alt={item.alt} />
          </button>
        ))}
      </div>
      <div
        className={open ? "modal open" : "modal"}
        id="modal"
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(null);
        }}
      >
        <button type="button" aria-label="Close image" onClick={() => setOpen(null)}>
          ×
        </button>
        {open ? <img src={open.src} alt={open.alt} /> : null}
      </div>
    </>
  );
}
