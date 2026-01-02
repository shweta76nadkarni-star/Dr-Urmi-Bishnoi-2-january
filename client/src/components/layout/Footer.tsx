import logo from "@assets/main_urmi_logo.png";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-1 sm:pt-4 pb-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-1 mb-1 sm:mb-1">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logo}
              alt="Dr. Urmil Bishnoi - Top Counselor in Jaipur"
              className="h-14 sm:h-16 w-auto mb-4 sm:mb-6 brightness-0 invert opacity-90"
              data-testid="img-footer-logo"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6">
              Providing top-rated psychological counseling in Jaipur. Expert
              hypnotherapy and mental wellness treatments to help you find inner
              peace.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dr_urmilbishnoi?igsh=bnplaGxqcXl0djFm"
                className="bg-gray-800 p-2.5 sm:p-2 rounded-full hover:bg-primary transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 sm:h-4 sm:w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584173711338"
                className="bg-gray-800 p-2.5 sm:p-2 rounded-full hover:bg-primary transition-colors min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  About Dr. Urmil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/book-appointment"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/services#hypnotherapy"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Hypnotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#anxiety-disorder"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Anxiety Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/services#depression-therapy"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Depression Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ptsd-treatment"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  PTSD Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/services#career-counseling"
                  className="hover:text-primary transition-colors py-1 inline-block"
                >
                  Career Counseling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Plot No.125, Sukhija Vihar, Kanak Vrindavan, Maharana Pratap
                  Road, Vaishali Nagar, Jaipur – Rajasthan 302021
                </span>
              </li>
              <li>
                <a
                  href="tel:+917014086770"
                  className="flex gap-3 items-center hover:text-primary transition-colors py-1"
                >
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span>+917014086770</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:urmi.29.bishnoi@gmail.com"
                  className="flex gap-3 items-center hover:text-primary transition-colors py-1 break-all"
                >
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span>urmi.29.bishnoi@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-4 text-center text-gray-500 text-xs space-y-2">
          <p>
            © {new Date().getFullYear()} Dr. Urmil Bishnoi. All rights
            reserved.
          </p>
          <p>Made with ❤️ By UDM Techno</p>
        </div>
      </div>
    </footer>
  );
}
