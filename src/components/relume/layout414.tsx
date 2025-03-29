'use client'

import Image from 'next/image';

export type LayoutProps = {
  tagline: string;
  description: string;
};

// Componente principal
export default function Layout414 ({ tagline, description }: LayoutProps) {
  const images = [
    { src: '/landing/app-1.jpeg', alt: 'Imagen de aplicación 1' },
    { src: '/landing/app-2.jpeg', alt: 'Imagen de aplicación 2' },
    { src: '/landing/app-3.jpeg', alt: 'Imagen de aplicación 3' },
    { src: '/landing/app-4.jpeg', alt: 'Imagen de aplicación 4' },
    { src: '/landing/app-5.jpeg', alt: 'Imagen de aplicación 5' },
    { src: '/landing/app-6.jpeg', alt: 'Imagen de aplicación 6' },
    { src: '/landing/app-7.jpeg', alt: 'Imagen de aplicación 7' },
    { src: '/landing/app-8.jpeg', alt: 'Imagen de aplicación 8' },
    { src: '/landing/app-9.jpeg', alt: 'Imagen de aplicación 9' },
    { src: '/landing/app-10.jpeg', alt: 'Imagen de aplicación 10' },
    { src: '/landing/app-11.jpeg', alt: 'Imagen de aplicación 11' },
    { src: '/landing/app-12.jpeg', alt: 'Imagen de aplicación 12' },
  ];
  
  return (
    <section id="ris" className="overflow-hidden px-8 py-20 bg-slate-950 text-slate-50">
      <style jsx>{`
        @keyframes scrollInfinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
      <div className="container mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-left hover:text-orange-600">{tagline}</p>
            <h1 className="text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl uppercase mb-6">
              Rescatando comida a un <span className="text-lime-500">ris</span> de distancia
            </h1>
          </div>
          <div className="relative">
            <div className="w-7 h-7 absolute bottom-0 right-0 bg-lime-500 hidden md:block" />
            <div className="w-7 h-7 absolute bottom-0 right-14 bg-lime-500 hidden md:block" />
            <div className="w-7 h-7 absolute bottom-7 right-7 bg-lime-500 hidden md:block" />
            <p className="text-lg leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <div
            className="flex gap-4"
            style={{
              animation: "scrollInfinite 35s linear infinite",
              width: `${images.length * 2 * 195}px`,
            }}
          >
            {[...images, ...images].map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={195}
                  height={150}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Valores por defecto para props
export const LayoutDefaults: LayoutProps = {
  tagline: 'Ris',
  description: 'Los ris son publicaciones de comida en venta a precio reducido. Restaurantes, fondas y comercios ofrecen platillos que aún están en perfecto estado, evitando desperdicio y permitiéndote disfrutar comida deliciosa a menor costo.',
};