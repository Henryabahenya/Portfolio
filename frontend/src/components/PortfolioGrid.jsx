import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function PortfolioGrid({ projects }) {
  const projectList = projects || [];

  if (!projectList.length) {
    return (
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-right text-slate-500 py-12 md:ml-auto md:max-w-3xl">
          No projects to display yet.
        </p>
      </div>
    );
  }

  return (
    <ScrollReveal>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left — Section title area */}
        <div className="md:col-span-4 flex items-start justify-center md:justify-start pt-2">
          <h2 className="text-2xl font-bold text-white sticky top-24 text-center md:text-left">
            Impact
            <br />
            <span className="text-emerald-400">Portfolio</span>
          </h2>
        </div>

        {/* Right — Project cards */}
        <div className="md:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <ScrollReveal
              key={project._id || project.title}
              delay={index * 0.15}
            >
              <article className="group bg-slate-900/60 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all p-6 flex flex-col h-full">
                {/* Organization Badge */}
                {project.organization && (
                  <span className="self-start mb-3 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 uppercase tracking-wide">
                    {project.organization}
                  </span>
                )}

                {/* Project Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                {Array.isArray(project.impactMetrics) &&
                  project.impactMetrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                      {project.impactMetrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-950 text-emerald-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
