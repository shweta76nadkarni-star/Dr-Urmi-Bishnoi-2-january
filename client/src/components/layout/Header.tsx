import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/New_logo_of_Dr_Urmil_Bishnoi-removebg-preview (1).png";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-1",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home-logo">
            <img
              src={logo}
              alt="Best Psychologist in Jaipur - Dr. Urmil Bishnoi"
              className="h-16 w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap",
                  location === link.href
                    ? "text-primary"
                    : "text-gray-900 hover:text-primary",
                )}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/book-appointment">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 font-semibold text-sm" data-testid="button-nav-book">
              Book Appointment
            </Button>
          </Link>
        </nav>

        <button 
          className="lg:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 lg:hidden flex flex-col gap-2 border-t">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-left text-base font-semibold py-3 px-2 block cursor-pointer rounded-md transition-colors",
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50",
                )}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/book-appointment">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold mt-2"
              onClick={() => setIsOpen(false)}
              data-testid="button-mobile-book"
            >
              Book Appointment
            </Button>
          </Link>
          <a href="tel:+918042756155" className="mt-2">
            <Button
              variant="outline"
              className="w-full rounded-full font-semibold border-primary text-primary"
              onClick={() => setIsOpen(false)}
              data-testid="button-mobile-call"
            >
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
