import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/New_logo_of_Dr_Urmil_Bishnoi-removebg-preview (1).png";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

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
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-2"
        data-testid="header"
      >
        <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center cursor-pointer" data-testid="link-home-logo">
                <img
                  src={logo}
                  alt="Best Psychologist in Jaipur - Dr. Urmil Bishnoi"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
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
              className="flex lg:hidden items-center justify-center w-11 h-11 bg-primary text-white rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              type="button"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden" data-testid="mobile-menu-container">
          <div 
            className="absolute inset-0 bg-black/40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white pt-16 overflow-y-auto">
            <div className="bg-white border-b shadow-sm py-3 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img
                  src={logo}
                  alt="Dr. Urmil Bishnoi"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button 
                className="flex items-center justify-center w-11 h-11 bg-primary text-white rounded-lg"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-4 gap-2 mt-2">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span
                    className={cn(
                      "text-left text-lg font-semibold py-4 px-4 block cursor-pointer rounded-lg transition-colors",
                      location === link.href
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:bg-gray-50 active:bg-gray-100",
                    )}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="border-t border-gray-200 my-3" />
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
        </div>
      )}
    </>
  );
}
