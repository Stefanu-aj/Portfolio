import SlideIn from "./SlideIn";
import profile from "/Images/gif3.gif";

export default function HeroSection() {
  return (
    <section className="font-[poppins] w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-36 py-10 sm:py-16 md:py-20 gap-8 md:gap-12">
      <SlideIn>
        <div className="max-w-xl w-full">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-cyan-600">
            Hello, I am
          </h1>
          <h1 className="text-[#36454F] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Stephen Ajao,
          </h1>
          <span className="text-cyan-600 text-4xl sm:text-5xl md:text-6xl font-extrabold block">
            Fullstack Developer
          </span>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 font-bold italic leading-relaxed">
            I am adept at building scalable and efficient web solutions that provides seamless user experiences.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 md:gap-6">
            <a href="/portfolio">
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-cyan-600 text-white text-sm sm:text-base rounded-lg shadow hover:bg-cyan-700 transition whitespace-nowrap">
                Portfolio
              </button>
            </a>

            <a href="/Files/Stephen Ajao_Resume.pdf" download>
              <button className="px-6 sm:px-8 py-2 sm:py-3 border border-cyan-900 text-cyan-700 text-sm sm:text-base rounded-lg hover:bg-cyan-300 transition whitespace-nowrap">
                Download CV
              </button>
            </a>

            <a href="/Files/Certifications.zip" download>
              <button className="px-6 sm:px-8 py-2 sm:py-3 border border-cyan-900 text-cyan-700 text-sm sm:text-base rounded-lg hover:bg-cyan-300 transition whitespace-nowrap">
                Certifications
              </button>
            </a>
          </div>
        </div>
      </SlideIn>

      <SlideIn delay={0.2}>
        <img
          src={profile}
          alt="profile"
          className="hidden lg:block w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 object-cover rounded-3xl flex-shrink-0"
        />
      </SlideIn>
    </section>
  );
}
