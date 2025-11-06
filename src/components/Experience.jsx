import { Briefcase, ShieldAlert, Logs, MonitorSmartphone } from "lucide-react";

const experiences = [
  {
    role: "Cyber Security Specialist",
    period: "5+ years",
    highlights: [
      "Led system hardening projects and vulnerability remediation",
      "Performed penetration testing and produced actionable reports",
      "Implemented SIEM dashboards and log pipelines for detection",
    ],
  },
  {
    role: "Linux Administrator (Advanced)",
    period: "Ongoing",
    highlights: [
      "Automated patching and configuration with shell scripting",
      "Hardened SSH, firewall, and audit policies",
      "Container basics for isolated testing environments",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
          <p className="mt-2 text-slate-600">Hands-on security operations and Linux expertise applied across different environments.</p>
        </div>
        <div className="mt-10 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.role} className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{exp.role}</h3>
                <span className="text-sm text-slate-600">{exp.period}</span>
              </div>
              <ul className="mt-3 text-slate-700 list-disc ml-6 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
