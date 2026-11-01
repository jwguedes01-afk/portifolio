import { useEffect } from "react";
import { X } from "lucide-react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  image: LightboxImage;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    // Captura na window para o Esc fechar só a imagem, sem fechar o modal por trás.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.stopPropagation();
      onClose();
    };
    window.addEventListener("keydown", onKey, true);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        type="button"
        aria-label="Fechar imagem"
        onClick={onClose}
        className="absolute inset-0 cursor-zoom-out bg-navy-950/90 backdrop-blur-sm"
      />
      <img
        src={image.src}
        alt={image.alt}
        className="relative max-h-[90vh] max-w-full rounded-xl shadow-2xl"
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar imagem"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <X size={20} />
      </button>
    </div>
  );
}
