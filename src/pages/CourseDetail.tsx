import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle, CheckCircle, Lock, ArrowRight, Clock, Users, Award } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const coursesData: Record<string, {
  title: string;
  description: string;
  duration: string;
  highlights: string[];
  lessons: { id: number; title: string; duration: string; completed: boolean; locked: boolean }[];
}> = {
  "1": {
    title: "Advance Diploma in Clinical Research",
    description: "Advance Diploma in Clinical Research is a 3 months course. Learn clinical research processes, protocols, regulatory requirements, and trial management from industry experts. Affordable course fee with 100% placement assistance.",
    duration: "3 months",
    highlights: ["Affordable course fee", "Learn from Expert", "100% Placement Assistance"],
    lessons: [
      { id: 1, title: "Introduction to Clinical Research", duration: "45:00", completed: true, locked: false },
      { id: 2, title: "ICH-GCP Guidelines", duration: "60:00", completed: true, locked: false },
      { id: 3, title: "Clinical Trial Phases (I-IV)", duration: "55:00", completed: false, locked: false },
      { id: 4, title: "Regulatory Affairs & CDSCO", duration: "50:00", completed: false, locked: false },
      { id: 5, title: "Ethics in Clinical Research", duration: "40:00", completed: false, locked: true },
      { id: 6, title: "Clinical Trial Documentation", duration: "45:00", completed: false, locked: true },
    ],
  },
  "2": {
    title: "PG Diploma in Clinical Research",
    description: "PG Diploma Course in Clinical Research is an extensive 6 months course. Covers advanced clinical trial management, biostatistics, regulatory affairs, and research methodology.",
    duration: "6 months",
    highlights: ["100% Placement Assistance", "Affordable course fee", "Learn from Corporate Expert"],
    lessons: [
      { id: 1, title: "Advanced Clinical Trial Design", duration: "60:00", completed: true, locked: false },
      { id: 2, title: "Biostatistics for Clinical Research", duration: "75:00", completed: true, locked: false },
      { id: 3, title: "Regulatory Submissions & Approvals", duration: "55:00", completed: false, locked: false },
      { id: 4, title: "Clinical Project Management", duration: "65:00", completed: false, locked: false },
      { id: 5, title: "Site Management & Monitoring", duration: "50:00", completed: false, locked: true },
      { id: 6, title: "Safety Reporting & Risk Management", duration: "55:00", completed: false, locked: true },
      { id: 7, title: "Capstone Research Project", duration: "90:00", completed: false, locked: true },
    ],
  },
  "3": {
    title: "Advance Diploma in Medical Writing",
    description: "Advance Diploma in Medical Writing is a short 3 months course. Learn regulatory writing, clinical study reports, scientific publications, and medical communication.",
    duration: "3 months",
    highlights: ["Affordable course fees", "Learn from Expert", "100% Placement Assistance"],
    lessons: [
      { id: 1, title: "Introduction to Medical Writing", duration: "45:00", completed: true, locked: false },
      { id: 2, title: "Clinical Study Reports (CSR)", duration: "60:00", completed: false, locked: false },
      { id: 3, title: "Regulatory Document Writing", duration: "55:00", completed: false, locked: false },
      { id: 4, title: "Scientific Publications & Journals", duration: "50:00", completed: false, locked: true },
      { id: 5, title: "Medical Communication & SOPs", duration: "45:00", completed: false, locked: true },
    ],
  },
  "4": {
    title: "Advance Diploma in Clinical Data Management",
    description: "Advance Diploma in Clinical Data Management is a short 3 months course. Covers data collection, validation, database design, and CDISC standards in clinical trials.",
    duration: "3 months",
    highlights: ["Affordable course fees", "Learn from Expert", "100% Placement Assistance"],
    lessons: [
      { id: 1, title: "Fundamentals of Clinical Data Management", duration: "45:00", completed: true, locked: false },
      { id: 2, title: "CRF Design & Data Collection", duration: "55:00", completed: false, locked: false },
      { id: 3, title: "Database Design & Validation", duration: "60:00", completed: false, locked: false },
      { id: 4, title: "CDISC Standards (SDTM & ADaM)", duration: "50:00", completed: false, locked: true },
      { id: 5, title: "Data Cleaning & Quality Control", duration: "45:00", completed: false, locked: true },
    ],
  },
  "5": {
    title: "Advance Diploma in Pharmacovigilance",
    description: "Advance Diploma in Pharmacovigilance is a short 3 months course. Learn drug safety, adverse event reporting, signal detection, and risk management.",
    duration: "3 months",
    highlights: ["Affordable course fees", "Learn from Expert", "100% Placement Assistance"],
    lessons: [
      { id: 1, title: "Introduction to Pharmacovigilance", duration: "45:00", completed: true, locked: false },
      { id: 2, title: "Adverse Event Reporting (ICSR)", duration: "55:00", completed: false, locked: false },
      { id: 3, title: "Signal Detection & Management", duration: "50:00", completed: false, locked: false },
      { id: 4, title: "Risk Management Plans (RMP)", duration: "55:00", completed: false, locked: true },
      { id: 5, title: "Periodic Safety Update Reports", duration: "45:00", completed: false, locked: true },
    ],
  },
  "6": {
    title: "Public Speaking Certificate Course",
    description: "Build confidence in presentations, communication, and public speaking. Essential for professionals in clinical research and pharmaceutical industry.",
    duration: "3 months",
    highlights: ["Affordable course fees", "Learn from Expert", "100% Placement Assistance"],
    lessons: [
      { id: 1, title: "Foundations of Public Speaking", duration: "40:00", completed: true, locked: false },
      { id: 2, title: "Structuring Your Presentation", duration: "35:00", completed: false, locked: false },
      { id: 3, title: "Body Language & Voice Modulation", duration: "30:00", completed: false, locked: false },
      { id: 4, title: "Handling Q&A and Difficult Audiences", duration: "35:00", completed: false, locked: true },
    ],
  },
  "7": {
    title: "Certificate Course of Soft Skills",
    description: "Improve communication, teamwork, leadership, and interpersonal skills essential for success in the clinical research and pharmaceutical field.",
    duration: "3 months",
    highlights: ["Affordable course fees", "Learn from Expert", "100% Placement Assistance"],
    lessons: [
      { id: 1, title: "Communication Skills", duration: "40:00", completed: true, locked: false },
      { id: 2, title: "Teamwork & Collaboration", duration: "35:00", completed: false, locked: false },
      { id: 3, title: "Leadership & Time Management", duration: "40:00", completed: false, locked: false },
      { id: 4, title: "Emotional Intelligence & Conflict Resolution", duration: "35:00", completed: false, locked: true },
    ],
  },
  "8": {
    title: "Python Basic",
    description: "Start your coding journey with Python! From basics to mini projects — variables, control statements, functions, data structures and file handling. Early bird fee ₹1,699 (standard ₹1,999). Certificate of completion and career support included.",
    duration: "Flexible",
    highlights: ["Expert Trainers", "Practical Learning", "Certificate of Completion", "Career Support"],
    lessons: [
      { id: 1, title: "Introduction to Python", duration: "45:00", completed: true, locked: false },
      { id: 2, title: "Variables, Data Types & Operators", duration: "50:00", completed: false, locked: false },
      { id: 3, title: "Control Statements", duration: "45:00", completed: false, locked: false },
      { id: 4, title: "Functions & Modules", duration: "55:00", completed: false, locked: false },
      { id: 5, title: "Lists, Tuples, Dictionaries, Sets", duration: "60:00", completed: false, locked: true },
      { id: 6, title: "File Handling", duration: "40:00", completed: false, locked: true },
      { id: 7, title: "Hands-on Exercises & Mini Projects", duration: "90:00", completed: false, locked: true },
    ],
  },
  "9": {
    title: "Python Advance",
    description: "Level up your skills and build real-world applications. Covers OOPs, exception handling, advanced file handling, data structures, SQLite connectivity and best practices. Early bird fee ₹2,499 (standard ₹2,999).",
    duration: "Flexible",
    highlights: ["Expert Trainers", "Practical Learning", "Certificate of Completion", "Career Support"],
    lessons: [
      { id: 1, title: "OOPs Concepts", duration: "60:00", completed: true, locked: false },
      { id: 2, title: "Exception Handling", duration: "45:00", completed: false, locked: false },
      { id: 3, title: "Modules & Packages", duration: "50:00", completed: false, locked: false },
      { id: 4, title: "File Handling (Advanced)", duration: "45:00", completed: false, locked: false },
      { id: 5, title: "Data Structures", duration: "60:00", completed: false, locked: true },
      { id: 6, title: "Database Connectivity (SQLite)", duration: "55:00", completed: false, locked: true },
      { id: 7, title: "Mini Projects & Best Practices", duration: "90:00", completed: false, locked: true },
    ],
  },
  "10": {
    title: "Basic Internship in Clinical Data Management",
    description: "Kickstart your career in Clinical Research with hands-on training in Clinical Data Management. 4-week weekend online batch starting 3rd August 2026. Program fee ₹999 only. Limited seats.",
    duration: "4 weeks",
    highlights: ["Live Interactive Sessions", "Hands-on Practical Exercises", "Real-world Case Scenarios", "Certification on Completion"],
    lessons: [
      { id: 1, title: "Introduction to Clinical Research and CDM Basics", duration: "60:00", completed: true, locked: false },
      { id: 2, title: "CRF, eCRF and EDC Overview", duration: "55:00", completed: false, locked: false },
      { id: 3, title: "Data Entry, Validation and Query Management", duration: "60:00", completed: false, locked: false },
      { id: 4, title: "Data Cleaning and Reconciliation", duration: "50:00", completed: false, locked: false },
      { id: 5, title: "GCP, ALCOA+ and Data Integrity", duration: "45:00", completed: false, locked: true },
      { id: 6, title: "Excel for CDM – Basic Skills", duration: "50:00", completed: false, locked: true },
      { id: 7, title: "Career Guidance, Resume Building & Mock Interview", duration: "60:00", completed: false, locked: true },
    ],
  },
  "11": {
    title: "Integrated Internship – Clinical Research Documents",
    description: "Hands-on understanding of key clinical research documentation with practical insights from industry professionals. 4 weeks, 7:00–8:00 PM on Google Meet. Fee ₹1,999 only. New batch starts August 3, 2026.",
    duration: "4 weeks",
    highlights: ["Internship e-certificate", "Free career guidance & mentorship", "Industry professional insights", "Networking opportunities"],
    lessons: [
      { id: 1, title: "Overview of Clinical Research Documents", duration: "60:00", completed: true, locked: false },
      { id: 2, title: "Protocol, Informed Consent & Essential Documents", duration: "60:00", completed: false, locked: false },
      { id: 3, title: "CRF, Source Documents & Trial Master File", duration: "55:00", completed: false, locked: false },
      { id: 4, title: "Practical Document Review Workshops", duration: "60:00", completed: false, locked: true },
      { id: 5, title: "Career Guidance & Mentorship Session", duration: "45:00", completed: false, locked: true },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const course = coursesData[id || "1"] || coursesData["1"];
  const [activeLesson, setActiveLesson] = useState(
    course.lessons.findIndex(l => !l.completed && !l.locked) + 1 || 1
  );

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/15 via-secondary/10 to-accent/20 py-8">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-4 aspect-video rounded-xl bg-primary/5 border flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="mx-auto mb-3 h-16 w-16 text-primary/40" />
                <p className="text-muted-foreground">Lesson {activeLesson}: {course.lessons[activeLesson - 1]?.title}</p>
                <p className="text-sm text-muted-foreground/60 mt-1">Video player placeholder</p>
              </div>
            </div>

            <h1 className="mb-2 font-display text-2xl font-bold">{course.title}</h1>
            <p className="mb-4 text-muted-foreground">{course.description}</p>

            <div className="mb-6 flex flex-wrap gap-3">
              {course.highlights.map((h) => (
                <span key={h} className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Award className="h-3 w-3" /> {h}
                </span>
              ))}
            </div>

            <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {course.duration}</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.lessons.length} lessons</span>
            </div>

            <Link to="/quiz/1">
              <Button className="gap-2">
                Take Module Quiz <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-card p-4 shadow-card h-fit">
            <h2 className="mb-4 font-display text-lg font-semibold">Course Content</h2>
            <div className="space-y-1">
              {course.lessons.map((l) => (
                <button
                  key={l.id}
                  onClick={() => !l.locked && setActiveLesson(l.id)}
                  disabled={l.locked}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${
                    activeLesson === l.id ? "bg-primary/10 text-primary" : "hover:bg-muted"
                  } ${l.locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {l.completed ? (
                    <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                  ) : l.locked ? (
                    <Lock className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <PlayCircle className="h-5 w-5 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium">{l.title}</p>
                    <p className="text-xs text-muted-foreground">{l.duration}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
