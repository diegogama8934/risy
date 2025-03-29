import Image from "next/image";
import TextAnimation from "../TextAnimation";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  description: string;
  image: ImageProps;
};

export type Header111Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header111 = (props: Header111Props) => {
  const { description, image } = {
    ...Header111Defaults,
    ...props,
  };

  return (
    <section id="relume" className="relative px-[5%] text-white">
      <div className="container flex max-h-[60rem] min-h-svh">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col">
              <h1 className="mb-5 text-4xl font-bold font-Amulya-Bold md:mb-6 md:text-6xl lg:text-7xl font-[Amulya-Bold] uppercase">
                <TextAnimation>
                  Convierte el exceso en <span className=" text-lime-500">oportunidad</span>
                </TextAnimation>
              </h1>
            </div>
            <div className="mx-[7.5%] flex flex-col justify-end">
              <div className="w-7 h-7 absolute top-0 right-0 bg-lime-500 hidden md:block" />
              <TextAnimation>
                <p className="text-text-alternative md:text-md">{description}</p>
              </TextAnimation>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover object-center"
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          quality={100}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header111Defaults: Props = {
  description:
    "En México, es desperdiciada comida con valor de alrededor de 491 mil millones de pesos al año.",
  image: {
    src: "/landing/Hero.jpg",
    alt: "Hero Image",
  },
};