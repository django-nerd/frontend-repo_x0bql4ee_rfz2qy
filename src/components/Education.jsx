import { GraduationCap, School } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Education</h2>
          <p className="mt-2 text-slate-600">Currently studying in vocational high school with a focus on computer and networking.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-indigo-600"/>
              <div>
                <p className="font-semibold text-slate-900">Sekolah Menengah BOASH (Borcess Ashokal Hajar)</p>
                <p className="text-sm text-slate-600">Major: TKJ (Teknik Komputer & Jaringan)</p>
              </div>
            </div>
            <p className="mt-3 text-slate-700">Practical studies on networking, system administration, and foundational security concepts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
