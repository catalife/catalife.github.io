import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => (
  <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background py-12">
    <div className="container max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold md:text-4xl">Student Stories</h1>
        <p className="mt-2 text-muted-foreground">In their own words.</p>
      </div>

      <div className="space-y-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="grid gap-6 rounded-2xl border bg-card p-6 shadow-card md:grid-cols-[180px_1fr] md:p-8">
            <figcaption className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
              <img src={t.image} alt={t.name} className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-secondary/30 md:h-24 md:w-24" />
              <div>
                <p className="font-display text-lg font-semibold leading-tight">{t.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{t.detail}</p>
                <span className="mt-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{t.course}</span>
              </div>
            </figcaption>
            <blockquote>
              <Quote className="mb-2 h-6 w-6 text-secondary" />
              <p className="font-display text-lg font-semibold leading-snug md:text-xl">{t.highlight}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{t.quote}</p>
            </blockquote>
          </figure>
        ))}
      </div>

      <div className="mt-12 rounded-2xl gradient-hero p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-primary-foreground">Write your own story</h2>
        <p className="mx-auto mt-2 max-w-md text-primary-foreground/70">Ask us about courses, fees and the next batch.</p>
        <Link to="/contact" className="mt-6 inline-block">
          <Button size="lg" className="gap-2 bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/90">
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Testimonials;
