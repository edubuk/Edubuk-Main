import {
  Rocket,
  GraduationCap,
  Banknote,
  Medal,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { blcLogos } from "./Utils";



export default function WhyEbukTokenSection() {
  const utilities = [
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Courses on Edubuk LMS",
      desc: "Use EBUK tokens to enroll in premium skill-building courses across tech, business, and emerging domains.",
    },
    {
      icon: <Medal className="w-7 h-7" />,
      title: "AI Olympiad & CETA Program",
      desc: "Participate in international-level assessments powered by AI and earn rewards via EBUK tokens.",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "Internships & Placements",
      desc: "Gain exclusive access to internships and placement support by holding or using EBUK tokens.",
    },
    {
      icon: <Banknote className="w-7 h-7" />,
      title: "Learn-to-Earn, Skill-to-Earn",
      desc: "Earn tokens by learning, verifying, or contributing to the Edubuk ecosystem.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Verified Certificates on Blockchain",
      desc: "Issue and store your blockchain-based certificates securely using EBUK tokens.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "TruCV & eSeal Access",
      desc: "Leverage token-based access to trusted verification tools like TruCV and eSeal.",
    },
  ];

  //   const logos:(string | React.FC<{ className?: string }>)[] = [
  //     polygonLogo,
  //     xdcLogo,
  //     algorandLogo,
  //     educhainLogo,
  //     BNB,
  //     skale,
  //     SOLANA,
  //     LISK,
  //     polygonLogo,
  //     xdcLogo,
  //     algorandLogo,
  //     educhainLogo,
  //     BNB,
  //     SOLANA,
  //   ];

  return (
    <section className="bg-white px-6 md:px-20 py-6 border-b border-gray-200 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03257e] mb-4">
          EBUK Tokens
        </h2>
        <p className="text-xl mb-4 text-[#03257e]">
          <span className="text-[#f14419] font-semibold">EBUK</span> is the
          native utility and reward token of the globally awarded Edubuk
          ecosystem— connecting learning, skilling, and employment through Web3.
        </p>
        <p className="text-[#03257e] text-xl">
          It's a <strong>Utility Token</strong> — not a security. Designed to
          power Edubuk's Learn-to-Earn, Skill-to-Earn, and Verify-to-Earn models
          using AI & Blockchain. With support from chains like Solana, XDC,
          Concordium, and BNB, it’s the{" "}
          <span className="text-[#f14419] font-semibold">
            Bitcoin of Education & Employment
          </span>
          .
        </p>
      </div>
      <p className="text-xl text-[#f14419] text-center">
        Edubuk's eSeal and TruCV dApps are awarded, granted and live on 10
        Blockchains
      </p>
      <div className="flex items-center gap-3 py-10">
          <div className="flex-none"></div>
          <div className="flex w-[300px] mx-auto md:w-[700px] lg:w-full  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{
                x: "0%", // Start at 0
              }}
              animate={{
                x: "-50%", // Move to -50%
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
                repeatType: "loop", // Add this for seamless looping
              }}
              className="flex flex-none gap-14 pr-14"
            >
              {blcLogos.map((logo, index) => {

                return (
                  <div
                    key={index}
                    className="flex items-center justify-center"
                    data-aos="zoom-in"
                  >
                      <img
                        src={logo}
                        alt="logo"
                        className=
                          "h-6 lg:h-10 w-auto"
                        draggable={false}
                      />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

      <div className="grid md:grid-cols-3 gap-10">
        {utilities.map((item, i) => (
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
            src="https://www.youtube.com/embed/O16YUC3zbRI?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://www.ebuktokens.com/"
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
