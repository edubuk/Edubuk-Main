import { useState, useEffect, ChangeEvent } from "react";
import hero1 from '../assets/HeroImg/hero11.jpg';
import hero2 from '../assets/HeroImg/hero2.png';
import hero3 from '../assets/HeroImg/hero3.jpg';
//import hero3 from '../assets/HeroImg/tempImg.jpeg';
import award1 from '../assets/AwardImg/award1.png';
import award2 from '../assets/AwardImg/award2.png';
import award3 from '../assets/AwardImg/award3.png';
import arrow from '../assets/AwardImg/arrow.png';
import team1 from '../assets/Team/team1.png';
import team2 from '../assets/Team/team2.png';
import team3 from '../assets/Team/team3.png';
import team4 from '../assets/Team/team4.png';
import advisor1 from '../assets/Advisor/advisor1.png';
import advisor2 from '../assets/Advisor/advisor2.png';
import advisor3 from '../assets/Advisor/advisor3.png';
import advisor4 from '../assets/Advisor/advisor4.png';
import pricingBg from '../assets/pricingBg.png';
import Footer from "./Footer";
import toast from "react-hot-toast";


interface formValue{
  name:string,
  college:string,
  phoneNumber:string,
  email:string
}

const images = [hero1,hero2,hero3];

const Home = ()=>{

    const [current, setCurrent] = useState(0);
    const [formData,setFormData] = useState<formValue>({
      name:"",
      college:"",
      phoneNumber:"",
      email:""
    })

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
      const {name,value}=e.target;
      setFormData((prevData)=>({...prevData,[name]:value})) ;
    }

    const regHandler = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
        const data:any = await fetch('http://localhost:8000/api/v1/user/registration',{
          method:"POST",
          body:JSON.stringify({name:formData.name,college:formData.college,phoneNumber:formData.phoneNumber,email:formData.email}),
          headers:{
            "Content-Type": "application/json",
          }
        })

        const res = await data.json();
        console.log("res",res);
        if(res.success)
        {
          setFormData({
            name: "",
            college: "",
            phoneNumber: "",
            email: ""
          });
          return toast.success(res.message);
        }
        if(!res.success)
        {
          toast.error(res.message);
        }
      } catch (error) {
        console.log("error while user registration",error);
        toast.error("something went wrong !");
      }
    }

    // Auto-slide every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
  <div className=" flex flex-col gap-12">
    <div className="flex flex-col p-4">
    <p className="font- text-[#F14419] uppercase text-[30px] sm:text-[40px] md:text-[50px] font-bold">
      International Olympiad
    </p>
    <p className="font-sans text-[#03257E] uppercase text-[30px] sm:text-[40px] md:text-[50px] font-bold">
      AI & Emerging Technologies (No Code)
    </p>

    <div
  className="mx-auto relative w-full aspect-[16/9] lg:aspect-[16/7] rounded-[8px] bg-cover bg-center"
  style={{ backgroundImage: `url(${images[current]})` }}
>
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/20 rounded-[8px]"></div>

      {/* Text content on image */}
      <div className="absolute top-[15px] md:top-[25px] left-[47px] z-10 flex flex-col w-fit">
        <p className="bg-[#F14419] text-white md:text-[25px] text-[10px] p-2">
          India | Singapore | Dubai
        </p>
        <p className="bg-[#006666] text-white md:text-[25px] text-[10px] p-2">
          Open for class 7 to 12
        </p>
        <a href="#register" className="absolute left-34 top-26 md:top-32 text-[#F14419] bg-[#ffffff] hover:bg-[#F14419] hover:text-white transition-all rounded-4xl py-1 px-4 sm:py-2 sm:px-6 text-[15px] md:text-[20px] z-10 font-bold cursor-pointer">
        REGISTER
      </a>
      </div>
    </div>
    <p className="text-gray-950">* Students from all streams are eligible</p>
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
    <div className="flex flex-col justify-center items-center" id="olympiad">
        <p className=" text-[#03257E] text-[40px] md:text-[60px] font-bold text-center">OLYMPIAD</p>
        <p className=" text-[#000000] my-6 text-[37px] md:text-[50px] text-center">Acquire Fundamental Knowledge</p>
    </div>
    <div className="flex justify-center items-center flex-wrap gap-4 ">
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-2 w-[300px] md:w-[521px]">
            <p className=" text-[#ffffff] bg-[#03257E] rounded-full text-[30px] md:text-[38px] px-4 md:px-5">1</p>
            <p className="text-[#000000] text-[30px] md:text-[38px]">Artificial Intelligence</p>
        </div>
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-2 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[30px] md:text-[38px] px-4 md:px-5">2</p>
            <p className="text-[#000000] text-[30px] md:text-[38px]">Robotics</p>
        </div>
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-2 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[30px] md:text-[38px] px-4 md:px-5">3</p>
            <p className="text-[#000000] text-[30px] md:text-[38px]">Cybersecurity</p>
        </div>
        <div className="flex justify-start items-center border rounded-full border-[#E6E6E6] gap-2 w-[300px] md:w-[521px]">
            <p className="text-[#ffffff] bg-[#03257E] rounded-full text-[30px] md:text-[38px] px-4 md:px-5">4</p>
            <p className="text-[#000000] text-[30px] md:text-[38px]">Data Analytics</p>
        </div>
    </div>
    <div className="flex flex-col justify-center items-center bg-[#006666] p-4">
    <p className="text-[#ffffff] md:text-[50px] text-[35px] font-bold uppercase text-center">Concept By:</p>
    <p className="text-[#ffffff] md:text-[45px] text-[30px] font-light text-center leading-none p-8">IIT, IIM, Alumni,CFA Charterholder,Gold Medalist, Emerging Technologies Consultant,ex-Professors in India & UAE</p>
    </div>
    <div className="flex flex-col items-center justify-center px-4 py-10 space-y-10">
  <p className="text-[#03257E] text-3xl sm:text-4xl md:text-5xl lg:text-[65px] font-bold uppercase text-center" id="award">
    Awards to be Won!
  </p>

  {/* 1. Exciting Prizes */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
    <img src={award1} alt="Prizes" className="w-28 sm:w-36 md:w-44 h-auto" />
    <div className="flex items-center gap-4">
      <img src={arrow} alt="Arrow" className="w-24 sm:w-32 md:w-36 rotate-90 scale-y-[-1] md:rotate-0 " />
      <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
        Exciting Prizes
      </p>
    </div>
  </div>

  {/* 2. Certificates */}
  <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 w-full max-w-6xl">
    <img src={award2} alt="Certificates" className="w-28 sm:w-36 md:w-44 h-auto" />
    <div className="flex items-center gap-4">
      <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-right">
        Certificates
      </p>
      <img src={arrow} alt="Arrow" className="w-24 sm:w-32 md:w-36 scale-y-[1] md:scale-y-[-1] rotate-90  md:rotate-180" />
    </div>
  </div>

  {/* 3. Medals */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl">
    <img src={award3} alt="Medals" className="w-28 sm:w-36 md:w-44 h-auto" />
    <div className="flex items-center gap-4">
      <img src={arrow} alt="Arrow" className="w-24 sm:w-32 md:w-36 rotate-90 md:rotate-0 scale-y-[-1]" />
      <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left">
        Medals
      </p>
    </div>
  </div>
</div>



    <div className="flex flex-col justify-center items-center bg-[#006666] p-8" id="about">
    <p className="text-[#ffffff] md:text-[50px] text-[35px] font-bold uppercase text-center">About EDUBUK</p>
    <p className="text-[#ffffff] md:text-[45px] text-[30px] font-light text-center leading-none p-6">Our platform bridges the gap between education and employment by providing emerging tech courses, verifiable academic & professional credentials and intelligent job matching leveraging  AI and Blockchain Tech</p>
    </div>
    <div className="flex justify-center items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-[#03257E]"></span>
      <span className="w-8 h-8 rounded-full bg-[#006666]"></span>
      <span className="w-8 h-8 rounded-full bg-[#F14419]"></span>
    </div>
    <div className="flex flex-col justify-center items-center p-8 gap-8">
    <p className="text-[#03257E] text-[50px] font-semibold uppercase text-center">Meet Our executives</p>
    <div className=" flex justify-center items-center flex-wrap gap-8">
      <div>
        <img src={team1} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Apoorva Bajaj</p>
        <p className="text-[#000000] text-center">Chief Executive Officer (CEO)</p>
      </div>
      <div>
        <img src={team2} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Shivaani Bajaj</p>
        <p className="text-[#000000] text-center">Chief Operating Officer (COO)</p>
      </div>
      <div>
        <img src={team3} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Amit Srivastava</p>
        <p className="text-[#000000] text-center">Chief Marketing Officer (CMO)</p>
      </div>
      <div>
        <img src={team4} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Ajeet Ram Verma</p>
        <p className="text-[#000000] text-center">Lead Tech Developer</p>
      </div>
    </div>
    </div>
    <div className="flex justify-center items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-[#03257E]"></span>
      <span className="w-8 h-8 rounded-full bg-[#006666]"></span>
      <span className="w-8 h-8 rounded-full bg-[#F14419]"></span>
    </div>
    <div className="flex flex-col justify-center items-center p-8 gap-8">
    <p className="text-[#03257E] text-[50px] font-semibold uppercase text-center">MEET OUR ADVISORS</p>
    <div className=" flex justify-center items-baseline flex-wrap gap-8">
      <div>
        <img src={advisor1} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Ish Anand</p>
        <p className="text-[#000000] text-center w-[250px]">Serial Entrepreneur, Advisor in Startups, Global Citizen</p>
      </div>
      <div>
        <img src={advisor2} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Dr. Narsing Rao, GS</p>
        <p className="text-[#000000] text-center w-[250px]">Former VC at ICFAI University</p>
      </div>
      <div>
        <img src={advisor3} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">Dr. Sindhu Bhaskar</p>
        <p className="text-[#000000] text-center w-[250px]">Co-Founder, EST Global, Forbes Council Member</p>
      </div>
      <div>
        <img src={advisor4} alt="CEO Img" className="w-[250px] h-[250px]"></img>
        <p className="text-[#000000] font-semibold text-center">James Wren</p>
        <p className="text-[#000000] text-center w-[250px]">Advisor: Blockchain & Web3</p>
      </div>
    </div>
    </div>
    <div
  className="relative w-full bg-cover bg-center py-10 px-4"
  style={{ backgroundImage: `url(${pricingBg})` }}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center lg:items-start justify-center gap-10">

    {/* RIGHT SECTION: Text and Pricing */}
    <div className="flex justify-center items-center flex-col flex-1 space-y-6 md:mr-[30%]">
      <div className="text-[#000] uppercase text-2xl md:text-4xl lg:text-5xl font-semibold text-center lg:text-right">
        International <br /> Olympiad
      </div>

      <div className="bg-[#006666] p-6 text-white text-base md:text-xl text-center lg:text-right rounded-md shadow">
        Be a part of the new tech Olympiad <br />
        for the next generation!
      </div>

      {/* PRICING BOX */}
      <div className="flex justify-center items-center bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden max-w-sm w-full ml-auto">
        <div className="bg-[#03257E] text-white px-4 py-2 font-semibold text-lg text-center uppercase">
          Participation Fee
        </div>
        <div className="divide-y divide-gray-200 text-[#006666]">
          <div className="flex justify-between px-4 py-2">
            <span>For India</span>
            <span className="font-bold ml-1">INR 250</span>
          </div>
          <div className="flex justify-between px-4 py-2">
            <span>For UAE</span>
            <span className="font-bold ml-1">AED 50</span>
          </div>
          <div className="flex justify-between px-4 py-2">
            <span>For Singapore</span>
            <span className="font-bold ml-1">SGD 50</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* LEFT SECTION: Form */}
    <form 
    onSubmit={regHandler}
    className="bg-white w-full md:w-[300px] lg:w-[400px] xl:w-[440px] p-6 md:p-8 rounded-lg shadow-md space-y-4 z-20" id="register">
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
          required
          name="college"
          placeholder="School/College Name"
          value={formData.college}
          onChange={onChangeHandler}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e1e1e]">Phone Number*</label>
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={onChangeHandler}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#1e1e1e]">Email Address*</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={onChangeHandler}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#006666]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#2c2c2c] text-white py-2 rounded-md hover:bg-[#1e1e1e] transition"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    <Footer />
  </div>
);

}

export  default Home
