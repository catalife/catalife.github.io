import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Award, FlaskConical, ArrowRight, Calendar, Quote } from "lucide-react";
import { motion } from "framer-motion";
import HeroCarousel from "@/components/HeroCarousel";
import RotatingText from "@/components/RotatingText";
import { testimonials } from "@/data/testimonials";
import { courses } from "@/data/courses";
import pythonProgrammingThumb from "@/assets/course-thumbnails/python-programming.png";
import cdmInternshipThumb from "@/assets/course-thumbnails/cdm-internship.png";
import crDocumentsInternshipThumb from "@/assets/course-thumbnails/cr-documents-internship.png";

const featuredPrograms = [
  {
    title: "Master Python – Basic & Advance",
    badge: "Early Bird till 5 July 2026",
    image: pythonProgrammingThumb,
    course: "Master Python – Basic & Advance",
  },
  {
    title: "Basic Internship – Clinical Data Management",
    badge: "Starting 3 August 2026",
    fee: "₹999 only",
    image: cdmInternshipThumb,
    course: "Basic Internship in Clinical Data Management",
  },
  {
    title: "Integrated Internship – CR Documents",
    badge: "Starting 3 August 2026",
    fee: "₹1,999 only",
    image: crDocumentsInternshipThumb,
    course: "Integrated Internship – Clinical Research Documents",
  },
];

const heroFacts = [
  { value: ["TCS", "IQVIA", "Ascentrik"], label: "where our alumni work" },
  { value: String(courses.length), label: "courses & internships" },
  { value: "4 weeks", label: "online internships" },
];

const features = [
  { icon: GraduationCap, title: "Expert-led", desc: "Learn from industry professionals." },
  { icon: FlaskConical, title: "Hands-on", desc: "Practical, case-based training." },
  { icon: Award, title: "Certification", desc: "Earn a certificate when you complete your course." },
  { icon: Users, title: "Placement support", desc: "Career guidance until you're hired." },
];


const enquiryLink = (course: string) => `/contact?course=${encodeURIComponent(course)}`;

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-10 text-center font-display text-3xl font-bold md:text-4xl">{children}</h2>
);

const Landing = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden py-14 md:py-16">
        <div className="container relative z-10 grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
              Clinical Research Training · Pune
            </span>
            <h1 className="mb-5 font-hero text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Launch your career in Clinical Research
            </h1>
            <p className="mb-8 max-w-md text-lg text-primary-foreground/70">
              Industry-led courses in Clinical Research, Pharmacovigilance, Data Management & Medical Writing — with placement support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                  Browse Courses
                </Button>
              </Link>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-[1.25fr_1fr_1fr] gap-4 border-t border-primary-foreground/15 pt-6 sm:grid-cols-3 sm:gap-6">
              {heroFacts.map((f) => (
                <div key={f.label}>
                  <p className="whitespace-nowrap font-hero text-lg font-bold text-secondary sm:text-2xl">
                    {Array.isArray(f.value) ? <RotatingText items={f.value} /> : f.value}
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/60">{f.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <HeroCarousel />
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionTitle>Our Approach</SectionTitle>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-xl border bg-card p-5 shadow-card">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Batches */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container">
          <SectionTitle>Latest Batches</SectionTitle>
          {/* Swipe sideways on phones, grid on larger screens */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
            {featuredPrograms.map((p) => (
              <div key={p.title} className="w-[80%] shrink-0 snap-center overflow-hidden rounded-xl border bg-card shadow-card md:w-auto">
                <Link to={enquiryLink(p.course)} className="block">
                  <img src={p.image} alt={`${p.title} flyer`} className="w-full bg-muted object-contain" />
                </Link>
                <div className="space-y-3 p-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {p.badge}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold text-primary">{"fee" in p ? p.fee : ""}</span>
                    <Link to={enquiryLink(p.course)}>
                      <Button size="sm">Enquire</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/courses" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              See all courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <SectionTitle>What Our Students Say</SectionTitle>
          <Tabs defaultValue="0">
            <TabsList className="mx-auto mb-8 flex h-auto w-fit max-w-full justify-start gap-1 overflow-x-auto rounded-full bg-card p-1.5 shadow-card">
              {testimonials.map((t, i) => (
                <TabsTrigger
                  key={t.name}
                  value={String(i)}
                  aria-label={t.name}
                  className="shrink-0 gap-2 rounded-full px-1.5 py-1.5 sm:px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <img src={t.image} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <span className="hidden sm:inline">{t.name.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {testimonials.map((t, i) => (
              <TabsContent key={t.name} value={String(i)} className="mt-0">
                <motion.figure
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border bg-card p-6 text-center shadow-card md:p-10"
                >
                  <Quote className="mx-auto mb-4 h-7 w-7 text-secondary" />
                  <blockquote className="font-display text-xl font-semibold leading-snug md:text-2xl">“{t.highlight}”</blockquote>
                  {expanded[i] ? (
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                  ) : (
                    <button
                      onClick={() => setExpanded({ ...expanded, [i]: true })}
                      className="mt-3 text-sm font-medium text-primary hover:underline"
                    >
                      Read full story
                    </button>
                  )}
                  <figcaption className="mt-6 flex items-center justify-center gap-3 text-left">
                    <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full object-cover ring-4 ring-secondary/30" />
                    <div>
                      <p className="font-semibold leading-tight">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.detail}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </TabsContent>
            ))}
          </Tabs>
          <div className="mt-8 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
              Read all student stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="container text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-primary-foreground">Ready to start?</h2>
          <p className="mx-auto mb-7 max-w-md text-primary-foreground/70">Ask us about courses, fees and the next batch.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 font-semibold">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Catalife Training Organization</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://www.instagram.com/_catalife_organization_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
            <Link to="/courses" className="hover:text-foreground">Courses</Link>
            <Link to="/testimonials" className="hover:text-foreground">Testimonials</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
