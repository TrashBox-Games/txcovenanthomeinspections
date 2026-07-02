"use client";

import Image from "next/image";
import { useEffect } from "react";
interface ImageLightboxProps {
  isOpen: boolean;
  image: string;
  imageAlt: string;
  label: string;
  onClose: () => void;
}

export function ImageLightbox({
  isOpen,
  image,
  imageAlt,
  label,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${label} image preview`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={1200}
          height={800}
          className="max-h-[calc(90vh-3rem)] w-auto max-w-full rounded-lg object-contain"
          sizes="(max-width: 1280px) 90vw, 1200px"
        />

        <p className="mt-4 text-center font-headline text-base font-bold text-on-primary md:text-lg">
          {label}
        </p>
      </div>
    </div>
  );
}
