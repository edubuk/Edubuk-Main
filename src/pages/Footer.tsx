import laptopImg from "../assets/laptop.png";
import logo from "../assets/edubuklogo.png";
import social1 from '../assets/Social/social1.png'
import social2 from '../assets/Social/social2.png'
import social3 from '../assets/Social/social3.png'
import social4 from '../assets/Social/social4.png'
import social5 from '../assets/Social/social5.png'
import social6 from '../assets/Social/social6.png'
const Footer = () => {
  return (
    <div className="flex flex-col bg-white px-8 pt-8 gap-6 border-b-8 border-[#006666]">
      <div className="flex relative">
        <div className="flex flex-col gap-12">
          <div className="flex justify-start items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#03257E]"></span>
            <span className="w-8 h-8 rounded-full bg-[#006666]"></span>
            <span className="w-8 h-8 rounded-full bg-[#F14419]"></span>
          </div>
          <p className="text-[#03257E] md:text-[45px] text-[30px] uppercase font-semibold leading-none">
            our services and <br></br>achievements
          </p>
        </div>
        <img
          src={laptopImg}
          alt="laptop-img"
          className="absolute sm:flex md:w-[517px] md:h-[334px] w-[300px] h-[200px] -top-26 md:-top-30 right-8 hidden"
        ></img>
      </div>
      <div className="flex  flex-wrap justify-between items-center gap-8 border-b-2 border-gray-500">
        <img src={logo} alt="logo" className="md:w-[300px] md:h-[300px] w-[250px] h-[250px]"></img>
        <div className="flex flex-col justify-center gap-4 md:border-l-1 md:border-gray-300 pl-16">
          <ul className="text-[#000000] list-disc">
            <li>Learner's Profile on Blockchain</li>
            <li>Our Collaborators</li>
            <li>UN SDG's Compliance</li>
            <li>About Us</li>
          </ul>
          <ul className="text-[#000000] list-disc">
            <li>Accelerator Programs</li>
            <li>Awards & Recognitions</li>
            <li>Meet Our Co-Founders</li>
            <li>Know more about CETA Program</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-4 md:border-l-1 md:border-gray-300 pl-16">
          <ul className="text-[#000000] list-disc space-y-1">
            <li>Visit us at: www.edubuk.io</li>
            <li>Reach us at: support@edubuk.com</li>
            <li>Verify Certificates</li>
            <li>Request Credential</li>
          </ul>

          <ul className="text-[#000000] list-disc space-y-1">
            <li className="list-none -ml-6 font-semibold">Our Offices:</li>
            <li>Hyderabad, India</li>
            <li>Lucknow, India</li>
            <li>Dubai, UAE</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center align-middle pb-6 flex-wrap-reverse">
        <p className="text-[#000000]">© 2025 Edubukeseal.org | All rights reserved</p>
        <div className="flex justify-center items-center gap-2">
            <p className="text-[#000000] font-semibold">Follow us on:</p>
            <a href="https://t.me/edubukofficial" target="_blank" rel="no-refferer"><img src={social1} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.facebook.com/edubuk.trst/" target="_blank" rel="no-refferer"><img src={social2} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.instagram.com/edubuk_/" target="_blank" rel="no-refferer"><img src={social3} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.linkedin.com/company/edubuk-ai-web3/" target="_blank" rel="no-refferer"><img src={social4} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://x.com/edubuktrust" target="_blank" rel="no-refferer"><img src={social5} alt="social logo" className="w-5 h-5" ></img></a>
            <a href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos" target="_blank" rel="no-refferer"><img src={social6} alt="social logo" className="w-5 h-5" ></img></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
