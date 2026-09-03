"use client";

import { useEffect, useState } from "react";

const stories = [
  "From managing orders in notebooks to running a reliable online shop, Sarah's boutique now serves customers across Kampala every day.",
  "A small catering team turned repeat WhatsApp requests into a polished digital storefront that makes booking simple for every client.",
  "What began as a neighborhood electronics stall is now a growing business with a professional presence customers can trust.",
];

export function BusinessStories() {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveStory((current) => (current + 1) % stories.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="self-center px-1 py-4">

      <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
        Built for Businesses That Want to Grow.
      </h2>

      <div className="mt-8 max-w-sm overflow-hidden border-l-2 border-brand-400 pl-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeStory * 100}%)` }}>
          {stories.map((story, index) => (
            <p
              key={index}
              aria-hidden={index !== activeStory}
              className="w-full shrink-0 text-sm leading-6 text-ink-500">
              {story}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-2 text-xs text-ink-400">
        {stories.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeStory ? "bg-brand-600" : "bg-ink-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
