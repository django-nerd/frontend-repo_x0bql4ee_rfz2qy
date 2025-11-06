import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} CyberSec Portfolio — All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
