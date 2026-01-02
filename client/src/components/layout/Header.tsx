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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      data-testid="header"
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home-logo">
            <img
              src={logo}
              alt="Best Psychologist in Jaipur - Dr. Urmil Bishnoi"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={cn(
                  "text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap py-2",
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
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 font-semibold text-sm min-h-[44px]" data-testid="button-nav-book">
              Book Appointment
            </Button>
          </Link>
        </nav>

        <button 
          className="lg:hidden p-3 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center" 
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-[100] lg:hidden" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 bottom-0 bg-white z-[101] lg:hidden overflow-y-auto">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span
                    className={cn(
                      "text-left text-base font-semibold py-4 px-4 block cursor-pointer rounded-lg transition-colors min-h-[52px] flex items-center",
                      location === link.href
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100",
                    )}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2" />
              <Link href="/book-appointment">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold min-h-[52px] text-base"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-mobile-book"
                >
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+918042756155" className="mt-2">
                <Button
                  variant="outline"
                  className="w-full rounded-full font-semibold border-primary text-primary min-h-[52px] text-base"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-mobile-call"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
