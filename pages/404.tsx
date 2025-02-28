import Link from 'next/link'

const Custom404Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8">
      <div className="rounded-3xl overflow-hidden flex flex-col text-center p-8 gap-y-8 xl:gap-y-12 bg-white drop-shadow-xl">
        <h1 className="font-sofia font-bold text-2xl xl:text-5xl text-black">
          Oeps! Pagina Niet Gevonden
        </h1>
        <p className="font-sofia font-light text-lg xl:text-xl text-black">
          Sorry, de pagina die je zoekt is nog in ontwikkeling. Kom later terug
          om het opnieuw te proberen.
        </p>
        <Link
          href="/"
          className="flex justify-center items-center rounded-full h-[50px] lg:h-[60px] w-full mt-4 bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-lg lg:text-xl leading-none"
        >
          {/* Pseudo-element voor het hover-effect */}
          <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

          {/* Tekst boven de overlay */}
          <p className="relative z-10 pointer-events-none">
            Terug naar de homepage
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Custom404Page
