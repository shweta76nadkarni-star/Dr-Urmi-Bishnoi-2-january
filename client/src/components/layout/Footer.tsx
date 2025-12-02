import logo from "@assets/main_logo-removebg-preview_1764666984089.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Dr. Urmil Bishnoi" className="h-16 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing professional psychological support and evidence-based therapies to help you find your inner peace and mental wellness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Dr. Urmil</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Hypnotherapy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Anxiety Treatment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Depression Therapy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Couples Counseling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Counseling</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="text-primary">Address:</span> Jaipur, Rajasthan, India
              </li>
              <li className="flex gap-3">
                <span className="text-primary">Phone:</span> +91 8042756155
              </li>
              <li className="flex gap-3">
                <span className="text-primary">Email:</span> contact@drurmilbishnoi.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Dr. Urmil Bishnoi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
