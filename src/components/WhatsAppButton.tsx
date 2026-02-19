import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "918690599990";
  const message = "Hello! I'm interested in your acrylic bangles pipes. Please share more details.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group animate-whatsapp-entrance"
      aria-label="Chat on WhatsApp"
    >
      <div className="animate-whatsapp-wiggle">
        <MessageCircle className="w-6 h-6 fill-current" />
      </div>
      <span className="font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
