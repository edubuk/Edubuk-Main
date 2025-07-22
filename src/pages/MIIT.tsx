import {
  BadgeCheck,
  BookMarked,
  BarChart3,
  Presentation,
  GitBranchPlus,
  ListChecks,
  Users,
} from "lucide-react";

export default function WhyMIITSection(){
const miitBenefits = [
  {
    icon: <BadgeCheck className="w-7 h-7" />,
    title: "Identifies True Strengths",
    desc: "Goes beyond marks to uncover hidden talents and aptitudes.",
  },
  {
    icon: <BookMarked className="w-7 h-7" />,
    title: "Personalized Career Guidance",
    desc: "Matches each student to the right fields and job roles.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Data-Driven & Scientific",
    desc: "Backed by psychological and career-matching models.",
  },
  {
    icon: <Presentation className="w-7 h-7" />,
    title: "Boosts Confidence & Clarity",
    desc: "Helps students make aligned and informed decisions.",
  },
  {
    icon: <GitBranchPlus className="w-7 h-7" />,
    title: "Prevents Misguided Choices",
    desc: "Reduces chances of academic or career dissatisfaction.",
  },
  {
    icon: <ListChecks className="w-7 h-7" />,
    title: "Used by Leading Institutions",
    desc: "Trusted by schools and colleges for effective counselling.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Supports Parents & Educators",
    desc: "Provides actionable insights for better guidance.",
  },
];

  return (
    <section className="bg-white text-[#006666] px-6 md:px-20 py-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03257e] mb-4">
           MIIT Screening (Multiple Intelligence & Interest Test)
          {/* <span className="text-[#f14419]"> AI & Emerging Tech</span> */}
        </h2>
        <p className="text-xl mb-4 text-[#03257e] text-justify">
                Choosing the right career shouldn't be guesswork. Every student has a unique combination of intelligences, interests, and natural abilities
            <span className="text-[#f14419] font-semibold"> MIIT Screening by Edubuk</span>, uses a scientific approach to map these traits to the most suitable career paths and job roles—enabling students to make informed, confident, and personalized decisions about their future. Backed by research in Multiple Intelligences and Interest Theory, this tool empowers youth to align their learning and career planning with who they truly are.
            </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {miitBenefits.map((item, i) => (
          <div
            key={item.title}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white text-[#03257e] rounded-full shadow-inner shadow-cyan-500/10">
              {item.icon}
            </div>
            <h3 className="text-xl text-[#006666] font-semibold mb-2">{item.title}</h3>
            <p className="text-[#f14419] text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
       <div className="flex justify-center items-center gap-4 p-4 w-full">
        <div className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden border-4 border-gray-300 shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/SbRJSL7w7Dk?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-12 text-center">
      <a
        href="https://www.edubukmiitscreening.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#03257e] text-white hover:bg-white hover:text-[#f14419]  transition-all rounded-full px-6 py-3 text-lg font-semibold shadow-lg"
      >
        Click to Learn More →
      </a>
    </div>
    </section>
  );
}
