import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SpeakingTimeline({ engagements }) {
  const items = engagements || [];

  if (!items.length) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-right text-slate-500 py-12 md:ml-auto md:max-w-3xl">
          No speaking engagements to display yet.
        </p>
      </div>
    );
  }

  return (
    <ScrollReveal>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left — Section title */}
        <div className="md:col-span-4 flex items-start justify-center md:justify-start pt-2">
          <h2 className="text-2xl font-bold text-white sticky top-24 text-center md:text-left">
            Public
            <br />
            <span className="text-emerald-400">Speaking</span>
          </h2>
        </div>

        {/* Right — Timeline content */}
        <div className="md:col-span-8 md:col-start-5">
          {items.map((engagement, index) => (
            <ScrollReveal key={engagement._id || index} delay={index * 0.2}>
              <div className="border-l-2 border-cyan-500 relative mb-10 ml-6 pl-8 pb-2">
                {/* Status dot */}
                <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-cyan-950 border-2 border-cyan-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Year / Date */}
                {engagement.year && (
                  <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {engagement.year}
                  </span>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {engagement.title}
                </h3>

                {/* Organization / Event */}
                {engagement.organization && (
                  <p className="text-sm font-medium text-slate-300 mb-2">
                    {engagement.organization}
                  </p>
                )}

                {/* Description */}
                {engagement.description && (
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {engagement.description}
                  </p>
                )}

                {/* Key Topics */}
                {Array.isArray(engagement.keyTopics) &&
                  engagement.keyTopics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {engagement.keyTopics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-950 text-emerald-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                {/* Recording Link CTA */}
                {engagement.recordingLink && (
                  <a
                    href={engagement.recordingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 block shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Watch Recording</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
