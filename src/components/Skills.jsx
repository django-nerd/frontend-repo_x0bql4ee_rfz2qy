import { Shield, Network, Cpu, Code2, TerminalSquare, Server, Bug, Wrench } from "lucide-react";

const skills = [
  { icon: Shield, title: "Security", items: ["Pentest", "Vuln Assessment", "Threat Hunting", "IR"] },
  { icon: Network, title: "Networking", items: ["TCP/IP", "Firewall", "VPN", "Wireshark"] },
  { icon: TerminalSquare, title: "Linux", items: ["Hardening", "Automation", "Shell", "Systemd"] },
  { icon: Code2, title: "Programming", items: ["Bash", "Python (basic)", "Scripting"] },
  { icon: Server, title: "Platforms", items: ["SIEM", "IDS/IPS", "Cloud basics"] },
  { icon: Bug, title: "Tools", items: ["Nmap", "Burp", "Metasploit", "nuclei"] },
  { icon: Wrench, title: "DevOps", items: ["Git", "Docker basics", "CI/CD basics"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Core Skills</h2>
          <p className="mt-2 text-slate-600">Focused on practical security with strong Linux foundation and hands-on tooling.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-indigo-600"/>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
              </div>
              <ul className="mt-3 text-sm text-slate-700 space-y-1.5 list-disc ml-6">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
