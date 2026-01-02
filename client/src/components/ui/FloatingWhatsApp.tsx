import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/918042756155" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px]"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 fill-current" />
    </a>
  );
}
