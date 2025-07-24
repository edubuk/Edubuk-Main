
import {
  Bot,
  ShieldCheck,
  BarChartBig,
  CircuitBoard,
  Award,
  Globe
} from "lucide-react";

const olympiadFeatures = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "Artificial Intelligence",
    desc: "Explore AI applications without writing code. Open to all curious minds.",
  },
  {
    icon: <CircuitBoard className="w-7 h-7" />,
    title: "Robotics",
    desc: "Understand the future of automation through visual and interactive tools.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Cybersecurity",
    desc: "Learn how to stay secure in the digital age with intuitive, no-code tools.",
  },
  {
    icon: <BarChartBig className="w-7 h-7" />,
    title: "Data Analytics",
    desc: "Develop data skills with a practical lens, no complex coding required.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Reach",
    desc: "Open to students from India, Singapore & Dubai — Classes 7 to 12.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Exciting Rewards",
    desc: "Win medals, certificates & exciting prizes! Earn recognition.",
  },
];

export default function CETAOlympiadSection() {
  return (
    <section className="bg-white  px-6 md:px-20 py-6 border-b border-gray-200" id="cetaOlympiad">
      <div className="max-full flex justify-center items-center flex-col mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-center font-bold leading-tight text-[#03257e] mb-4 hidden sm:block" data-aos="fade-up">
          CETA-Olympiad:<span className="text-[#f14419]"> AI & Emerging Tech</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#03257e] text-center mb-4 sm:hidden" data-aos="fade-up">
          CETA-Olympiad:<br></br>
          <span className="text-[#f14419]"> AI & Emerging Tech</span>
        </h2>
        <p className="text-[#03257e] text-xl max-w-3xl mx-auto text-left sm:text-justify" data-aos="zoom-in">
          International No-Code Olympiad for Class 7–12 | Available in India, Singapore & Dubai.
          A visionary concept by IIT, IIM Alumni, CFA Charterholder, Gold Medalist & Industry Experts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {olympiadFeatures.map((item, i) => (
          <div
            key={item.title}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white hover:border-cyan-400/30 shadow-md shadow-[#03677e] hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white text-[#03257e] rounded-full shadow-inner shadow-[#03257e]" data-aos="zoom-in">
              {item.icon}
            </div>
            <h3 className="text-xl text-[#006666] font-semibold mb-2" data-aos="fade-up">{item.title}</h3>
            <p className="text-[#f14419] text-lg" data-aos="fade-up">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-10 w-full" data-aos="zoom-in">
        <div className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden border-4 border-gray-300 shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/kORadYQBGLY?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
     
      <div className="mt-12 text-center">
      <a
        href="https://www.edubukcetaolympiad.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#03257e] text-white hover:bg-white hover:text-[#f14419]  transition-all rounded-full px-6 py-3 text-lg font-semibold shadow-lg"
        data-aos="zoom-in"
      >
        Click to Learn More →
      </a>
    </div>
    </section>
  );
}
