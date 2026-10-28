import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

type Course = {
  title: string;
  desc: string;
  duration: string;
  category: string;
  thumbnail: string;
  fee?: string;
};

const courses: Course[] = [
  { title: "Advance Diploma in Clinical Research", desc: "Trial processes, protocols and regulations.", duration: "6 months", category: "Clinical Research", thumbnail: clinicalResearchAdvanceThumb },
  { title: "PG Diploma in Clinical Research", desc: "Advanced trial management and biostatistics.", duration: "12 months", category: "Clinical Research", thumbnail: clinicalResearchPgThumb },
  { title: "Advance Diploma in Pharmacovigilance", desc: "Drug safety, adverse event reporting and risk management.", duration: "6 months", category: "Pharmacovigilance", thumbnail: pharmacovigilanceThumb },
  { title: "Advance Diploma in Clinical Data Management", desc: "Collect, validate and manage clinical trial data.", duration: "6 months", category: "Data Management", thumbnail: dataManagementThumb },
  { title: "Advance Diploma in Medical Writing", desc: "Regulatory writing, study reports and scientific documents.", duration: "6 months", category: "Medical Writing", thumbnail: medicalWritingThumb },
  { title: "Basic Internship in Clinical Data Management", desc: "Hands-on CRF/eCRF, EDC, data validation and GCP.", duration: "4 weeks", category: "Internships", thumbnail: cdmInternshipThumb, fee: "₹999" },
  { title: "Integrated Internship – Clinical Research Documents", desc: "Work on key clinical research documents with industry mentors.", duration: "4 weeks", category: "Internships", thumbnail: crDocumentsInternshipThumb, fee: "₹1,999" },
  { title: "Python Basic", desc: "From variables to mini projects — start coding.", duration: "Flexible", category: "Programming", thumbnail: pythonProgrammingThumb, fee: "₹1,699" },
  { title: "Python Advance", desc: "OOP, exceptions, SQLite and real-world projects.", duration: "Flexible", category: "Programming", thumbnail: pythonProgrammingThumb, fee: "₹2,499" },
  { title: "Public Speaking Certificate Course", desc: "Present and speak with confidence.", duration: "3 months", category: "Soft Skills", thumbnail: publicSpeakingThumb },
  { title: "Certificate Course of Soft Skills", desc: "Communication, teamwork and leadership.", duration: "3 months", category: "Soft Skills", thumbnail: softSkillsThumb },
];

const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

const enquiryLink = (course: string) => `/contact?course=${encodeURIComponent(course)}`;

const Courses = () => {
  const [category, setCategory] = useState("All");
  const shown = category === "All" ? courses : courses.filter((c) => c.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/15 py-10">
      <div className="container">
        <h1 className="mb-6 font-display text-3xl font-bold md:text-4xl">Courses</h1>

        <Tabs value={category} onValueChange={setCategory} className="mb-8">
          <TabsList className="-mx-4 flex h-auto w-auto justify-start gap-2 overflow-x-auto bg-transparent px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {categories.map((c) => (
              <TabsTrigger
                key={c}
                value={c}
                className="shrink-0 rounded-full border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <div key={c.title} className="flex flex-col overflow-hidden rounded-xl border bg-card shadow-card transition-shadow hover:shadow-card-hover">
              <div className="relative h-40 overflow-hidden bg-muted">
                <img src={c.thumbnail} alt="" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-3 left-3 rounded-full bg-secondary/90 px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {c.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-lg font-semibold leading-snug">{c.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {c.duration}
                    {c.fee && <span className="ml-2 font-semibold text-primary">{c.fee}</span>}
                  </span>
                  <Link to={enquiryLink(c.title)}>
                    <Button size="sm">Enquire</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
