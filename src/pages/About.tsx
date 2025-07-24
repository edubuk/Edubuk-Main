import vision from '../assets/vision.png';
import mission from '../assets/mission.png';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 border-b-1 border-gray-200" id="about-us">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center" data-aos="fade-up">
          Why Edubuk
        </p>
        <p className=" text-[#03257E] text-[25px] text-center px-5 sm:px-10 md:px-20" data-aos="zoom-in">Our Platform bridges the gap between education and employment by providing emerging tech courses, veriﬁable academic & professional credentials and intelligent job matching leveraging Al and Blockchain Technology.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-baseline justify-center">
          <div className="flex flex-col w-full justify-center items-center p-8 gap-4">
            <img src={vision} className="w-fit h-20" data-aos="zoom-in"></img>
            <p className="text-2xl text-justify text-[#03257e] font-bold" data-aos="fade-up">VISION</p>
            <p className="text-black text-2xl text-center sm:text-justify" data-aos="zoom-in">To be the world’s leading  Skill-Tech + HR-Tech + Ed-Fin-Tech platform for no-code AI & Emerging Technologies Skilling & Assessment, verifiable education and bridging the gap with employment, where every skill and credential is trusted & future-proof, every career path is guided by science, and every opportunity is earned, owned, and verified on the Blockchain.</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full p-8 gap-4">
            <img src={mission} className="w-fit h-20" data-aos="zoom-in"></img>
            <p className="text-2xl text-justify text-[#03257e] font-bold" data-aos="fade-up">MISSION</p>
            <p className="text-black text-2xl text-center sm:text-justify" data-aos="zoom-in">To empower every learner, educator, and employer with trusted, AI and blockchain-powered solutions that bridge the gap between education, skills, and employment. Through innovative tools like TruCV, eSeal, CETA Program, and MIIT Screening, we strive to make learning verifiable, skilling accessible, and hiring transparent globally.</p>
          </div>
          <div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10" id="olympiad">
        <p className=" text-[#03257E] text-[25px] sm:text-[40px] md:text-[50px] font-bold text-center" data-aos="fade-up">
          Edubuk in Action<br></br>
          <span className="text-[20px] sm:text-[30px] md:text-[40px] font-semibold">Our Journey & Global Achievements</span>
        </p>
        {/* <p className=" text-[#000000] my-4 text-[23px] sm:text-[38px] md:text-[48px] text-center">No-Code Skilling in Emerging Technologies</p> */}
      </div>
      <div className="flex justify-center items-center gap-4 p-4 w-full" data-aos="zoom-in">
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
      </div>
  )
}

export default About
