import { useState, useEffect} from "react";
import hero1 from '../assets/HeroImg/hero11.jpg';
import hero2 from '../assets/HeroImg/hero2.png';
import hero3 from '../assets/HeroImg/hero3.jpg';
//import hero3 from '../assets/HeroImg/tempImg.jpeg';
import award1 from '../assets/AwardImg/award1.png';
import award2 from '../assets/AwardImg/award2.jpg';
import award3 from '../assets/AwardImg/award3.png';
import team1 from '../assets/Team/team1.png';
import team2 from '../assets/Team/team2.png';
import team3 from '../assets/Team/team3.png';
import team4 from '../assets/Team/team4.png';
import advisor1 from '../assets/Advisor/advisor1.png';
import advisor2 from '../assets/Advisor/advisor2.png';
import advisor3 from '../assets/Advisor/advisor3.png';
import advisor4 from '../assets/Advisor/advisor4.png';
import Footer from "./Footer";
// import toast from "react-hot-toast";
import pricingBg from "../assets/pricingBg.png"
import {instLogos,govLogos,blcLogos,accLogos,mediaLogos,foreignLogos,finLogos } from "./Utils";
import PaymentPopup from "../components/paymentGateway/razorpay";
// import { colleges } from "./Colleges";
import { useAuth } from "../context/auth";
// interface formValue{
//   name:string,
//   college:string,
//   stuClass:string,
//   city:string,
//   country:string
//   phoneNumber:string,
//   email:string,
// }

const images = [hero1,hero2,hero3];
// const logos = [logo1,logo2,logo3,logo4,logo5,logo1,logo2,logo3,logo4,logo5];

const logosByCategory1: Record<string, string[]> = {
  "Education institutes":instLogos,
  "Governments & Regulators":govLogos,
  "Grants & awards by blockchains":blcLogos,
  "cloud credits & accelerators":accLogos,
  "media houses":mediaLogos,
  "international bodies":foreignLogos,
  "fintech & banking":finLogos
};
// const logosByCategory2: Record<string, string[]> = {
//   "fintech & banking":finLogos,
//   "international bodies":foreignLogos,
//   "media houses":mediaLogos,
//   "cloud credits & accelerators":accLogos,
//   "Grants & awards by blockchains":blcLogos,
//   "Governments & Regulators":govLogos,
//   "Education institutes":instLogos, 
// };

const SLIDE_DURATION = 10000;

const Home = ()=>{

    const [current, setCurrent] = useState(0);
    const [showPopup,setShowPopup] = useState<boolean>(false);
    // const [paymentId,setPaymentId] = useState<string>();
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

    const categories1 = Object.keys(logosByCategory1);
    //const categories2 = Object.keys(logosByCategory2);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    //const [currentCategoryIndex2, setCurrentCategoryIndex2] = useState(0);
    const [animateKey, setAnimateKey] = useState(0); // to reset animation
    
    useEffect(() => {
      const timer1 = setInterval(() => {
        setCurrentCategoryIndex((prev) => (prev + 1) % categories1.length);
        //setCurrentCategoryIndex2((prev) => (prev + 1) % categories2.length);
        setAnimateKey((prev) => prev + 1); // force re-trigger animation
      }, SLIDE_DURATION);
  
      return () => clearInterval(timer1);
    
    }, []);

    // useEffect(()=>{
    //   const paymentId = localStorage.getItem("paymentId");
    //   console.log("paymentId",paymentId)
    //   const getPaymentId = async()=>{
    //     try {
    //       let data:any = await fetch(`http://localhost:8000/api/v1/user/getPaymentStatus/${paymentId}`,{
    //         method:"GET",
    //         headers:{
    //           "Content-Type": "application/json",
    //         }
    //       })
    //       data = await data.json();
    //       console.log("data",data)
    //       if(data)
    //       {
    //         console.log("data",data)
    //         setPaymentId(data.paymentId);
    //       }
    //     } catch (error) {
    //       console.log("error while fetching payments data",error);
    //     }
    //   }
    //   if(paymentId)
    //   {
    //     getPaymentId();
    //   }
  
    // },[]);

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
  
    const currentCategory1 = categories1[currentCategoryIndex];
    const currentLogos1 = logosByCategory1[currentCategory1];
    //const currentCategory2 = categories2[currentCategoryIndex2];
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
          Open for class 7 to 12
        </p>
        <a href="#register" className="absolute top-20 md:top-32  text-[#F14419] bg-[#ffffff] hover:bg-[#F14419] hover:text-white transition-all rounded-4xl py-1 px-4 sm:py-2 sm:px-6 text-[10px] md:text-[25px] z-10 font-bold cursor-pointer">
        REGISTER
      </a>
      </div>
    </div>
    <p className="text-gray-950 md:text-[25px] text-[10px]">* Students from all streams are eligible</p>
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
          } ${current === i ? "scale-110 ring-2 ring-amber-300 shadow-lg" : ""}`}
        ></button>
      ))}
    </div>
    </div>
    <div className="flex justify-center flex-col items-center w-full overflow-hidden">
  <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">
    Awards & Recognitions
  </p>

  <div className="flex justify-center flex-col items-center mt-10">
    <p className="absolute mb-36 text-[#006666] p-2 border-1 border-gray-300 rounded-full w-fit z-10 bg-[#ffffff] uppercase font-bold">{currentCategory1}</p>
    <div className="text-[#006666] p-6 border-1 border-gray-300 rounded-full">
    <div className="overflow-hidden py-4">
        <div
          key={animateKey} 
          className="flex animate-slide whitespace-nowrap"
        >
          {currentLogos1.concat(currentLogos1).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 sm:h-16 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
            />
            ))}
        </div>
      </div>
    </div>
  </div>
  {/* <div className="flex justify-start items-center p-4">
    <p className="bg-white rounded w-[200px] p-2 text-[#006666] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800">
        {currentCategory1}
      </p>
      <div className="overflow-hidden py-4">
        <div
          key={animateKey} 
          className="flex animate-slide whitespace-nowrap"
        >
          {currentLogos1.concat(currentLogos1).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 sm:h-16 w-auto sm:w-auto mx-4 sm:mx-8 shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]"
            />
            ))}
        </div>
      </div>
  </div>
  <div className="flex justify-start items-center p-4">
      <div className="overflow-hidden py-4">
        <div
          key={animateKey} 
          className="flex animate-slideOpposite whitespace-nowrap"
        >
          {currentLogos2.concat(currentLogos2).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 sm:h-16 w-auto sm:w-auto mx-4 sm:mx-8"
            />
          ))}
        </div>
      </div>
      <p className="bg-white rounded w-[200px] p-2 text-[#006666] text-center font-bold text-[10px] sm:text-[15px] md:text-[20px] uppercase leading-none animate-slide-in-right shadow-gray-800">
        {currentCategory2}
      </p>
  </div> */}
</div>

    <div>
    <div className="flex flex-col justify-center items-center" id="olympiad">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center">No-Code Skilling in Emerging Technologies</p>
        {/* <p className=" text-[#000000] my-4 text-[23px] sm:text-[38px] md:text-[48px] text-center">No-Code Skilling in Emerging Technologies</p> */}
    </div>
    <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className=" text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">1</p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">Artificial Intelligence</p>
        </div>
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">2</p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">Robotics</p>
        </div>
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">3</p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">Cybersecurity</p>
        </div>
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-3 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[21px] sm:text-[36px] md:text-[46px] px-3 md:px-5">4</p>
            <p className="text-[#000000] text-[21px] sm:text-[36px] md:text-[46px]">Data Analytics</p>
        </div>
      </div>
    </div>
    <div>
    <div className="flex flex-col justify-center items-center bg-[#006666] p-6">
    <p className="text-[#ffffff] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">Concept By:</p>
    <p className="text-[#ffffff] pt-4 text-[23px] sm:text-[38px] md:text-[48px] font-light text-center leading-8 sm:leading-12 md:leading-14">IIT, IIM, Alumni, CFA Charterholder, Gold Medalist, Emerging Technologies Consultant, ex-Professors in India & UAE</p>
    </div>
    <div className="flex flex-col items-center pt-4 justify-center space-y-0">
  <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center" id="award">
    Awards to be Won!
  </p>
    <div className="flex flex-wrap justify-center items-center gap-6 p-4">
      <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-lg">
        <img src={award1} className="w-[300px] h-[300px] p-8"></img>
        <p className="w-full p-4 bg-[#03257E] uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] rounded-b-lg">exciting prizes</p>
      </div>
      <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-lg">
        <img src={award2} className="w-[300px] h-[300px] p-8"></img>
        <p className="w-full p-4 bg-[#006666] uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] rounded-b-lg">Certificates</p>
      </div>
      <div className="flex flex-col justify-center items-center border-1 border-gray-500 rounded-lg">
        <img src={award3} className="w-[300px] h-[300px] p-8"></img>
        <p className="w-full p-4 bg-[#F14419] uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] rounded-b-lg">Medals</p>
      </div>
    </div>
    </div>
</div>

    <div className="flex flex-col justify-center items-center bg-[#006666] p-8" id="about">
    <p className="text-[#ffffff] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">About EDUBUK</p>
    <p className="text-[#ffffff] text-[23px] sm:text-[38px] md:text-[48px] font-light text-center mt-4 leading-8 sm:leading-12 md:leading-14">Our platform bridges the gap between education and employment by providing emerging tech courses, verifiable academic & professional credentials and intelligent job matching leveraging  AI and Blockchain Tech</p>
    </div>
    <div className="flex justify-center items-center gap-3">
      <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#03257E]"></span>
      <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#006666]"></span>
      <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#F14419]"></span>
    </div>
    <div className="flex flex-col justify-center items-center gap-8">
    <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">Meet Our executives</p>
    <div className=" flex justify-center items-center flex-wrap gap-8">
      <div>
        <img src={team1} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Apoorva Bajaj</p>
        <p className="text-[#000000] text-center">Chief Executive Officer (CEO)</p>
      </div>
      <div>
        <img src={team2} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Shivaani Bajaj</p>
        <p className="text-[#000000] text-center">Chief Operating Officer (COO)</p>
      </div>
      <div>
        <img src={team3} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Amit Srivastava</p>
        <p className="text-[#000000] text-center">Chief Marketing Officer (CMO)</p>
      </div>
      <div>
        <img src={team4} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Ajeet Ram Verma</p>
        <p className="text-[#000000] text-center">Lead Tech Developer</p>
      </div>
    </div>
    </div>
    <div className="flex justify-center items-center gap-3">
      <span className=" w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#03257E]"></span>
      <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#006666]"></span>
      <span className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-[#F14419]"></span>
    </div>
    <div className="flex flex-col justify-center items-center gap-8">
    <p className="text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold uppercase text-center">MEET OUR ADVISORS</p>
    <div className=" flex justify-center items-baseline flex-wrap gap-8">
      <div>
        <img src={advisor1} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Ish Anand</p>
        <p className="text-[#000000] text-center w-[250px]">Serial Entrepreneur, Advisor in Startups, Global Citizen</p>
      </div>
      <div>
        <img src={advisor2} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Dr. Narsing Rao, GS</p>
        <p className="text-[#000000] text-center w-[250px]">Former VC at ICFAI University</p>
      </div>
      <div>
        <img src={advisor3} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">Dr. Sindhu Bhaskar</p>
        <p className="text-[#000000] text-center w-[250px]">Co-Founder, EST Global, Forbes Council Member</p>
      </div>
      <div>
        <img src={advisor4} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center pt-2">James Wren</p>
        <p className="text-[#000000] text-center w-[250px]">Advisor: Blockchain & Web3</p>
      </div>
    </div>
    </div>
  <div className="flex flex-wrap items-center justify-center gap-8 p-4">
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
{
  auth.user&&<div className="bg-white shadow-md rounded-lg p-6 text-center max-w-md mx-auto mt-8">
  <h2 className="text-[#006666] text-xl font-semibold mb-4">
    Get Your Olympiad Registration Code Instantly
  </h2>
  <p className="text-gray-600 mb-6">
    Pay the participation fee to receive your unique Olympiad code and confirm your registration.
  </p>
  <button
    onClick={() => setShowPopup(true)}
    className="bg-[#006666] text-white px-6 py-2 rounded hover:bg-[#004d4d] transition duration-200"
  >
    Proceed Now
  </button>
</div>
}
{showPopup&&
  <PaymentPopup showPopup={showPopup} setShowPopup={setShowPopup}/>
}
    <div className="flex justify-center items-center flex-col gap-3 sm:gap-10">
      <div className="text-[#000] w-[400px] uppercase text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
        International <br /> Olympiad
      </div>

      <div className="bg-[#006666] p-4 w-[400px] text-white text-base md:text-xl text-center rounded-md shadow">
      Compete in the New-Age International No-Code Emerging Technologies Olympiad!
      </div>

      {/* PRICING BOX */}
      <div className="flex justify-center items-center flex-col w-[400px] bg-gray-100 border border-gray-300 shadow-md rounded-lg">
        <div className="bg-[#006666] text-white px-4 py-2 font-semibold text-lg text-center uppercase">
          Participation Fee
        </div>
        <div className="flex justify-between w-[400px]">
          <div>
          <div className="flex flex-col justify-center items-start px-4 py-2 w-full gap-2">
            <p className="text-gray-500">1. India</p>
            <p className="text-gray-500">2. UAE</p>
            <p className="text-gray-500">3. Singapore</p>
          </div>
          </div>
          <div>
          <div className="flex flex-col justify-start items-start px-4 py-2 w-full gap-2">
          <p className="font-bold text-gray-500">INR 250</p>
            <p className="font-bold text-gray-500">AED 50</p>
            <p className="font-bold text-gray-500">SGD 50</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    <img src={pricingBg} alt="image" className=" hidden xl:flex w-[360px] h-[450px] items-center"></img>
  </div>
    <Footer />
  </div>
);

}

export  default Home
