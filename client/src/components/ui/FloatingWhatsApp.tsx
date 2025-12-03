import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/918042756155" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 fill-current" />
    </a>
  );
}
