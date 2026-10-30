import type { LucideIcon } from "lucide-react";
import clinicalResearchAdvanceThumb from "@/assets/course-thumbnails/clinical-research-advance.jpg";
import medicalWritingThumb from "@/assets/course-thumbnails/medical-writing.jpg";
import dataManagementThumb from "@/assets/course-thumbnails/data-management.jpg";
import pharmacovigilanceThumb from "@/assets/course-thumbnails/pharmacovigilance.jpg";
import softSkillsThumb from "@/assets/course-thumbnails/soft-skills.jpg";
import pythonProgrammingThumb from "@/assets/course-thumbnails/python-programming.png";
import cdmInternshipThumb from "@/assets/course-thumbnails/cdm-internship.png";
import crDocumentsInternshipThumb from "@/assets/course-thumbnails/cr-documents-internship.png";
// Photos from Unsplash (free to use under the Unsplash License)
import sasProgrammingThumb from "@/assets/course-thumbnails/sas-programming.jpg";
import rProgrammingThumb from "@/assets/course-thumbnails/r-programming.jpg";
import medicalCodingThumb from "@/assets/course-thumbnails/medical-coding.jpg";
import regulatoryAffairsThumb from "@/assets/course-thumbnails/regulatory-affairs.jpg";

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
  { title: "Clinical Research", desc: "Trial processes, protocols and regulations.", duration: "1 month", category: "Clinical Research", thumbnail: clinicalResearchAdvanceThumb },
  { title: "Pharmacovigilance", desc: "Drug safety, adverse event reporting and risk management.", duration: "1 month", category: "Pharmacovigilance", thumbnail: pharmacovigilanceThumb },
  { title: "Clinical Data Management (CDM)", desc: "Collect, validate and manage clinical trial data.", duration: "1 month", category: "Data Management", thumbnail: dataManagementThumb },
  { title: "Medical Writing", desc: "Regulatory writing, study reports and scientific documents.", duration: "1 month", category: "Medical Writing", thumbnail: medicalWritingThumb },
  { title: "Regulatory Affairs", desc: "Drug approvals, submissions and regulatory guidelines.", duration: "1 month", category: "Regulatory Affairs", thumbnail: regulatoryAffairsThumb },
  { title: "Medical Coding", desc: "Code diagnoses and procedures using standard coding systems.", duration: "3 months", category: "Medical Coding", thumbnail: medicalCodingThumb },
  { title: "SAS Programming", desc: "Clinical SAS for trial data analysis and reporting.", duration: "4 months", category: "Programming", thumbnail: sasProgrammingThumb },
  { title: "R Programming", desc: "Data analysis and statistics with R.", duration: "4 months", category: "Programming", thumbnail: rProgrammingThumb },
  { title: "Python", desc: "From basics to OOP, data handling and mini projects.", duration: "1 month", category: "Programming", thumbnail: pythonProgrammingThumb },
  { title: "Basic Internship in Clinical Data Management", desc: "Hands-on CRF/eCRF, EDC, data validation and GCP.", duration: "4 weeks", category: "Internships", thumbnail: cdmInternshipThumb, fee: "₹999" },
  { title: "Integrated Internship – Clinical Research Documents", desc: "Work on key clinical research documents with industry mentors.", duration: "4 weeks", category: "Internships", thumbnail: crDocumentsInternshipThumb, fee: "₹1,999" },
  { title: "Soft Skills", desc: "Communication, teamwork and leadership.", duration: "1 month", category: "Soft Skills", thumbnail: softSkillsThumb },
];
