import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/data/courses";

const categories = ["All", ...Array.from(new Set(courses.map((c) => c.category)))];

const enquiryLink = (course: string) => `/contact?course=${encodeURIComponent(course)}`;

const Courses = () => {
  const [category, setCategory] = useState("All");
  const shown = category === "All" ? courses : courses.filter((c) => c.category === category);

  return (
    <div className="min-h-screen bg-background py-10">
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
                {c.thumbnail ? (
                  <>
                    <img src={c.thumbnail} alt="" className="h-full w-full object-cover object-top" />
                    <div className="absolute inset-0 bg-black/30" />
                  </>
                ) : (
                  <div className="gradient-hero flex h-full w-full items-center justify-center">
                    {c.icon && <c.icon className="h-14 w-14 text-secondary" strokeWidth={1.5} />}
                  </div>
                )}
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
