import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full min-h-screen flex flex-col justify-end bg-[url(/landing/footer.jpg)] bg-cover bg-center text-white py-16 px-8 md:px-16 lg:px-32">
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
        <p>© 2024 Risy. Todos los derechos reservados.</p>
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