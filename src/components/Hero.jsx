import { ShieldCheck, Lock, Workflow, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700 text-xs font-medium mb-4">
              <ShieldCheck className="h-4 w-4" /> 5+ Years in Cyber Security
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Cyber Security Specialist & Linux Power User
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I secure systems end‑to‑end: hardening, threat hunting, incident response, and secure automation. Comfortable with scripting and programming, and advanced in Linux administration.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Penetration testing & vulnerability assessment</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Blue team operations, SIEM, log analysis</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Secure scripting: Bash, Python basics</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Advanced Linux: tooling, automation, hardening</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#skills" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:bg-indigo-700">
                Explore Skills
              </a>
              <span className="inline-flex items-center rounded-md px-3 py-2 text-xs font-medium bg-slate-100 text-slate-700">
                Freelance: Unavailable
              </span>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-200 to-emerald-200 rounded-3xl blur-2xl opacity-50"/>
              <div className="relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                    <Lock className="h-6 w-6 text-indigo-600"/>
                    <p className="mt-2 text-sm font-medium text-slate-900">Hardening</p>
                    <p className="text-xs text-slate-600">CIS, SSH, firewall</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
                    <Workflow className="h-6 w-6 text-emerald-600"/>
                    <p className="mt-2 text-sm font-medium text-slate-900">Automation</p>
                    <p className="text-xs text-slate-600">Bash, scripting</p>
                  </div>
                  <div className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                    <Lock className="h-6 w-6 text-orange-600"/>
                    <p className="mt-2 text-sm font-medium text-slate-900">Assessment</p>
                    <p className="text-xs text-slate-600">Pentest & VA</p>
                  </div>
                  <div className="p-4 rounded-lg bg-sky-50 border border-sky-100">
                    <Workflow className="h-6 w-6 text-sky-600"/>
                    <p className="mt-2 text-sm font-medium text-slate-900">Monitoring</p>
                    <p className="text-xs text-slate-600">SIEM & logs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
