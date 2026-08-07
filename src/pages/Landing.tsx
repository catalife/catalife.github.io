import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, FlaskConical, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.jpg";
import { useAuth } from "@/context/AuthContext";
import pythonProgrammingThumb from "@/assets/course-thumbnails/python-programming.png";
import cdmInternshipThumb from "@/assets/course-thumbnails/cdm-internship.png";
import crDocumentsInternshipThumb from "@/assets/course-thumbnails/cr-documents-internship.png";

const featuredPrograms = [
  {
    title: "Master Python – Basic & Advance",
    badge: "Early Bird till 5 July 2026",
    fee: "From ₹1,699",
    image: pythonProgrammingThumb,
    href: "/courses",
  },
  {
    title: "Basic Internship – Clinical Data Management",
    badge: "Starting 3 August 2026",
    fee: "₹999 only",
    image: cdmInternshipThumb,
    href: "/courses",
  },
  {
    title: "Integrated Internship – CR Documents",
    badge: "Starting 3 August 2026",
    fee: "₹1,999 only",
    image: crDocumentsInternshipThumb,
    href: "/courses",
  },
];

const features = [
  { icon: GraduationCap, title: "Expert-Led Training", desc: "Learn from seasoned professors and industry experts in clinical research & pharmacy" },
  { icon: FlaskConical, title: "Hands-On Practice", desc: "Practical experience with ICT tools, mind maps, and flipped classroom methodology" },
  { icon: Award, title: "Certified Programs", desc: "Advance Diplomas and PG Diplomas recognized by the pharmaceutical industry" },
  { icon: Users, title: "Placement Assistance", desc: "100% placement assistance and career guidance for every graduate" },
];

const distinctiveness = [
  "Effective Online Pharmacy Courses",
  "Global Standard Curriculum",
  "ICT Tools & Flipped Classroom",
  "Industry Expert Sessions",
  "360 Degree Evaluation",
  "Mnemonic Mind Maps",
];

const testimonials = [
  { name: "Rajesh K.", quote: "CataLife transformed my career in clinical research. The hands-on training and placement support were outstanding.", image: "/testimonials/testimonial-1.jpg" },
  { name: "Ananya S.", quote: "I got placed within 2 months of completing my Advance Diploma. The curriculum is truly industry-aligned.", image: "/testimonials/testimonial-2.jpg" },
  { name: "Vikram P.", quote: "The pharmacovigilance course gave me practical knowledge that I use every day at my CRO job.", image: "/testimonials/testimonial-3.jpg" },
  { name: "Meera D.", quote: "Best investment in my pharmacy career. The faculty are experienced professionals from the industry.", image: "/testimonials/testimonial-4.jpg" },
  { name: "Sanjay M.", quote: "The medical writing program helped me transition from retail pharmacy to a rewarding career in regulatory affairs.", image: "/testimonials/testimonial-5.jpg" },
];

const Landing = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
        <div className="container relative z-10 grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
              Best Clinical Research Training Institute in Pune
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Advance Your Career with Top-Rated Pharmacy Courses
            </h1>
            <p className="mb-8 max-w-lg text-lg text-primary-foreground/70">
              Achieve Pharmacy Excellence with CataLife – Your Path to Success! From freshers to experienced professionals, we prepare you for a dream career in Clinical Research.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={isLoggedIn ? "/dashboard" : "/signup"}>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold gap-2">
                  {isLoggedIn ? "Go to Dashboard" : "Enroll Today"} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:block">
            <img src={heroImage} alt="CataLife Clinical Research Training" className="rounded-2xl shadow-hero" />
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gradient-to-b from-background to-secondary/5 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">About CataLife Training Organization</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We are the best Clinical Research Training Institute in Pune. We work with industry experts to enhance, train, and prepare students in pursuing their dream career.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-secondary/5 to-primary/5 py-20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Why Choose CataLife?</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Comprehensive pharmacy education led by a seasoned professor with industry experience
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Featured Programs</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Upcoming batches and early-bird offers in programming and clinical research internships
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPrograms.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-xl border bg-card shadow-card transition-shadow hover:shadow-card-hover"
              >
                <Link to={p.href} className="block">
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
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold text-primary">{p.fee}</span>
                    <Link to={p.href}>
                      <Button size="sm" variant="outline">View Details</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/courses">
              <Button size="lg" className="gap-2 font-semibold">
                Browse All Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Distinctiveness */}
      <section className="bg-gradient-to-b from-background to-secondary/5 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Our Distinctiveness</h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {distinctiveness.map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-card">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="bg-gradient-to-b from-secondary/5 to-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">Student Testimonials</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border bg-card shadow-card overflow-hidden">
                <img src={t.image} alt={`Student testimonial ${i + 1}`} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="italic text-muted-foreground text-sm">"{t.quote}"</p>
                  <p className="mt-2 text-sm font-semibold">— {t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-secondary/5 to-primary/10 py-20">
        <div className="container text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">Ready to Start Your Pharmacy Career?</h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Join CataLife Training Organization and transform into an industry-ready professional.
          </p>
          <Link to={isLoggedIn ? "/dashboard" : "/signup"}>
            <Button size="lg" className="gap-2 font-semibold">
              {isLoggedIn ? "Go to Dashboard" : "Enroll Now"} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-primary/5 py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 CataLife Training Organization. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="https://www.instagram.com/_catalife_organization_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
