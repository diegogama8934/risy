import type { NextPage } from 'next';
import Image from "next/image";



const Layout405:NextPage = () => {
  	return (
    		<div id="risy" className="px-[5%] py-16 md:py-24 lg:py-28 bg-slate-950 text-white">
          <div className="container mx-auto">
      			<div className="flex flex-col items-center">
        				<div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          					<Image
                      className="rounded-[20px] object-cover"
                      quality={100}
                      width={1312}
                      height={743}
                      alt="app image"
                      src="/landing/Home.jpeg"
                    />
                  </div>
                  <div className="w-full max-w-3xl text-center">
                    <p className="mb-3 font-semibold md:mb-4 text-left hover:text-orange-600">Risy</p>
                    <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl  uppercase">
                      Haz la diferencia con cada <span className="text-lime-500">bocado</span>
                    </h2>
                    <p className="md:text-md">Conectamos a negocios locales con quienes buscan evitar el desperdicio de comida. Ya sea comprando, donando o transformando excedentes, juntos podemos reducir el impacto ambiental y alimentar a quienes más lo necesitan.</p>
        				</div>
      			</div>
          </div>
    		</div>
      );
};

export default Layout405;
