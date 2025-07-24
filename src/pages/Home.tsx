import { useLayoutEffect } from "react";

import team1 from "../assets/Team/team1.png";
import team2 from "../assets/Team/team2.png";
import team3 from "../assets/Team/team3.png";
import team4 from "../assets/Team/team4.png";
import advisor1 from "../assets/Advisor/advisor1.png";
import advisor2 from "../assets/Advisor/advisor2.png";
import advisor3 from "../assets/Advisor/advisor3.png";
import advisor4 from "../assets/Advisor/advisor4.png";
import Footer from "./Footer";


import { FaLinkedinIn } from "react-icons/fa";
import HeroSection from "./HeroSection";
import ProductSection from "./OurProducts";
import Award from "./Award";
import About from "./About";

const Home = () => {


  useLayoutEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, []);



  return (
    <div className=" flex flex-col gap-6 font-open">
      
      <HeroSection />
      <Award />
      <About />
      <div className="flex flex-col justify-center items-center gap-10" id="edubuk-products">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center" data-aos="fade-up">
          Explore Our Globally Award Winning Products
        </p>
      <ProductSection />
      </div>
      <div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#03257E]"></span>
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#006666]"></span>
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#F14419]"></span>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center" data-aos="fade-up">
          Meet Our executives
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-3">
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team1}
                alt="team1"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Apoorva Bajaj
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder & CEO
              </p>

              <a
                href="https://www.linkedin.com/in/apoorva-bajaj-iit-iim-cfa-edubuk/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                10+ years experience <br />
                ex-Goldman Sachs, JP Morgan, DE Shaw Engineer, IIT, IIM
                Gold-medalist, CFA Charterholder
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team2}
                alt="team2"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Shivaani Mehrotra
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder & COO
              </p>

              <a
                href="https://www.linkedin.com/in/shivani-mehrotra-edubuk/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                10+ years experience in <br></br>Education Sector as University
                Professor MBA + University Topper, Women in AI APAC Finalist
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team3}
                alt="team3"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Amit Srivastava
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Chief Marketing Officer
              </p>

              <a
                href="https://www.linkedin.com/in/amit-srivastava-62969352/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
              <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                20+ years experience in <br /> marketing and sales in Education
                & Finance sector. MBA in International Business.
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team4}
                alt="Apoorva Bajaj"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Ajeet Ram Verma
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Tech Lead Developer
              </p>

              <a
                href="https://www.linkedin.com/in/ajeet-ram-verma-953605244/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                5+ years of experience in Core Technology Domain <br></br>MERN
                Full-Stack <br></br>Python-AI & ML <br></br>Solidity & Rust
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <span className=" w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#03257E]"></span>
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#006666]"></span>
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#F14419]"></span>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center" data-aos="fade-up">
          MEET OUR ADVISORS
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-3">
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor1}
                alt="advisor1"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>
            <div className="flex flex-col items-center flex-grow" data-aos="zoom-in">
              <p className="text-lg font-bold text-gray-800 mb-1">Ish Anand</p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Serial Entrepreneur, Board Member
              </p>

              <a
                href="https://www.linkedin.com/in/ishanand/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                30 years + of experience in Corporates, the Startup Ecosystem
                and as an Enterpreneur across 5 continents
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor2}
                alt="advisor2"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Dr. Narsing Rao, GS
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Former VC at ICFAI University
              </p>

              <a
                href="https://www.linkedin.com/in/dr-narsing-rao-gs-a318735/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                30 years + of experience in Education Sector as Vice Chancellor
                & Chief Mentor at Indian Universities ex-Professor
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor3}
                alt="advisor3"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Dr. Sindhu Bhaskar
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder, EST-FAB Global,
              </p>

              <a
                href="https://www.linkedin.com/in/dr-sindhu-bhaskar-55a84568/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                Established $100M+ business in Education sector. Co-Founded
                Fintech & Blockchain Association (FAB), US.
              </p>
            </div>
          </div>
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            {/* Image */}
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor4}
                alt="advisor4"
                className="w-full h-full rounded-full object-cover"
                data-aos="zoom-in"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow" data-aos="fade-up">
              <p className="text-lg font-bold text-gray-800 mb-1">James Wren</p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Lead BD, Liquidium
              </p>

              <a
                href="https://www.linkedin.com/in/james-wren-15b8b759/"
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <FaLinkedinIn className="text-[#0077B5] w-7 h-7" />
              </a>

              <p className="text-sm text-gray-600 leading-relaxed">
                7+ years experience in Web3, Blockchain Degen & influencer in
                the BTC Ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-wrap items-center justify-center gap-2 p-2 "
        id="register"
      >
      </div>
      <Footer />

    </div>
  );
};

export default Home;
