import { NextPage } from 'next';
import Image from 'next/image';

const Layout: NextPage = () => {
  return (
    <div id="sustentabilidad" className="px-[5%] py-16 md:py-24 bg-slate-950 text-white flex flex-col items-center">
        <div className="relative w-full max-w-3xl text-center pb-12 md:pb-16 lg:pb-20">
          <div className="w-7 h-7 absolute -top-7 left-0 bg-lime-500 hidden md:block" />
          <div className="w-7 h-7 absolute -top-14 -left-7 bg-lime-500 hidden md:block" />
            <p className="mb-3 font-semibold md:mb-4 text-left hover:text-orange-600">Sustentabilidad</p>
            <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl font-[Amulya-Bold] uppercase">
                Cuidemos el planeta, demos <span className="text-lime-500">uso</span> a cada alimento
            </h2>
            <p className="md:text-md">Cada comida que salvamos significa menos desperdicio, menos contaminación y más recursos aprovechados. Juntos podemos reducir el impacto ambiental y alimentar a quienes más lo necesitan. </p><span className="text-lime-500">¡Hagamos la diferencia!</span>
        </div>

      <div className="flex flex-col items-center w-full relative h-fit py-12 md:py-16 lg:py-20">
        <Image
          className="w-4/5 md:w-[32rem] md:h-[22rem] xl:w-[66rem] xl:h-[44rem] object-cover"
          width={1056}
          height={704}
          alt=""
          src="/landing/sus-1.jpg"
        />
        <Image
          className="absolute top-10 lg:top-[14.75rem] left-0 w-20 h-20 md:w-40 md:h-40 xl:w-[24rem] xl:h-[24rem] object-cover"
          width={384}
          height={384}
          alt=""
          src="/landing/sus-2.jpg"
        />
        <Image
          className="absolute right-0 bottom-0 w-20 h-32 md:w-45 md:h-60 xl:w-[24rem] xl:h-[36rem] object-cover"
          width={384}
          height={576}
          alt=""
          src="/landing/sus-3.jpg"
        />
      </div>
    </div>
  );
};

export default Layout;