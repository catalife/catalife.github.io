import type { LucideIcon } from "lucide-react";
import { BarChart3, Code2, FileCode2, Scale } from "lucide-react";
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

export type Course = {
  title: string;
  desc: string;
  duration: string;
  category: string;
  /** Photo or flyer for the card. Courses without one show `icon` on a branded background. */
  thumbnail?: string;
  icon?: LucideIcon;
  fee?: string;
};

// The homepage course count is taken from this list, so adding a course here updates it.
export const courses: Course[] = [
  { title: "Advance Diploma in Clinical Research", desc: "Trial processes, protocols and regulations.", duration: "3 months", category: "Clinical Research", thumbnail: clinicalResearchAdvanceThumb },
  { title: "PG Diploma in Clinical Research", desc: "Advanced trial management and biostatistics.", duration: "12 months", category: "Clinical Research", thumbnail: clinicalResearchPgThumb },
  { title: "Advance Diploma in Pharmacovigilance", desc: "Drug safety, adverse event reporting and risk management.", duration: "3 months", category: "Pharmacovigilance", thumbnail: pharmacovigilanceThumb },
  { title: "Advance Diploma in Clinical Data Management", desc: "Collect, validate and manage clinical trial data.", duration: "3 months", category: "Data Management", thumbnail: dataManagementThumb },
  { title: "Advance Diploma in Medical Writing", desc: "Regulatory writing, study reports and scientific documents.", duration: "3 months", category: "Medical Writing", thumbnail: medicalWritingThumb },
  { title: "Regulatory Affairs", desc: "Drug approvals, submissions and regulatory guidelines.", duration: "1 month", category: "Regulatory Affairs", icon: Scale },
  { title: "Medical Coding", desc: "Code diagnoses and procedures using standard coding systems.", duration: "3 months", category: "Medical Coding", icon: FileCode2 },
  { title: "SAS Programming", desc: "Clinical SAS for trial data analysis and reporting.", duration: "4 months", category: "Programming", icon: BarChart3 },
  { title: "R Programming", desc: "Data analysis and statistics with R.", duration: "4 months", category: "Programming", icon: Code2 },
  { title: "Python Basic", desc: "From variables to mini projects — start coding.", duration: "1 month", category: "Programming", thumbnail: pythonProgrammingThumb, fee: "₹1,699" },
  { title: "Python Advance", desc: "OOP, exceptions, SQLite and real-world projects.", duration: "1 month", category: "Programming", thumbnail: pythonProgrammingThumb, fee: "₹2,499" },
  { title: "Basic Internship in Clinical Data Management", desc: "Hands-on CRF/eCRF, EDC, data validation and GCP.", duration: "4 weeks", category: "Internships", thumbnail: cdmInternshipThumb, fee: "₹999" },
  { title: "Integrated Internship – Clinical Research Documents", desc: "Work on key clinical research documents with industry mentors.", duration: "4 weeks", category: "Internships", thumbnail: crDocumentsInternshipThumb, fee: "₹1,999" },
  { title: "Public Speaking Certificate Course", desc: "Present and speak with confidence.", duration: "3 months", category: "Soft Skills", thumbnail: publicSpeakingThumb },
  { title: "Certificate Course of Soft Skills", desc: "Communication, teamwork and leadership.", duration: "3 months", category: "Soft Skills", thumbnail: softSkillsThumb },
];
