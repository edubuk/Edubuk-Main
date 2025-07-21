import logo1 from "../assets/Logos/cetabgless.png";
import logo2 from "../assets/Logos/miitbgless.png";
import logo3 from "../assets/Logos/logo3.png";
import logo4 from "../assets/Logos/logo4.png";
import logo5 from "../assets/Logos/logo5.png";
import logo6 from "../assets/Logos/logo6.png";
import logo from "../assets/edubuklogo.png";
const products = [
  { name: "TruCV", icon: logo4 },
  { name: "eSeal", icon: logo5 },
  { name: "CETA", icon: logo1 },
  { name: "EBUK Token", icon: logo6 },
  { name: "CETA Olympiad", icon: logo3 },
  { name: "MIIT Screening", icon: logo2 },
];

export default function HeroSection() {
  return (
    <section className="bg-white text-white min-h-screen px-2  sm:px-6 md:px-16 pt-16 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="w-full sm:max-w-xl space-y-2">
          <p className="text-4xl text-center sm:text-left sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#03257e]">
            Welcome to the future of trust in{" "}
            <span className="text-[#f14419]">Education</span> and{" "}
            <span className="text-[#f14419]">Employment</span>
          </p>
          <p className="text-lg font-semibold text-[#008888] text-center sm:text-left">
            Edubuk unites cutting-edge blockchain with real-world credentials
            across 6 transformative products — from skill verification with
            eSeal, career-building with TruCV, to AI-powered Olympiads and
            tokenized rewards with EBUK.
          </p>
          <div className="flex gap-2 w-full justify-center sm:justify-start">
            <a href="#about-us" className="bg-[#006666] text-white font-semibold px-2 py-1  sm:px-6 sm:py-3 rounded-md hover:bg-[#028080] transition">
              Get Started →
            </a>
            <a href="#edubuk-products" className="bg-[#03257e] border border-white/20 text-white font-semibold px-2 py-1  sm:px-6 sm:py-3 text-sm sm:text-xl rounded-md hover:bg-[#021f6a] transition">
              Explore Our Products
            </a>
          </div>
        </div>

        {/* Product Grid Container larger screen */}
        <div className="relative mt-10 md:mt-0 md:ml-20 w-full md:w-auto hide-horizontal-design">
          {/* Background SVG with shiny glowing center */}
          <svg
            viewBox="0 0 300 300"
            className="absolute inset-0 w-full h-full opacity-80"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Glow gradient */}
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="hsl(186, 83%, 73%)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(186, 83%, 53%)"
                  stopOpacity="0"
                />
              </radialGradient>

              {/* Animation for shiny stroke */}
              <style>
                {`
          .shiny-line {
            stroke-dasharray: 200;
            stroke-dashoffset: 400;
            animation: dash 4s infinite ease-in-out;
          }

          @keyframes dash {
            0% {
              stroke-dashoffset: 400;
            }
              50% {
              stroke-dashoffset:0;
            }
            100% {
              stroke-dashoffset:-400;
            }
          }
        `}
              </style>
            </defs>

            {/* Shiny lines */}
            {[
              [50, 50, 150, 150],
              [250, 50, 150, 150],
              [50, 250, 150, 150],
              [250, 250, 150, 150],
              [150, 50, 150, 150],
              [150, 250, 150, 150],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#f14419"
                strokeWidth="1"
                className="shiny-line"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
            <img
              src={logo}
              alt="Parent Logo"
              className="w-fit h-20 bg-white rounded-full border-1 shadow-md shadow-[#006666] p-1"
            />
          </div>

          {/* Product Grid */}
          <div className="relative grid grid-cols-3 gap-28 lg:gap-30 justify-items-center z-10 ">
            {products.map((product, index) => (
              <>
              <div
                key={index}
                className="w-[160px] h-[112px] rounded-xl 
  flex flex-col items-center justify-center bg-white border  shadow-md shadow-[#006666] 
  hover:border-[#f14419] transition duration-300"
              >
                <img src={product.icon} className="w-fit h-18 mb-2" />
              </div>
              </>
            ))}
          </div>
        </div>
        {/* Product Grid Container smaller screen */}
        <div className="relative flex flex-col items-center justify-center w-full py-16 px-4 hide-vertical-design">
          {/* SVG Lines to connect logos to parent */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 500 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Glow gradient */}
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="hsl(186, 83%, 73%)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(186, 83%, 53%)"
                  stopOpacity="0"
                />
              </radialGradient>

              {/* Animation for shiny stroke */}
              <style>
                {`
          .shiny-line {
            stroke-dasharray: 520;
            stroke-dashoffset: 400;
            animation: dash 1.5s infinite ease-in-out;
          }

          @keyframes dash {
            0% {
              stroke-dashoffset: 400;
            }

            50% {
              stroke-dashoffset:0;
            }
            100% {
              stroke-dashoffset:-400;
            }
          }
        `}
              </style>
            </defs>
            {[
              [150, 150],
              [350, 150], // row 1
              [150, 300],
              [350, 300], // row 2
              [150, 520],
              [350, 520], // row 3
            ].map(([x, y], i) => (
              <line
                key={i}
                x1="250"
                y1="-5"
                x2={x}
                y2={y}
                stroke="#f14419"
                strokeWidth="1.5"
                className="shiny-line"
              />
            ))}
          </svg>

          {/* Parent Logo */}
          <div className="z-10 mb-10">
            <img
              src={logo}
              alt="Parent Logo"
              className="w-fit h-28 bg-white rounded-full shadow-md shadow-[#006666] 
  hover:border-[#f14419] transition duration-300 p-2"
            />
          </div>

          {/* Logo Grid (3 rows × 2 columns) */}
          <div className="grid grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-32 h-24 bg-white rounded-xl flex flex-col items-center justify-center text-[#030c2c] font-semibold shadow-md shadow-[#006666] 
  hover:border-[#f14419] transition duration-300 relative z-10"
              >
                <img
                  src={product.icon}
                  alt={product.name}
                  className="w-fit h-16 mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
