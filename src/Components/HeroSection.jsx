import SlideIn from "./SlideIn";
import profile from "/Images/gif3.gif";

export default function HeroSection() {
  return (
    <section className="font-[poppins] w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-36 py-20">
      <SlideIn>
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold leading-tight text-cyan-600">
            Hello, I am
          </h1>
          <h1 className="text-[#36454F] text-6xl font-bold">Stephen Ajao,</h1>
          <span className="text-cyan-600 text-6xl font-extrabold">
            Fullstack Developer
          </span>

          <p className="mt-6 text-lg text-gray-700 font-bold italic">
            I am adept at building scalable and efficient web solutions that provides seamless user experiences.
          </p>

          <div className="mt-8 flex gap-6">
            <a href="/portfolio">
              <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700">
                Portfolio
              </button>
            </a>

            <a href="/Files/Stephen Ajao_Resume.pdf" download>
              <button className="px-8 py-3 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </SlideIn>

      <SlideIn delay={0.2}>
        <img
          src={profile}
          alt="profile"
          className="hidden lg:block w-80 h-80 object-cover rounded-3xl mt-10 md:mt-0 "
        />
      </SlideIn>
    </section>
  );
}
