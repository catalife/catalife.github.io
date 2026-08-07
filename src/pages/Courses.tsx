import { Link } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import clinicalResearchAdvanceThumb from "@/assets/course-thumbnails/clinical-research-advance.jpg";
import clinicalResearchPgThumb from "@/assets/course-thumbnails/clinical-research-pg.jpg";
import medicalWritingThumb from "@/assets/course-thumbnails/medical-writing.jpg";
import dataManagementThumb from "@/assets/course-thumbnails/data-management.jpg";
import pharmacovigilanceThumb from "@/assets/course-thumbnails/pharmacovigilance.jpg";
import publicSpeakingThumb from "@/assets/course-thumbnails/public-speaking.jpg";
import softSkillsThumb from "@/assets/course-thumbnails/soft-skills.jpg";
import pythonProgrammingThumb from "@/assets/course-thumbnails/python-programming.png";
import cdmInternshipThumb from "@/assets/course-thumbnails/cdm-internship.png";
import crDocumentsInternshipThumb from "@/assets/course-thumbnails/cr-documents-internship.png";

const featuredPrograms = [
  {
    id: 8,
    title: "Master Python – Basic & Advance",
    badge: "Early Bird till 5 July 2026",
    fee: "From ₹1,699",
    start: "Open enrollment",
    image: pythonProgrammingThumb,
  },
  {
    id: 10,
    title: "Basic Internship – Clinical Data Management",
    badge: "Starting 3 August 2026",
    fee: "₹999 only",
    start: "4 weeks · Weekend · Online",
    image: cdmInternshipThumb,
  },
  {
    id: 11,
    title: "Integrated Internship – Clinical Research Documents",
    badge: "Starting 3 August 2026",
    fee: "₹1,999 only",
    start: "4 weeks · 7–8 PM · Google Meet",
    image: crDocumentsInternshipThumb,
  },
];

const courses = [
  { id: 8, title: "Python Basic", desc: "Start your coding journey with Python – variables, control statements, functions, data structures & mini projects", lessons: 7, duration: "Flexible", category: "Programming", thumbnail: pythonProgrammingThumb, fee: "₹1,699" },
  { id: 9, title: "Python Advance", desc: "Level up with OOPs, exception handling, data structures, SQLite connectivity & real-world mini projects", lessons: 7, duration: "Flexible", category: "Programming", thumbnail: pythonProgrammingThumb, fee: "₹2,499" },
  { id: 10, title: "Basic Internship in Clinical Data Management", desc: "Hands-on CDM training covering CRF/eCRF, EDC, data validation, GCP, ALCOA+ and career guidance", lessons: 7, duration: "4 weeks", category: "Internship", thumbnail: cdmInternshipThumb, fee: "₹999" },
  { id: 11, title: "Integrated Internship – Clinical Research Documents", desc: "Hands-on understanding of key CR documentation with industry insights, e-certificate and mentorship", lessons: 5, duration: "4 weeks", category: "Internship", thumbnail: crDocumentsInternshipThumb, fee: "₹1,999" },
  { id: 1, title: "Advance Diploma in Clinical Research", desc: "In-depth knowledge of clinical research processes, protocols, and regulatory requirements", lessons: 32, duration: "6 months", category: "Clinical Research", thumbnail: clinicalResearchAdvanceThumb },
  { id: 2, title: "PG Diploma in Clinical Research", desc: "Postgraduate-level training covering advanced clinical trial management and biostatistics", lessons: 40, duration: "12 months", category: "Clinical Research", thumbnail: clinicalResearchPgThumb },
  { id: 3, title: "Advance Diploma in Medical Writing", desc: "Master regulatory writing, clinical study reports, and scientific documentation", lessons: 24, duration: "6 months", category: "Medical Writing", thumbnail: medicalWritingThumb },
  { id: 4, title: "Advance Diploma in Clinical Data Management", desc: "Data collection, validation, and management in clinical trials for data professionals", lessons: 28, duration: "6 months", category: "Data Management", thumbnail: dataManagementThumb },
  { id: 5, title: "Advance Diploma in Pharmacovigilance", desc: "Principles and practices of drug safety, risk assessment, and adverse event reporting", lessons: 26, duration: "6 months", category: "Pharmacovigilance", thumbnail: pharmacovigilanceThumb },
  { id: 6, title: "Public Speaking Certificate Course", desc: "Build confidence in presentations, communication, and public speaking for professionals", lessons: 12, duration: "3 months", category: "Soft Skills", thumbnail: publicSpeakingThumb },
  { id: 7, title: "Certificate Course of Soft Skills", desc: "Improve communication, teamwork, and leadership skills for the clinical research field", lessons: 14, duration: "3 months", category: "Soft Skills", thumbnail: softSkillsThumb },
];

const Courses = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/15 py-8">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Our Courses</h1>
          <p className="mt-1 text-muted-foreground">Explore CataLife's comprehensive pharmacy and clinical research programs</p>
        </div>

        <section className="mb-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-bold">Featured Programs</h2>
              <p className="mt-1 text-sm text-muted-foreground">New batches and early-bird offers — enroll now</p>
            </div>
            <Link to="/contact">
              <Button variant="outline" size="sm">Enquire to Enroll</Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPrograms.map((p) => (
              <div key={p.id} className="group overflow-hidden rounded-xl border bg-card shadow-card transition-shadow hover:shadow-card-hover">
                <Link to={isLoggedIn ? `/course/${p.id}` : "/contact"} className="block">
                  <img
                    src={p.image}
                    alt={`${p.title} flyer`}
                    className="w-full bg-muted object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
                <div className="space-y-3 p-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {p.badge}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.start}</p>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span className="font-display text-lg font-bold text-primary">{p.fee}</span>
                    <Link to={isLoggedIn ? `/course/${p.id}` : "/contact"}>
                      <Button size="sm">{isLoggedIn ? "View Details" : "Enroll Now"}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold">All Courses & Programs</h2>
          <p className="mt-1 text-sm text-muted-foreground">Diplomas, certificates, programming and internship programs</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.id} className="group overflow-hidden rounded-xl border bg-card shadow-card transition-shadow hover:shadow-card-hover">
              <div className="relative h-40 overflow-hidden bg-muted">
                <img
                  src={c.thumbnail}
                  alt={`${c.title} thumbnail`}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-4 left-4 rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {c.duration}</span>
                  {"fee" in c && c.fee ? (
                    <span className="font-semibold text-primary">{c.fee}</span>
                  ) : null}
                </div>
                <Link to={isLoggedIn ? `/course/${c.id}` : "/login"}>
                  <Button className="w-full" size="sm">{isLoggedIn ? "View Course" : "Login to Enroll"}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
