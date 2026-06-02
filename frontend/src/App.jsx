import { useState, useEffect } from "react";
import { fetchProjects, fetchSpeaking } from "./services/api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import SpeakingTimeline from "./components/SpeakingTimeline";

function App() {
  const [projects, setProjects] = useState([]);
  const [speaking, setSpeaking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData || []);

        const speakingData = await fetchSpeaking();
        setSpeaking(speakingData || []);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-3xl font-bold text-white">Impact Portfolio</h2>
          <p className="mt-2 text-slate-400">
            Projects driving measurable change across global organizations.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent" />
          </div>
        ) : (
          <PortfolioGrid projects={projects} />
        )}
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-3xl font-bold text-white">
            Public Speaking &amp; Engagements
          </h2>
          <p className="mt-2 text-slate-400">
            Keynotes, panels, and advocacy presentations across global forums.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
          </div>
        ) : (
          <SpeakingTimeline engagements={speaking} />
        )}
      </section>
    </div>
  );
}

export default App;
