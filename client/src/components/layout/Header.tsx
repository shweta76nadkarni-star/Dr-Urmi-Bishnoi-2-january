import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/main_urmi_logo.png";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3",
      )}
    >
      <div className="container mx-auto px-6 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={logo}
              alt="Dr. Urmil Bishnoi Logo"
              className="h-19 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-semibold transition-colors",
                  location === link.href
                    ? "text-primary"
                    : "text-gray-900 hover:text-primary",
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold">
              Book Appointment
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden flex flex-col gap-4 border-t">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-left text-base font-semibold text-gray-700 hover:text-primary py-2 block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
