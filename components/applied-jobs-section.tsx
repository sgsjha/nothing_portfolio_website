import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, Globe } from "lucide-react";
import { nothing } from "@/app/font";

export default function AppliedJobsSection() {
  const jobs = [
    {
      company: "Nothing",
      role: "Web Designer",
      date: "Sep 2025",
      status: "Applied",
      note: "Submitted application via careers site",
      url: "https://job-boards.eu.greenhouse.io/nothing/jobs/4590109101",
    },
    {
      company: "Nothing",
      role: "Full Stack developer, Software Product(AI)",
      date: "Sep 2025",
      status: "Applied",
      note: "Submitted application via careers site",
      url: "https://job-boards.eu.greenhouse.io/nothing/jobs/4639317101",
    },
  ];

  return (
    <section id="applied-jobs" className="pt-20 pb-4 px-4 bg-black dotted-bg">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-mono font-bold text-center mb-12 tracking-wider text-white ${nothing.className}`}
        >
          APPLIED ROLES
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <Card key={idx} className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg text-white">
                  <Briefcase className="w-5 h-5 text-white/80" />
                  <span className="font-mono font-semibold">{job.role}</span>
                  <span className="text-white/50 font-mono text-sm ml-auto">
                    {job.company}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Calendar className="w-4 h-4 text-white/60" />
                  <span className="font-mono text-sm">Applied: {job.date}</span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {job.note}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={job.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${job.role} posting`}
                      className="w-8 h-8 inline-flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-md text-white/80"
                    >
                      <Globe className="w-4 h-4" />
                    </a>

                    <div
                      className={`text-xs font-mono px-3 py-1 rounded-full font-semibold ${
                        job.status === "Applied"
                          ? "bg-white/10 text-white/90"
                          : "bg-emerald-700 text-white"
                      }`}
                    >
                      {job.status}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
