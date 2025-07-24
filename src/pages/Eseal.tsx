import {
  Fingerprint,
  ShieldCheck,
  TimerReset,
  Database,
  GlobeLock,
  ClipboardCheck,
} from "lucide-react";


export default function WhyESealSection() {
  const reasons = [
    {
      icon: <Fingerprint className="w-7 h-7" />,
      title: "Tamper-Proof Credentials",
      desc: "Every certificate is recorded immutably using blockchain, preventing fraud or manipulation.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Decentralized Verification",
      desc: "Eliminates dependency on third-party verification—anyone can verify directly from the blockchain.",
    },
    {
      icon: <TimerReset className="w-7 h-7" />,
      title: "Instant Timestamping",
      desc: "All certifications are cryptographically timestamped to ensure historical accuracy.",
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Secure Record Storage",
      desc: "Certificate hashes are securely stored on-chain, while originals remain with the owner.",
    },
    {
      icon: <GlobeLock className="w-7 h-7" />,
      title: "Globally Recognized",
      desc: "Used by 15+ universities and verification companies across countries. No geographical barrier.",
    },
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: "One-Click Verification",
      desc: "Employers, universities, or background firms can instantly verify via eSeal’s web dApp.",
    },
  ];


  return (
    <section className="bg-white px-6 md:px-20 py-6 border-b border-gray-200" id="eseal">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#03257e] mb-4" data-aos="fade-up">
          eSeal
          {/* <span className="text-[#f14419]"> AI & Emerging Tech</span> */}
        </h2>
        <p className="text-[#03257e] text-xl max-w-3xl mx-auto text-left sm:text-justify" data-aos="zoom-in">
          <span className="text-[#f14419] font-semibold">eSeal</span> by Edubuk is a blockchain-powered verification system that ensures each certificate academic or professional is secure, verifiable, and tamper-proof. Built with cutting-edge AI and blockchain, it enables real-time, fraud-proof verification of credentials globally.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {reasons.map((item, i) => (
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
                  src="https://www.youtube.com/embed/1OBa8ki20Xc?autoplay=1&mute=1"
                  title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
      <div className="mt-12 text-center">
      <a
        href="https://edubukeseal.org"
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
