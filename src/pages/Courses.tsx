import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import clinicalResearchAdvanceThumb from "@/assets/course-thumbnails/clinical-research-advance.jpg";
import clinicalResearchPgThumb from "@/assets/course-thumbnails/clinical-research-pg.jpg";
import medicalWritingThumb from "@/assets/course-thumbnails/medical-writing.jpg";
import dataManagementThumb from "@/assets/course-thumbnails/data-management.jpg";
import pharmacovigilanceThumb from "@/assets/course-thumbnails/pharmacovigilance.jpg";
import publicSpeakingThumb from "@/assets/course-thumbnails/public-speaking.jpg";
import softSkillsThumb from "@/assets/course-thumbnails/soft-skills.jpg";

const courses = [
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.id} className="group rounded-xl border bg-card shadow-card transition-shadow hover:shadow-card-hover overflow-hidden">
              <div className="relative h-40">
                <img
                  src={c.thumbnail}
                  alt={`${c.title} thumbnail`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-4 left-4 rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="mb-1 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mb-4 flex items-center text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {c.duration}</span>
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
