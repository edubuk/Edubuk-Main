import {
  LayoutDashboard,
  LineChart,
  BriefcaseBusiness,
  BookOpenText,
  Bot,
  FileEdit,
 
} from "lucide-react";

export default function WhyCETASection() {
  const techSkills = [
    {
      icon: <LayoutDashboard className="w-7 h-7" />,
      title: "Democratizes Tech Access",
      desc: "No coding required; anyone can build and innovate.",
    },
    {
      icon: <LineChart className="w-7 h-7" />,
      title: "Bridges the Skill Gap",
      desc: "Makes advanced tech skills accessible to non-tech learners.",
    },
    {
      icon: <BriefcaseBusiness className="w-7 h-7" />,
      title: "Future-Proofs Careers",
      desc: "Equips professionals with tools for tomorrow’s jobs.",
    },
    {
      icon: <BookOpenText className="w-7 h-7" />,
      title: "Accelerates Learning",
      desc: "Learn faster through visual, drag-and-drop tools.",
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: "Empowers with AI",
      desc: "Master real-world applications of Generative AI and Automation.",
    },
    {
      icon: <FileEdit className="w-7 h-7" />,
      title: "Industry-Aligned Curriculum",
      desc: "Based on real use-cases and modern business tools.",
    },
  ];

  return (
    <section className="bg-white text-[#006666] px-6 md:px-20 py-24 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03257e] mb-4">
          CETA Program (Certified Emerging Technologies Analyst)
          {/* <span className="text-[#f14419]"> AI & Emerging Tech</span> */}
        </h2>
        <p className="text-[#03257e] text-xl max-w-3xl mx-auto text-left sm:text-justify">
          In today’s fast-evolving digital world, technical skills are no longer
          just for coders. With the rise of no-code platforms and tools, anyone
          can now build AI-driven solutions, harness the power of Generative AI,
          and innovate using emerging technologies—without needing to write a
          single line of code
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {techSkills.map((item, i) => (
          <div
            key={item.title}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white hover:border-cyan-400/30 shadow-md shadow-[#03677e] hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white text-[#03257e] rounded-full shadow-inner shadow-cyan-500/10">
              {item.icon}
            </div>
            <h3 className="text-xl text-[#006666] font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-[#f14419] text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xl text-[#03257e] py-10 font-semibold text-center">CETA Program Curriculum is Certified by NSDC (National Skills Development Corporation) under Skills India Mission of Government of India</p>
      <div className="flex justify-center items-center gap-4 mt-10 w-full">
        <div className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden border-4 border-gray-300 shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/-6fKOysTNo4?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://www.edubukceta.com/"
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
