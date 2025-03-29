import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full min-h-screen flex flex-col justify-end bg-[url(/landing/footer.jpg)] bg-cover bg-center text-white py-16 px-8 md:px-16 lg:px-32">
      <h1 className="mb-6 text-center text-white text-4xl font-bold">Unete a la experiencia Risy</h1>
      <div className="flex flex-col md:flex-row mb-10 md:mb-18 md:justify-center gap-4 text-white text-sm">
        <Link href="/signup" className="w-full md:w-auto text-center transition-colors duration-300 transform hover:text-lime-600 md:mx-4 md:my-0 border border-lime-500 px-4 py-2 md:text-center">Registrarse</Link>
        <Link href="/login" className="w-full md:w-auto text-center transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0 bg-lime-500 px-4 py-2 text-black md:text-center">Iniciar sesión</Link>
      </div>
      
      <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-4">
          <Image src="/Logo.svg" width={84} height={36} alt="Company Logo" />
          <p className="text-white text-sm">Av. de las Ciencias Sin Número, Juriquilla, Querétaro, Qro.</p>
          <p className="text-white text-sm underline">+52 554 803 22 00</p>
          <p className="text-white text-sm underline">axfervagar@risy.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-white pt-6 flex flex-col md:flex-row justify-between text-gray-200 text-xs">
        <p>© 2025 Risy. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          {['Política de privacidad', 'Términos de servicio', 'Configuración de cookies'].map((item) => (
            <a key={item} href="#" className="underline hover:text-white">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;