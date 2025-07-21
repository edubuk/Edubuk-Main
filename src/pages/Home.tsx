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
import vision from '../assets/vision.png';
import mission from '../assets/mission.png';


import {
  instLogos,
  govLogos,
  blcLogos,
  accLogos,
  mediaLogos,
  foreignLogos,
  finLogos,
} from "./Utils";

import { FaLinkedinIn } from "react-icons/fa";
import HeroSection from "./HeroSection";
import ProductSection from "./OurProducts";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

//const urls = ["https://www.edubuktrucv.com/","https://www.edubukeseal.org/","https://www.edubukceta.com","https://www.edubukcetaolympiad.com/","https://www.ebuktokens.com/","https://www.edubukmiitscreening.com/"]

const Home = () => {
  // const [current, setCurrent] = useState(0);




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
      {/* <div className="flex flex-col">
        <div
          // onClick={() => window.open(urls[current], '_blank')}
          className="mx-auto relative w-full aspect-[16/9] lg:aspect-[16/8] rounded-[2px] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${images[current]})` }}
        >
          <div className="absolute flex flex-col gap-1 sm:gap-2 top-2/6 md:top-2/5 right-0 mr-1 md:mr-3 lg:mr-4 bg-white rounded-full p-1">
          {
            images.map((_,i)=>(
              <span 
              key={i} 
              className="z-10 p-1 md:p-2 border-2 border-gray-400 rounded-full cursor-pointer" 
              style={{background:current===i?"#03257e":""}}
              onClick={()=>setCurrent(i)}
              ></span>
            ))
          }
          </div>
          
        </div>
      </div> */}
      <HeroSection />

      <div className="flex justify-center flex-col items-center w-full overflow-hidden">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          Awards & Recognitions
        </p>

        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 w-[160px] border-[#03257e] sm:flex sm:ml-0 rounded py-2 px-4 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            Education institutes
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={1} className="flex animate-slide whitespace-nowrap">
              {instLogos.concat(instLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-12 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <div className="overflow-hidden sm:py-4">
            <div
              key={2}
              className="flex animate-slideOpposite whitespace-nowrap"
            >
              {govLogos.concat(govLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-6 w-auto sm:w-auto mx-4 sm:mx-8"
                />
              ))}
            </div>
          </div>
          <p className="absolute right-0 bg-white hidden border-b-4 border-[#03257e] sm:flex rounded w-[200px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            Governments & Regulators
          </p>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 p-2 border-[#03257e] sm:flex rounded w-[250px] text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            Grants & awards by blockchains
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={3} className="flex animate-slide whitespace-nowrap">
              {blcLogos.concat(blcLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-6 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <div className="overflow-hidden sm:py-4">
            <div
              key={4}
              className="flex animate-slideOpposite whitespace-nowrap"
            >
              {accLogos.concat(accLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-6 w-auto sm:w-auto mx-4 sm:mx-8"
                />
              ))}
            </div>
          </div>
          <p className="absolute right-0 bg-white hidden border-b-4 border-[#03257e] sm:flex rounded w-[200px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            cloud credits & accelerators
          </p>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 border-[#03257e] sm:flex sm:ml-0 rounded w-[100px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            media houses
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={5} className="flex animate-slide whitespace-nowrap">
              {mediaLogos.concat(mediaLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-10 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <div className="overflow-hidden sm:py-4">
            <div
              key={6}
              className="flex animate-slideOpposite whitespace-nowrap"
            >
              {foreignLogos.concat(foreignLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-12 w-auto sm:w-auto mx-4 sm:mx-8"
                />
              ))}
            </div>
          </div>
          <p className="absolute right-0 bg-white hidden border-b-4 border-[#03257e] sm:flex rounded w-[180px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            international bodies
          </p>
        </div>
        <div className="flex justify-start items-center p-2 border-b-2 border-gray-300">
          <p className="absolute left-0 bg-white hidden border-b-4 border-[#03257e] sm:flex sm:ml-0 rounded w-[130px] p-2 text-[#03257e] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800 z-20">
            fintech & banking
          </p>
          <div className="overflow-hidden sm:py-4">
            <div key={7} className="flex animate-slide whitespace-nowrap">
              {finLogos.concat(finLogos).map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-9 sm:h-12 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10" id="about-us">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">
          Why Edubuk
        </p>
        <p className=" text-[#03257E] text-[25px] text-center px-5 sm:px-10 md:px-20">Our Platform bridges the gap between education and employment by providing emerging tech courses, veriﬁable academic & professional credentials and intelligent job matching leveraging Al and Blockchain Technology.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-baseline justify-center">
          <div className="flex flex-col w-full justify-center items-center p-8 gap-4">
            <img src={vision} className="w-fit h-20"></img>
            <p className="text-black text-2xl text-center md:w-[250px]"><span className="text-[#03257e] font-bold">VISION</span><br></br>One-Stop Platform for global academic & professional credentials veriﬁcation</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full p-8 gap-4">
            <img src={mission} className="w-fit h-20"></img>
            <p className="text-black text-2xl text-center"><span className="text-[#03257e] font-bold">MISSION</span><br></br>To provide a secure platform for global veriﬁcation of academic and professional credentials, thereby eliminating fraud and empowering universities, employers, students and professionals globally.
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10" id="edubuk-products">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">
          Explore Our Products
        </p>
      {/* <div className="flex justify-evenly items-baseline-last flex-wrap gap-y-10">
          <div className="flex flex-col justify-center items-center gap-4 w-[300px] sm:w-[350px] rounded-lg border-b-2 border-[#03257e] p-2">
            <img src={logo1} alt="logo" className="w-fit h-32 "></img>
            <a 
            href="https://www.edubukceta.com/" 
            target="_blank"
            rel="nonopener noreferrer"
            className="text-white text-[16px] sm:text-[20px] p-2 rounded-full bg-gradient-to-br from-[#03257e] via-[#006666] to-[#f14419] cursor-pointer">Click to Know More</a>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-[300px] sm:w-[350px] rounded-lg border-b-2 border-[#03257e] p-2">
            <img src={logo2} alt="logo" className="w-fit h-24"></img>
            <a 
            href="https://www.edubukmiitscreening.com/" 
            target="_blank"
            rel="nonopener noreferrer"
            className="text-white text-[16px] sm:text-[20px]  p-2 rounded-full bg-gradient-to-br from-[#03257e] via-[#006666] to-[#f14419] cursor-pointer">Click to Know More</a>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-[300px] sm:w-[350px] rounded-lg border-b-2 border-[#03257e] p-2">
            <img src={logo3} alt="logo" className="w-fit h-32"></img>
            <a 
            href="https://www.edubukcetaolympiad.com/" 
            target="_blank"
            rel="nonopener noreferrer"
            className="text-white text-[16px] sm:text-[20px] p-2 rounded-full bg-gradient-to-br from-[#03257e] via-[#006666] to-[#f14419] cursor-pointer">Click to Know More</a>
          </div>
          
          <div className="flex flex-col justify-center items-center gap-4 w-[300px] sm:w-[350px] rounded-lg border-b-2 border-[#03257e] p-2">
            <img src={logo4} alt="logo" className="w-fit h-28"></img>
            <a href="https://www.edubuktrucv.com/" 
            target="_blank"
            rel="nonopener noreferrer"

            className="text-white text-[16px] sm:text-[20px] p-2 rounded-full bg-gradient-to-br from-[#03257e] via-[#006666] to-[#f14419] cursor-pointer">Click to Know More</a>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-[300px] sm:w-[350px] rounded-lg border-b-2 border-[#03257e] p-2">
            <img src={logo5} alt="logo" className="w-fit h-32"></img>
            <a 
            href="https://www.edubukeseal.org/" 
            target="_blank"
            rel="nonopener noreferrer"
            className="text-white text-[16px] sm:text-[20px] p-2 rounded-full bg-gradient-to-br from-[#03257e] via-[#006666] to-[#f14419] cursor-pointer">Click to Know More</a>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-[300px] sm:w-[350px] rounded-lg  border-b-2 border-[#03257e] p-2">
            <img src={logo6} alt="logo" className="w-fit h-32"></img>
            <p className="text-[25px] font-bold bg-gradient-to-r from-[#03257e] via-[#006666] to-[#f14419] bg-clip-text text-transparent">EBUK Tokens</p>
            <a 
            href="https://www.ebuktokens.com/" 
            target="_blank"
            rel="nonopener noreferrer"
            className="text-white text-[16px] sm:text-[20px] p-2 rounded-full bg-gradient-to-br from-[#03257e] via-[#006666] to-[#f14419] cursor-pointer">Click to Know More</a>
          </div>
      </div> */}
      <ProductSection />
      </div>
      <div className="flex flex-col justify-center items-center mt-10" id="olympiad">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">
          Edubuk in Action<br></br>
          <span className="text-3xl font-semibold">Our Journey & Global Achievements</span>
        </p>
        {/* <p className=" text-[#000000] my-4 text-[23px] sm:text-[38px] md:text-[48px] text-center">No-Code Skilling in Emerging Technologies</p> */}
      </div>
      <div className="flex justify-center items-center gap-4 p-4 w-full">
              <div className="relative w-full max-w-[800px] aspect-video rounded-xl overflow-hidden border-4 border-gray-300 shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/RaFvWqkBI4g?autoplay=1&mute=1"
                  title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

      <div>
        

      </div>

      
      <div className="flex justify-center items-center gap-3">
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#03257E]"></span>
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#006666]"></span>
        <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#F14419]"></span>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          Meet Our executives
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-3">
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={team1}
                alt="team1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center flex-grow">
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
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
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
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
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
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
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
        <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          MEET OUR ADVISORS
        </p>
        <div className=" flex justify-center items-center flex-wrap gap-3">
          <div className="w-full max-w-xs min-h-[450px] p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition duration-300 flex flex-col justify-between items-center text-center">
            <div className="w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#03257e] via-[#006666] to-[#F14419]">
              <img
                src={advisor1}
                alt="advisor1"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">Ish Anand</p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Serial Entrepreneur, Advisor in Startups, Global Citizen
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
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
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
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
              <p className="text-lg font-bold text-gray-800 mb-1">
                Dr. Sindhu Bhaskar
              </p>
              <p className="bg-gradient-to-r from-[#03257e] via-[#006666] to-[#F14419] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Co-Founder, EST Global, Forbes Council Member
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
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center flex-grow">
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
