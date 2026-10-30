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
  /** Extra detail shown on the course page, when we have it. */
  details?: {
    learn: string[];
    highlights?: string[];
    whoCanJoin?: string;
    schedule?: string;
    careers?: string[];
  };
};

export const slugify = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Shared wording used by several courses.
const LIFE_SCIENCES =
  "B.Pharm, M.Pharm, Pharm.D, D.Pharm, B.Sc/M.Sc in life sciences, biotechnology, microbiology or chemistry, nursing and allied health graduates, and final-year students.";
const CORE_HIGHLIGHTS = ["Live online sessions", "Experienced faculty", "Hands-on projects & case studies", "Certificate on completion", "Career guidance & placement assistance"];
const CODING_HIGHLIGHTS = ["Live online sessions", "Experienced faculty", "Hands-on coding practice", "Certificate on completion", "Career guidance"];

// The homepage course count is taken from this list, so adding a course here updates it.
export const courses: Course[] = [
  {
    title: "Clinical Research", desc: "Trial processes, protocols and regulations.", duration: "1 month", category: "Clinical Research", thumbnail: clinicalResearchAdvanceThumb,
    details: {
      learn: [
        "How new drugs are developed, and the phases of clinical trials (I–IV)",
        "ICH-GCP principles and the roles of sponsor, investigator and ethics committee",
        "Indian clinical trial regulations (New Drugs and Clinical Trials Rules, 2019) and CDSCO",
        "Reading a trial protocol and investigator's brochure",
        "Informed consent and protecting trial participants",
        "Essential documents and the Trial Master File (TMF)",
        "Site selection, initiation, monitoring and close-out visits",
        "What CRAs, CRCs and clinical project teams do day to day",
        "Recording and reporting adverse events",
        "Quality, audits and regulatory inspections",
      ],
      careers: ["Clinical Research Coordinator (CRC)", "Clinical Research Associate (CRA)", "Clinical Trial Assistant", "Site Start-up Associate", "TMF / Clinical Documentation Associate"],
      highlights: CORE_HIGHLIGHTS,
      whoCanJoin: LIFE_SCIENCES,
    },
  },
  {
    title: "Pharmacovigilance", desc: "Drug safety, adverse event reporting and risk management.", duration: "1 month", category: "Pharmacovigilance", thumbnail: pharmacovigilanceThumb,
    details: {
      learn: [
        "Why drug safety matters, and how pharmacovigilance evolved",
        "Adverse events vs adverse drug reactions; seriousness and expectedness",
        "Case processing: from case intake to submission (ICSRs)",
        "Coding with MedDRA and WHO Drug dictionaries",
        "Causality assessment and writing case narratives",
        "Working in safety databases such as Argus and ARISg (overview)",
        "Signal detection and risk management basics",
        "Periodic reports: PSUR/PBRER and DSUR (overview)",
        "PvPI and global guidelines (ICH E2 series)",
        "Quality and compliance in drug safety",
      ],
      careers: ["Drug Safety Associate", "Pharmacovigilance Associate / Case Processor", "Safety Data Associate", "Signal Detection Associate", "Aggregate Reports Associate"],
      highlights: CORE_HIGHLIGHTS,
      whoCanJoin: LIFE_SCIENCES,
    },
  },
  {
    title: "Clinical Data Management (CDM)", desc: "Collect, validate and manage clinical trial data.", duration: "1 month", category: "Data Management", thumbnail: dataManagementThumb,
    details: {
      learn: [
        "Where data management fits in a clinical trial",
        "Writing a Data Management Plan (DMP)",
        "Designing and annotating CRFs and eCRFs",
        "EDC systems, database set-up and user acceptance testing (overview)",
        "Edit checks and data validation",
        "Raising and resolving discrepancies and queries",
        "Medical coding in CDM with MedDRA and WHO Drug",
        "SAE reconciliation and handling external data",
        "Database lock and archiving",
        "CDISC standards (CDASH, SDTM), 21 CFR Part 11 and ALCOA+",
      ],
      careers: ["Clinical Data Associate / Coordinator", "Data Validation Associate", "Medical Coder (CDM)", "EDC / Database Associate", "Clinical Data Manager (with experience)"],
      highlights: CORE_HIGHLIGHTS,
      whoCanJoin: LIFE_SCIENCES,
    },
  },
  {
    title: "Medical Writing", desc: "Regulatory writing, study reports and scientific documents.", duration: "1 month", category: "Medical Writing", thumbnail: medicalWritingThumb,
    details: {
      learn: [
        "What medical and regulatory writers do",
        "Searching, reading and summarising scientific literature",
        "Writing trial documents: protocol, investigator's brochure and informed consent form",
        "Clinical study report (CSR) structure under ICH E3",
        "The Common Technical Document (CTD) and its modules",
        "Patient narratives and safety writing",
        "Manuscripts, abstracts and posters for publication",
        "Referencing, avoiding plagiarism and publication ethics",
        "Writing plain-language summaries for patients",
        "Style guides, quality checks and peer review",
      ],
      careers: ["Medical Writer", "Regulatory Writer", "Scientific Writer", "Medical Communications Associate", "Patient Narrative Writer"],
      highlights: CORE_HIGHLIGHTS,
      whoCanJoin: LIFE_SCIENCES,
    },
  },
  {
    title: "Regulatory Affairs", desc: "Drug approvals, submissions and regulatory guidelines.", duration: "1 month", category: "Regulatory Affairs", thumbnail: regulatoryAffairsThumb,
    details: {
      learn: [
        "The role of regulatory affairs across a medicine's life cycle",
        "Key regulators: CDSCO, US FDA, EMA and ICH",
        "Approval routes: IND, NDA and ANDA, and their Indian equivalents",
        "CTD and eCTD dossier structure",
        "Getting clinical trial approvals in India",
        "Labelling and product information",
        "Post-approval changes and variations",
        "Compiling and submitting a dossier (overview)",
      ],
      careers: ["Regulatory Affairs Associate / Executive", "Regulatory Documentation Specialist", "Regulatory Publishing Associate", "Labelling Associate"],
      highlights: CORE_HIGHLIGHTS,
      whoCanJoin: LIFE_SCIENCES,
    },
  },
  {
    title: "Medical Coding", desc: "Code diagnoses and procedures using standard coding systems.", duration: "3 months", category: "Medical Coding", thumbnail: medicalCodingThumb,
    details: {
      learn: [
        "Medical terminology, anatomy and physiology for coders",
        "Healthcare records and the revenue cycle",
        "Diagnosis coding with ICD-10-CM",
        "Procedure coding with CPT",
        "HCPCS Level II codes",
        "Official coding guidelines and conventions",
        "Modifiers and E/M (evaluation and management) coding",
        "Compliance, HIPAA and coding audits",
        "Practice on real-world case scenarios",
        "Preparing for certification exams such as CPC",
      ],
      careers: ["Medical Coder", "Coding Quality Analyst", "Medical Billing Specialist", "Coding Auditor (with experience)"],
      highlights: CORE_HIGHLIGHTS,
      whoCanJoin: "Pharmacy, life sciences, nursing, physiotherapy and other health-science graduates, and final-year students.",
    },
  },
  {
    title: "SAS Programming", desc: "Clinical SAS for trial data analysis and reporting.", duration: "4 months", category: "Programming", thumbnail: sasProgrammingThumb,
    details: {
      learn: [
        "The SAS environment and programming basics",
        "DATA step: reading, creating and changing datasets",
        "Merging, sorting, functions and formats",
        "PROC SQL for querying data",
        "Summary statistics with PROC MEANS, FREQ and UNIVARIATE",
        "Writing reusable programs with macros",
        "Producing tables, listings and figures (TLFs)",
        "How clinical trial data is structured: CDISC SDTM and ADaM (overview)",
        "Reporting with ODS",
        "Preparing for the SAS Base Programming certification",
      ],
      careers: ["SAS Programmer", "Clinical SAS Programmer", "Statistical Programmer", "Data Analyst"],
      highlights: CODING_HIGHLIGHTS,
      whoCanJoin: "Pharmacy, life sciences, statistics, mathematics and other science graduates, and final-year students.",
    },
  },
  {
    title: "R Programming", desc: "Data analysis and statistics with R.", duration: "4 months", category: "Programming", thumbnail: rProgrammingThumb,
    details: {
      learn: [
        "Getting started with R and RStudio",
        "Data types, vectors, lists and data frames",
        "Importing and cleaning data",
        "Shaping data with dplyr and tidyr",
        "Descriptive statistics and probability basics",
        "Hypothesis testing: t-test, chi-square and ANOVA",
        "Correlation and regression",
        "Charts and graphs with ggplot2",
        "Reproducible reports with R Markdown",
        "Working with clinical and biostatistics datasets",
      ],
      careers: ["Data Analyst", "Biostatistics Associate", "Statistical Programmer (R)", "Research Analyst"],
      highlights: CODING_HIGHLIGHTS,
      whoCanJoin: "Pharmacy, life sciences, statistics, mathematics and other science graduates, and final-year students.",
    },
  },
  {
    title: "Python", desc: "From basics to OOP, data handling and mini projects.", duration: "1 month", category: "Programming", thumbnail: pythonProgrammingThumb,
    details: {
      learn: ["Introduction to Python", "Variables, data types & operators", "Control statements", "Functions, modules & packages", "Lists, tuples, dictionaries & sets", "File handling", "OOPs concepts", "Exception handling", "Database connectivity (SQLite)", "Hands-on exercises & mini projects"],
      careers: ["Junior Python Developer", "Data Analyst (entry level)", "Automation / Scripting roles"],
      highlights: ["Expert trainers", "Practical learning", "Certificate of completion", "Career support"],
      whoCanJoin: "Students and graduates from any background who want to start coding — including pharmacy and life-science students.",
    },
  },
  {
    title: "Basic Internship in Clinical Data Management", desc: "Hands-on CRF/eCRF, EDC, data validation and GCP.", duration: "4 weeks", category: "Internships", thumbnail: cdmInternshipThumb, fee: "₹999",
    details: {
      learn: ["Introduction to Clinical Research and CDM basics", "CRF, eCRF and EDC overview", "Data entry, validation and query management", "Data cleaning and reconciliation", "GCP, ALCOA+ and data integrity", "Excel for CDM – basic skills", "Career guidance, resume building & mock interview"],
      careers: ["Clinical Data Associate / Coordinator", "Data Validation Associate"],
      highlights: ["Live interactive sessions", "Hands-on practical exercises", "Real-world case scenarios", "Study materials & templates", "Certification on completion", "Expert guidance"],
      whoCanJoin: "Pharmacy, Life Sciences, Nursing, Biotechnology, B.Sc/M.Sc students and fresh graduates aspiring for a career in Clinical Research.",
      schedule: "Weekend batch, live online sessions",
    },
  },
  {
    title: "Integrated Internship – Clinical Research Documents", desc: "Work on key clinical research documents with industry mentors.", duration: "4 weeks", category: "Internships", thumbnail: crDocumentsInternshipThumb, fee: "₹1,999",
    details: {
      learn: ["Hands-on understanding of key clinical research documentation", "Practical insights from industry professionals", "Free career guidance & mentorship support", "Networking opportunities with peers & experts"],
      careers: ["Clinical Trial Assistant", "TMF / Clinical Documentation Associate", "Clinical Research Coordinator (CRC)"],
      highlights: ["Internship e-certificate", "Live sessions on Google Meet"],
      whoCanJoin: LIFE_SCIENCES,
      schedule: "7:00 – 8:00 PM, live on Google Meet",
    },
  },
  {
    title: "Soft Skills", desc: "Communication, teamwork and leadership.", duration: "1 month", category: "Soft Skills", thumbnail: softSkillsThumb,
    details: {
      learn: [
        "Speaking clearly and confidently",
        "Professional emails and business writing",
        "Presentations and public speaking",
        "Working well in teams",
        "Managing time and priorities",
        "Interview preparation with mock interviews",
        "Building a strong resume and LinkedIn profile",
        "Workplace etiquette and professionalism",
      ],
      highlights: ["Live online sessions", "Experienced faculty", "Practice-based learning", "Certificate on completion"],
      whoCanJoin: "Students and fresh graduates from any background preparing for interviews and their first job.",
    },
  },
];
