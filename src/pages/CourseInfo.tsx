import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Briefcase, CheckCircle2, Clock, Download, Monitor, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, slugify } from "@/data/courses";

const WHATSAPP = "918483844076";

const enrolSteps = [
  "Send an enquiry or message us on WhatsApp.",
  "We share the next batch date, schedule and fees.",
  "Confirm your seat and start learning online.",
];

const CourseInfo = () => {
  const { slug } = useParams();
  const course = courses.find((c) => slugify(c.title) === slug);
  if (!course) return <Navigate to="/courses" replace />;
  const d = course.details;
  const enquire = `/contact?course=${encodeURIComponent(course.title)}`;
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Catalife, I'd like to know more about ${course.title}.`)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="gradient-hero py-10 md:py-14">
        <div className="container">
          <Link to="/courses" className="mb-6 inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> All courses
          </Link>
          <span className="mb-3 block w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{course.category}</span>
          <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">{course.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-primary-foreground/70">{course.desc}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-secondary" /> {course.duration}</span>
            <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-secondary" /> 100% online</span>
            {d?.schedule && <span className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-secondary" /> {d.schedule}</span>}
          </div>
        </div>
      </section>

      <div className="container grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          {d?.learn && (
            <section className="rounded-2xl border bg-card p-6 shadow-card md:p-8">
              <h2 className="mb-5 font-display text-xl font-bold">What you'll learn</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {d.learn.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {d?.careers && (
            <section>
              <h2 className="mb-4 font-display text-xl font-bold">Career opportunities</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {d.careers.map((c) => (
                  <div key={c} className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-card">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15">
                      <Briefcase className="h-4 w-4 text-secondary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {d?.highlights && (
            <section>
              <h2 className="mb-4 font-display text-xl font-bold">Program highlights</h2>
              <div className="flex flex-wrap gap-2">
                {d.highlights.map((h) => (
                  <span key={h} className="rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-card">{h}</span>
                ))}
              </div>
            </section>
          )}

          {d?.whoCanJoin && (
            <section className="flex gap-4 rounded-2xl border bg-card p-6 shadow-card">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-lg font-bold">Who can join?</h2>
                <p className="mt-1 text-sm text-muted-foreground">{d.whoCanJoin}</p>
              </div>
            </section>
          )}

          <section>
            <h2 className="mb-4 font-display text-xl font-bold">How to enrol</h2>
            <ol className="grid gap-3 sm:grid-cols-3">
              {enrolSteps.map((step, i) => (
                <li key={step} className="rounded-xl border bg-card p-4 shadow-card">
                  <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <p className="text-sm">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Sticky enquiry card */}
        <aside className="h-fit rounded-2xl border bg-card p-6 shadow-card lg:sticky lg:top-24">
          <p className="text-sm text-muted-foreground">Duration</p>
          <p className="font-display text-2xl font-bold">{course.duration}</p>
          {course.fee && (
            <>
              <p className="mt-4 text-sm text-muted-foreground">Fee</p>
              <p className="font-display text-2xl font-bold text-primary">{course.fee}</p>
            </>
          )}
          <div className="mt-6 space-y-3">
            <Link to={enquire} className="block">
              <Button className="w-full font-semibold">Enquire Now</Button>
            </Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full gap-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10">Chat on WhatsApp</Button>
            </a>
            <a href="/catalife-brochure.pdf" download className="flex items-center justify-center gap-1.5 pt-1 text-sm font-medium text-primary hover:underline">
              <Download className="h-4 w-4" /> Download brochure
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseInfo;
