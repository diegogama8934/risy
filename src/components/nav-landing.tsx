'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/90 md:bg-slate-950/50">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Image src="/Logo.svg" alt="logo" width={30} height={30} />

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {/* Menu open icon */}
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-950/90 backdrop-blur-md md:mt-0 md:p-0 md:top-0 md:backdrop-blur-none md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}
        >
          <div className="flex flex-col md:flex-row md:mx-6 justify-center items-center">
            <a className="my-2 text-slate-50 transition-colors duration-300 transform hover:text-lime-600 md:mx-4 md:my-0" href="#risy">
              Risy
            </a>
            <a className="my-2 text-slate-50 transition-colors duration-300 transform hover:text-lime-600 md:mx-4 md:my-0" href="#oportunidades">
              Oportunidades
            </a>
            <a className="my-2 text-slate-50 transition-colors duration-300 transform hover:text-lime-600 md:mx-4 md:my-0" href="#ris">
              Ris
            </a>
            <a className="my-2 text-slate-50 transition-colors duration-300 transform hover:text-lime-600 md:mx-4 md:my-0" href="#sustentabilidad">
              Sustentabilidad
            </a>
            <Button variant="outline" className='w-full md:hidden xl:block md:w-auto my-2 md:mx-4 md:my-0'>
              Registrarse
            </Button>
            <Button className='w-full md:w-auto my-2 md:mx-4 md:my-0'>
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;