import { useState, useEffect } from "react";
import hero1 from "../assets/HeroImg/hero11.jpg";
import hero2 from "../assets/HeroImg/hero2.png";
import hero3 from "../assets/HeroImg/hero3.jpg";
//import hero3 from '../assets/HeroImg/tempImg.jpeg';
// import award1 from '../assets/AwardImg/award1.png';
// import award2 from '../assets/AwardImg/award2.jpg';
// import award3 from '../assets/AwardImg/award3.png';
import team1 from "../assets/Team/team1.png";
import team2 from "../assets/Team/team2.png";
import team3 from "../assets/Team/team3.png";
import team4 from "../assets/Team/team4.png";
import advisor1 from "../assets/Advisor/advisor1.png";
import advisor2 from "../assets/Advisor/advisor2.png";
import advisor3 from "../assets/Advisor/advisor3.png";
import advisor4 from "../assets/Advisor/advisor4.png";
import Footer from "./Footer";

// import toast from "react-hot-toast";

import {
  instLogos,
  govLogos,
  blcLogos,
  accLogos,
  mediaLogos,
  foreignLogos,
  finLogos,
} from "./Utils";
import PaymentPopup from "../components/paymentGateway/razorpay";
// import { colleges } from "./Colleges";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// interface formValue{
//   name:string,
//   college:string,
//   stuClass:string,
//   city:string,
//   country:string
//   phoneNumber:string,
//   email:string,
// }

const images = [hero1, hero2, hero3];
// const logos = [logo1,logo2,logo3,logo4,logo5,logo1,logo2,logo3,logo4,logo5];

// const logosByCategory1: Record<string, string[]> = {
//   "Education institutes":instLogos,
//   "Governments & Regulators":govLogos,
//   "Grants & awards by blockchains":blcLogos,
//   "cloud credits & accelerators":accLogos,
//   "media houses":mediaLogos,
//   "international bodies":foreignLogos,
//   "fintech & banking":finLogos
// };
// const logosByCategory2: Record<string, string[]> = {
//   "fintech & banking":finLogos,
//   "international bodies":foreignLogos,
//   "media houses":mediaLogos,
//   "cloud credits & accelerators":accLogos,
//   "Grants & awards by blockchains":blcLogos,
//   "Governments & Regulators":govLogos,
//   "Education institutes":instLogos,
// };

// const SLIDE_DURATION = 10000;

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [paymentId, setPaymentId] = useState<boolean>(false);
  // const [query, setQuery] = useState("");
  // const [showDropdown, setShowDropdown] = useState(false);
  // const containerRef = useRef<HTMLDivElement>(null);
  const [auth] = useAuth();
  // const [formData,setFormData] = useState<formValue>({
  //   name:"",
  //   college:"",
  //   stuClass:"",
  //   city:"",
  //   country:"",
  //   phoneNumber:"",
  //   email:""
  // })

  // const filteredColleges = colleges.filter((college) =>
  //   college.toLowerCase().includes(query.toLowerCase())
  // );

  // const handleSelect = (college: string) => {
  //   if(college==="other")
  //   {
  //     setShowDropdown(false);
  //   }else{
  //   setQuery(college);
  //   setShowDropdown(false);
  //   }
  // };

  // const categories1 = Object.keys(logosByCategory1);
  // const categories2 = Object.keys(logosByCategory2);
  // const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  // const [currentCategoryIndex2, setCurrentCategoryIndex2] = useState(0);
  //const [animateKey,setAnimatedKey] = useState(0); // to reset animation

  // useEffect(() => {
  //   const timer1 = setInterval(() => {
  //     setCurrentCategoryIndex((prev) => (prev + 1) % categories1.length);
  //     setCurrentCategoryIndex2((prev) => (prev + 1) % categories2.length);
  //     setAnimateKey((prev) => prev + 1); // force re-trigger animation
  //   }, SLIDE_DURATION);

  //   return () => clearInterval(timer1);

  // }, []);

  useEffect(() => {
    //const paymentId = localStorage.getItem("paymentId");
    //console.log("paymentId",paymentId)
    const getPaymentId = async () => {
      try {
        let data: any = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/user/getPaymentStatus/${
            auth.user.email
          }`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        data = await data.json();
        console.log("data", data);
        if (data) {
          console.log("data", data);
          if(data.paymentId)
          setPaymentId(true);
        }
      } catch (error) {
        console.log("error while fetching payments data", error);
      }
    };
    getPaymentId();
  }, [showSuccessPopup]);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       containerRef.current &&
  //       !containerRef.current.contains(event.target as Node)
  //     ) {
  //       setShowDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // const currentCategory1 = categories1[currentCategoryIndex];
  // const currentLogos1 = logosByCategory1[currentCategory1];
  // const currentCategory2 = categories2[currentCategoryIndex2];
  // const currentLogos2 = logosByCategory2[currentCategory2];

  // const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
  //   e.preventDefault();
  //   const {name,value}=e.target;
  //   setFormData((prevData)=>({...prevData,[name]:value})) ;
  //   console.log("form",formData)
  // }

  // const regHandler = async(e:any)=>{
  //   e.preventDefault();
  //   try {
  //     if(!formData.name || !formData.college || !formData.stuClass || !formData.country || !formData.phoneNumber || !formData.email )
  //     {
  //       toast.error("All inputs field are required");
  //     }
  //     const data:any = await fetch('http://localhost:8000/api/v1/user/registration',{
  //       method:"POST",
  //       body:JSON.stringify({name:formData.name,college:formData.college,stuClass:formData.stuClass,city:formData.city, country:formData.country, phoneNumber:formData.phoneNumber,email:formData.email}),
  //       headers:{
  //         "Content-Type": "application/json",
  //       }
  //     })

  //     const res = await data.json();
  //     console.log("res",res);
  //     if(res.success)
  //     {
  //       localStorage.setItem("email",formData.email);
  //       setFormData({
  //         name: "",
  //         college: "",
  //         stuClass:"",
  //         city:"",
  //         country:"",
  //         phoneNumber: "",
  //         email: ""
  //       });
  //       return toast.success(res.message);
  //     }
  //     if(!res.success)
  //     {
  //       toast.error(res.message);
  //     }
  //   } catch (error) {
  //     console.log("error while user registration",error);
  //     toast.error("something went wrong !");
  //   }
  // }

  // const buttonHandler = (e:any)=>{
  //   e.preventDefault();
  //   const data = localStorage.getItem("paymentId");
  //   if(data!==paymentId)
  //   {
  //     setShowPopup(true);
  //   }
  //   else{
  //     regHandler(e);
  //   }
  // }

  // Auto-slide every 5 seconds
  console.log("auth values", auth.user);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col gap-6 font-open">
      <div className="flex flex-col p-4">
        <p className="font-open text-[#F14419] uppercase text-center text-[25px] sm:text-[40px] md:text-[50px] font-bold leading-8 sm:leading-12  md:leading-14">
          International Olympiad
        </p>
        <p className="font-open text-[#03257E] uppercase text-center text-[25px] sm:text-[40px] md:text-[50px] font-bold leading-8 sm:leading-12 md:leading-14">
          AI & Emerging Technologies (No Code)
        </p>

        <div
          className="mx-auto relative w-full aspect-[16/9] lg:aspect-[16/7] rounded-[8px] bg-cover bg-center mt-3"
          style={{ backgroundImage: `url(${images[current]})` }}
        >
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-[8px]"></div>

          {/* Text content on image */}
          <div className="absolute top-[15px] md:top-[25px] left-[25px] z-10 flex flex-col w-fit">
            <p className="bg-[#F14419] text-white md:text-[25px] text-[10px] p-2">
              India | Singapore | Dubai
            </p>
            <p className="bg-[#006666] text-white md:text-[25px] text-[10px] p-2">
              Open for Class 7 to 12
            </p>
            {!auth.user && (
              <Link
                to="/sign-up"
                className="absolute top-20 md:top-32  text-[#F14419] bg-[#ffffff] hover:bg-[#F14419] hover:text-white transition-all rounded-4xl py-1 px-4 sm:py-2 sm:px-8 text-[12px] md:text-[30px] z-10 font-bold cursor-pointer"
              >
                Sign-Up
              </Link>
            )}
            {auth?.user && (
              <a
                href="#register"
                className={`absolute top-20 md:top-32 text-[#F14419] bg-[#ffffff] hover:bg-[#F14419] hover:text-white transition-all rounded-4xl py-1 px-4 sm:py-2 sm:px-8 text-[12px] md:text-[30px] z-10 font-bold ${
                  paymentId
                    ? "pointer-events-none opacity-50  cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                {paymentId ? "REGISTERED" : "REGISTER"}
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-950 md:text-[22px] text-[10px]">
          * Students from all streams are eligible
        </p>
        {/* Dot navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-4 h-4 rounded-full ${
                i === 0
                  ? "bg-[#03257E]"
                  : i === 1
                  ? "bg-[#006666]"
                  : "bg-[#F14419]"
              } ${
                current === i ? "scale-110 ring-2 ring-amber-300 shadow-lg" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>

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

      <div>
        <div
          className="flex flex-col justify-center items-center"
          id="olympiad"
        >
          <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">
            No-Code Olympiad in Emerging Technologies
          </p>
          {/* <p className=" text-[#000000] my-4 text-[23px] sm:text-[38px] md:text-[48px] text-center">No-Code Skilling in Emerging Technologies</p> */}
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
          <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className=" text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">
              1
            </p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">
              Artificial Intelligence
            </p>
          </div>
          <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">
              2
            </p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">
              Robotics
            </p>
          </div>
          <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">
              3
            </p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">
              Cybersecurity
            </p>
          </div>
          <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">
              4
            </p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">
              Data Analytics
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center" id="olympiad">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">
          Watch How It Works
        </p>
        {/* <p className=" text-[#000000] my-4 text-[23px] sm:text-[38px] md:text-[48px] text-center">No-Code Skilling in Emerging Technologies</p> */}
      </div>
      <div className="flex justify-center items-center gap-4 p-4">
        {/* Left Rectangular Box (Hidden on mobile) */}
        {/* <div className="hidden sm:block w-32 h-[350px] bg-gray-300 rounded-md shadow-md"></div> */}

        {/* Video with Fixed Height and 16:9 Aspect Ratio */}
        <div className="relative w-full max-w-3xl h-[250px] sm:h-[350px] border-4 border-gray-300 rounded-xl">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/kORadYQBGLY?autoplay=1&mute=1"
            title="Edubuk Presents: AI and Emerging Technologies Hackathon for College Student"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Rectangular Box (Hidden on mobile) */}
        {/* <div className="hidden sm:block w-32 h-[350px] bg-gray-300 rounded-md shadow-md"></div> */}
      </div>

      <div>
        <div className="flex flex-col justify-center items-center bg-[#006666] p-6">
          <p className="text-[#ffffff] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
            Concept By:
          </p>
          <p className="text-[#ffffff] pt-4 text-[23px] sm:text-[38px] md:text-[48px] font-light text-center leading-8 sm:leading-12 md:leading-14">
            IIT, IIM, Alumni, CFA Charterholder, Gold Medalist, Emerging
            Technologies Consultant, ex-Professors in India & UAE
          </p>
        </div>
        <div className="flex flex-col items-center pt-4 justify-center space-y-0">
          <p
            className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center"
            id="award"
          >
            Awards to be Won!
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 p-4">
            <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-lg">
              <div className="w-[300px] h-[300px] p-8">
                <DotLottieReact
                  src="https://lottie.host/278f37d4-d700-4952-b7af-e3ad48bc9b50/usKs5I4b4X.lottie"
                  loop
                  autoplay
                />
              </div>
              <p className="text-white w-full p-4 bg-[#03257E] uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] rounded-b-lg">
                exciting prizes
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-lg">
              <div className="w-[300px] h-[300px] p-8">
                <DotLottieReact
                  src="https://lottie.host/176c2c1d-55f1-4966-8f51-481208bacf00/Hj70UEKuYf.lottie"
                  loop
                  autoplay
                />
              </div>
              <p className="text-white w-full p-4 bg-[#006666] uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] rounded-b-lg">
                Certificates
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-lg">
              <div className="w-[300px] h-[300px] p-8">
                <DotLottieReact
                  src="https://lottie.host/b2890cb3-db52-437d-9568-d1284c3763ea/W3jB7Zn0fP.lottie"
                  loop
                  autoplay
                />
              </div>
              <p className="text-white w-full p-4 bg-[#F14419] uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] rounded-b-lg">
                Medals
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center bg-[#006666] p-8"
        id="about"
      >
        <p className="text-[#ffffff] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
          About EDUBUK
        </p>
        <p className="text-[#ffffff] text-[23px] sm:text-[38px] md:text-[48px] font-light text-center mt-4 leading-8 sm:leading-12 md:leading-14">
          Our platform bridges the gap between education and employment by
          providing emerging tech courses, verifiable academic & professional
          credentials and intelligent job matching leveraging AI and Blockchain
          Tech
        </p>
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
        className="flex flex-wrap items-center justify-center gap-2 p-2"
        id="register"
      >
        {/* {!auth&&<div className="flex flex-col justify-center items-center">
  <form 
  className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md space-y-8 w-screen sm:w-auto" 
  id="register"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
    <div>
      <label className="block text-sm font-medium text-[#1e1e1e]">Student Name*</label>
      <input
        type="text"
        placeholder="Student Name"
        name="name"
        value={formData.name}
        onChange={onChangeHandler}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-[#1e1e1e]">School/College Name*</label>
      <input
        type="text"
        name="college"
        placeholder="School/College Name"
        value={query}
        onFocus={() => setShowDropdown(true)}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>

    {showDropdown && (
        <ul className="absolute z-10 w-fit bg-gray-200 rounded mt-18 sm:ml-44 max-h-60 overflow-y-auto shadow-md hide-scrollbar ">
          {filteredColleges.length > 0 &&(
            filteredColleges.map((college) => (
              <li
                key={college}
                onClick={() => handleSelect(college)}
                className="text-[#006666] px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              >
                {college}
              </li>
            ))
          ) }
        </ul>
      )}

    <div>
      <label className="block text-sm font-medium text-[#1e1e1e]">Class*</label>
      <input
        type="text"
        name="stuClass"
        placeholder="Class"
        value={formData.stuClass}
        onChange={onChangeHandler}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-[#1e1e1e]">City*</label>
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={onChangeHandler}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-[#1e1e1e]">Country*</label>
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={onChangeHandler}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-[#1e1e1e]">Phone Number*</label>
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={onChangeHandler}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>

    <div className="sm:col-span-2">
      <label className="block text-sm font-medium text-[#1e1e1e]">Email Address*</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChangeHandler}
        required
        className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
      />
    </div>
  </div>

  <button
    type="submit"
    onClick={buttonHandler}
    className="w-full bg-[#006666] text-white py-2 rounded-md hover:bg-[#1e1e1e] transition"
  >
    Submit
  </button>
</form>
</div>} */}
        <div className="w-fit h-[250px] sm:w-[400px] sm:h-[400px]">
          <DotLottieReact
            src="https://lottie.host/586ad214-f76e-4d3c-8b67-e9e05e893ba2/4314PkEllr.lottie"
            loop
            autoplay
          />
        </div>

        {showPopup && (
          <PaymentPopup
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setShowSuccessPopup={setShowSuccessPopup}
          />
        )}
        <div className="flex justify-center items-center flex-col gap-2 sm:gap-1">
          <div className="text-[#000] w-[330px] sm:w-[450px] uppercase text-2xl md:text-4xl lg:text-4xl font-semibold text-center">
            International <br /> Olympiad
          </div>

          <div className="bg-[#006666] p-4 w-[330px] sm:w-[450px] text-white text-base md:text-xl text-center rounded-md shadow">
            Compete in the New-Age International No-Code Emerging Technologies
            Olympiad!
          </div>

          {/* PRICING BOX */}
          <div className="flex justify-center items-center flex-col w-[330px] sm:w-[450px] bg-gray-100 border border-gray-300 shadow-md rounded-lg">
            <div className="bg-[#006666] text-white px-4 py-2 font-semibold text-lg text-center uppercase">
              Participation Fee
            </div>
            <div className="flex justify-between w-[320px] sm:w-[400px]">
              <div>
                <div className="flex flex-col justify-center items-start px-8 sm:px-4 py-2 w-full gap-2">
                  <p className="text-gray-500">1. India</p>
                  <p className="text-gray-500">2. UAE</p>
                  <p className="text-gray-500">3. Singapore</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-start items-start px-8 sm:px-4 py-2 w-full gap-2">
                  <p className="font-bold text-gray-500">INR 450</p>
                  <p className="font-bold text-gray-500">AED 50</p>
                  <p className="font-bold text-gray-500">SGD 50</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-white text-center max-w-md mx-auto mt-2">

          {auth?.user ? (
            <button
              onClick={() => setShowPopup(true)}
              disabled={paymentId}
              className={`bg-[#006666] text-white text-2xl px-6 py-2 rounded hover:bg-[#004d4d] transition duration-200 cursor-pointer bg-gradient-to-r w-[330px] sm:w-[450px] from-[#03257e] via-[#006666] to-[#F14419] ${paymentId ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Register Here
            </button>
          ) : (
            <Link
              className="bg-[#006666] text-white text-2xl px-6 py-2 rounded border-1 hover:bg-white hover:text-[#006666]  transition duration-300 cursor-pointer w-[330px] sm:w-[450px]"
              to="/sign-up"
            >
              Register Here
            </Link>
          )}
        </div>
        </div>
      </div>
      <Footer />
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-30 h-full w-full">
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
              onClick={() => setShowSuccessPopup(false)}
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
              <div className="flex flex-col space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-green-600 text-center">
                  Congratulations!
                </h2>
                <p className="text-gray-700 text-center">
                  You have successfully registered for the Olympiad.
                </p>
                <p className="text-gray-600 text-center">
                  We’ve sent your Olympiad enrollment number to your registered
                  email address. Please check your inbox or spam folder and save it for future reference.
                </p>
                <p className="text-blue-600 text-center text-xl font-bold">
                  Thank You !
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
