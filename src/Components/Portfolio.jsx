import { image } from "framer-motion/client";
import SlideIn from "./SlideIn";

export default function Portfolio() {
  const projects = [
    {
      title: "Fullstack E-commerce Store",
      link: "https://fullstack-frontend-zeta-five.vercel.app/",
      image: "/Images/adeola store.png",
    },

    {
      title: "Ranking and Voting System",
      link: "https://teswacompetition.vercel.app/",
      image: "/Images/teswa.png",
    },
    {
      title: "E-commerce Store",
      link: "",
      image: "/Images/pagatts.png",
    },
  ];

  return (
    <section className=" font-[poppins] w-full px-10 md:px-20 py-20 bg-gray-50">
      <SlideIn>
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Some of my Works
        </h2>
      </SlideIn>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <SlideIn key={i} delay={i * 0.15}>
            <a
              href={p.link}
              target="_blank"
              className="block p-6 bg-white shadow rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold text-cyan-600">
                {p.title}
              </h3>
              <p className="text-gray-600 mt-3 font-bold">
                Click to view project →
              </p>
            </a>
            <div>
              <img src={p.image} alt="" />
            </div>
          </SlideIn>
        ))}
      </div>
    </section>
  );
}
