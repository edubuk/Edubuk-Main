import {
  BadgeCheck,
  ShieldCheck,
  LockKeyhole,
  Globe,
  Rocket,
  FileCheck2,
  SearchCheck,
} from "lucide-react";

export default function WhyTruCVSection() {
  const reasons = [
    {
      icon: <LockKeyhole className="w-7 h-7" />,
      title: "Eliminates Credential Fraud",
      desc: "All academic and work records are blockchain-secured.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Boosts Trust & Transparency",
      desc: "Employers and institutions can verify your CV in seconds.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Recognition",
      desc: "Your profile is trusted across borders and industries.",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Faster Hiring & Admissions",
      desc: "No more delays with background checks or paperwork.",
    },
    {
      icon: <FileCheck2 className="w-7 h-7" />,
      title: "One CV for Life",
      desc: "Your achievements stay securely accessible, forever.",
    },
    {
      icon: <SearchCheck className="w-7 h-7" />,
      title: "Higher Shortlisting Rates",
      desc: "Verified CVs stand out to recruiters and systems.",
    },
    {
      icon: <BadgeCheck className="w-7 h-7" />,
      title: "Increases Employer Confidence",
      desc: "Better chances for interviews and global roles.",
    },
  ];

  return (
    <section className="bg-white text-[#006666] px-6 md:px-20 py-6 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03257e] mb-4">
          TruCV
          {/* <span className="text-[#f14419]"> AI & Emerging Tech</span> */}
        </h2>
        <p className="text-[#03257e] text-xl max-w-3xl mx-auto text-justify">
          In today’s competitive and global job market, trust and authenticity
          are everything. Employers, universities, and immigration authorities
          increasingly demand verified proof of education, experience, and
          skills. A traditional CV can be easily faked—but with
          <span className="text-[#f14419] font-semibold"> TruCV by Edubuk</span>
          , every credential you list is completely verifiable and tamper-proof,
          secured using blockchain technology.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {reasons.map((item, i) => (
          <div
            key={item.title}
            className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white hover:border-cyan-400/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up"
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
      <div className="flex justify-center items-center gap-4 p-4 w-full">
        <div className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden border-4 border-gray-300 shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vVYQXffnI-8?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a
          href="https://www.edubuktrucv.com/"
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
