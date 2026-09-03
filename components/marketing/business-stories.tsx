"use client";

import { useEffect, useState } from "react";

export type StoryItem = {
  text: string;
  label?: string;
};

export function BusinessStories({
  stories,
  heading = "Built for Businesses That Want to Grow.",
  eyebrow = "Business stories",
  storyLabel,
}: {
  stories: StoryItem[];
  heading?: string;
  eyebrow?: string;
  storyLabel?: string;
}) {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveStory((current) => (current + 1) % stories.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [stories.length]);

  return (
    <div className="self-center px-1 py-4">
      {eyebrow ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-700">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 max-w-sm text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
        {heading}
      </h2>

      <div className="mt-8 max-w-sm overflow-hidden border-l-2 border-brand-400 pl-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeStory * 100}%)` }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              aria-hidden={index !== activeStory}
              className="w-full shrink-0"
            >
              {storyLabel ? (
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-ink-400">
                  {story.label ?? storyLabel}
                </span>
              ) : null}
              <p className="text-sm leading-6 text-ink-500">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center gap-2 text-xs text-ink-400">
        {stories.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveStory(index)}
            aria-label={`Story ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeStory ? "bg-brand-600" : "bg-ink-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
