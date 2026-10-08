"use client";

import Carousel from "@/components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Parrillada Mar y Tierra",
      button: "Reservar Platillo",
      price: 1700,
      src: "/assets/WhatsApp Image 2026-10-08 at 3.07.41 PM.jpeg",
    },
    {
      title: "Filete Mignon al Vino Tinto",
      button: "Reservar Platillo",
      price: 450,
      src: "/assets/WhatsApp Image 2026-10-08 at 3.07.42 PM (1).jpeg",
    },
    {
      title: "PÚA Trago Insignia",
      button: "Reservar Coctel",
      price: 195,
      src: "/assets/WhatsApp Image 2026-10-08 at 3.07.42 PM.jpeg",
    },
    {
      title: "Hamburguesa Doble Queso",
      button: "Reservar Platillo",
      price: 285,
      src: "/assets/WhatsApp Image 2026-10-08 at 3.07.44 PM.jpeg",
    },
    {
      title: "Tacos Mar y Tierra en Costra",
      button: "Reservar Tacos",
      price: 220,
      src: "/assets/WhatsApp Image 2026-10-08 at 3.07.41 PM (2).jpeg",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-16 flex flex-col items-center justify-center">
      <Carousel slides={slideData} />
    </div>
  );
}
