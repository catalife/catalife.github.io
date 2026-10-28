import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Catalife Training Organization – home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-none">
            <span className="block font-display text-lg font-bold text-foreground">Catalife</span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
              Training Organization
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn("text-sm font-medium transition-colors hover:text-foreground", isActive ? "text-foreground" : "text-muted-foreground")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contact">
            <Button size="sm">Enquire Now</Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-card p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button size="sm">Enquire Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
