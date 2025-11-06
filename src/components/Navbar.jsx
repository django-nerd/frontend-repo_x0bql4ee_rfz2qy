import { Shield, Code, Terminal, GraduationCap, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <Shield className="h-6 w-6 text-indigo-600" />
            <span>CyberSec Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#skills" className="text-slate-600 hover:text-slate-900 flex items-center gap-2"><Code className="h-4 w-4"/>Skills</a>
            <a href="#experience" className="text-slate-600 hover:text-slate-900 flex items-center gap-2"><Terminal className="h-4 w-4"/>Experience</a>
            <a href="#education" className="text-slate-600 hover:text-slate-900 flex items-center gap-2"><GraduationCap className="h-4 w-4"/>Education</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:your.email@example.com" className="p-2 rounded-md hover:bg-slate-100" aria-label="Email"><Mail className="h-5 w-5 text-slate-700"/></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100" aria-label="GitHub"><Github className="h-5 w-5 text-slate-700"/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-slate-700"/></a>
          </div>
        </div>
      </div>
    </header>
  );
}
