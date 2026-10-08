"use client";

import Carousel from "@/components/ui/carousel";

export default function CarouselDemo() {
  const slideData = [
    {
      title: "Parrillada Mar y Tierra",
      button: "Reservar Platillo",
      price: 1700,
      src: "/assets/parrillada-brasas.jpg",
    },
    {
      title: "Filete Mignon al Vino Tinto",
      button: "Reservar Platillo",
      price: 450,
      src: "/assets/corte-filete-mignon.jpg",
    },
    {
      title: "PÚA Trago Insignia",
      button: "Reservar Coctel",
      price: 195,
      src: "/assets/coctel-tiki-maracuya.jpg",
    },
    {
      title: "Tuétanos al Carbón & Picaña",
      button: "Reservar Platillo",
      price: 320,
      src: "/assets/tuetanos-carne-brasas.jpg",
    },
    {
      title: "Tiradito de Atún & Sésamo",
      button: "Reservar Entrada",
      price: 240,
      src: "/assets/tuna-sashimi-tiradito.jpg",
    },
    {
      title: "Crocante & Helado Papantla",
      button: "Reservar Postre",
      price: 180,
      src: "/assets/postre-crocante-helado.jpg",
    },
  ];

  return (
    <div className="relative overflow-visible w-full py-8 flex flex-col items-center justify-center">
      <Carousel slides={slideData} />
    </div>
  );
}

