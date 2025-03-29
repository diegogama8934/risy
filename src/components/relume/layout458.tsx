'use client'

import Image from "next/image";
import { useState } from "react";

type ImageProps = {
  src: string;
  hoverSrc?: string; // Agregado para la imagen al hacer hover
  alt: string;
};

type Feature = {
  image: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  description: string;
  features: Feature[];
};

export type Layout458Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout458 = (props: Layout458Props) => {
  const { tagline, description, features } = {
    ...Layout458Defaults,
    ...props,
  };

  return (
    <section id="oportunidades" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-slate-950 text-slate-50">
      <div className="container">
        <div className="relative  rb-12 mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
        <div className="w-7 h-7 absolute top-0 right-0 bg-lime-500 hidden md:block" />
        <div className="w-7 h-7 absolute top-7 right-7 bg-lime-500 hidden md:block" />
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold md:mb-4 hover:text-orange-600">{tagline}</p>
            <h1 className="text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl uppercase">Elige qué hacer con tu<span className="text-lime-500"> comida de oportunidad.</span></h1>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={"w-full" + (index === 1 ? " md:mt-[25%]" : index === 2 ? " md:mt-[50%]" : "")}
            >
              <div className="rb-6 mb-6 w-full md:mb-8">
                <HoverImage {...feature.image} />
              </div>
              <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {feature.heading}
              </h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente para el hover
const HoverImage = ({ src, hoverSrc, alt }: ImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      className="w-full object-cover transition-all duration-500"
      width={1000}
      height={1000}
      quality={100}
      priority
      loading="eager"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onMouseEnter={() => hoverSrc && setCurrentSrc(hoverSrc)}
      onMouseLeave={() => setCurrentSrc(src)}
    />
  );
};

export const Layout458Defaults: Props = {
  tagline: "Oportunidades",
  description:
    "En nuestra plataforma, cada alimento tiene una segunda oportunidad. Ya sea donando a quienes más lo necesitan, vendiendo a precios accesibles o reutilizándolo de manera sostenible, juntos reducimos el desperdicio y generamos impacto.",
  features: [
    {
      image: {
        src: "/landing/Composte-filter.jpg",
        hoverSrc: "/landing/Composte.jpg",
        alt: "Composta image",
      },
      heading: "Composta",
      description:
        "Cuando los alimentos ya no son aptos para el consumo, pueden convertirse en abono natural para ayudar a fertilizar la tierra y reducir la contaminación. Conecta con productores de composta y dale un nuevo propósito a tus residuos orgánicos.",
    },
    {
      image: {
        src: "/landing/Sell-filter.jpg",
        hoverSrc: "/landing/Sell.jpg",
        alt: "Venta image",
      },
      heading: "Venta",
      description:
        "Vende comida en buen estado a precios accesibles en lugar de desperdiciarla. Conecta con personas que buscan opciones económicas y reduce pérdidas mientras generas ingresos.",
    },
    {
      image: {
        src: "/landing/Donate-filter.jpg",
        hoverSrc: "/landing/Donate.jpg",
        alt: "Donación image",
      },
      heading: "Donación",
      description:
        "Dona excedentes a bancos de alimentos, casas hogar y comunidades vulnerables. Con tu ayuda, más personas tendrán acceso a comida de calidad sin desperdiciarla.",
    },
  ],
};
