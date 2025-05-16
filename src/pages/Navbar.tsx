import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/edubuklogo.png";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import InfoRow from "./InfoRow";
interface NavLink {
  name: string;
  path: string;
}
const Navbar = ()=> {
  
  const location = useLocation();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [userName,setUserName] = useState<string>();
  const [userEmail,setUserEmail] = useState<string>();
  const [userClass,setUserClass] = useState<string>();
  const [userCollege,setUserCollege] = useState<string>();
  const [openPopup,setOpenPopup]= useState<boolean>(false);
  const navigate = useNavigate();
  //console.log("Path", location);
  
  const links: NavLink[] = [
    { name: "Home", path: "/home" },
    { name: "Olympiad", path: "#olympiad" },
    { name: "Awards", path: "#award" },
  ];


  useEffect(()=>{
    const user:any = localStorage.getItem("auth");
    if(user)
    {
    const parsedData = JSON.parse(user);
    console.log("user",parsedData);
    setUserName(parsedData.name);
    setUserEmail(parsedData.email);
    setUserCollege(parsedData.college);
    setUserClass(parsedData.stuClass);
    }
  },[localStorage.getItem("auth")])

  const handleLogout = ()=>{
    localStorage.removeItem("auth");
    setUserName("");
    setUserEmail("");
    setUserCollege("");
    setUserClass("");
    setOpenPopup(false);
    navigate("/login")
  }

  return (
    <div className="flex justify-between items-center p-4">
      <img src={logo} className="w-32 h-32 md:w-38 md:h-38"></img>
      <div className="hidden sm:flex justify-center items-center p-2 gap-6">
        {links.map((link, i) => (
        <a
            key={i}
            href={link.path}
            className={`${
              location.hash === link.path
                ? "text-[#F14419]"
                : "text-[#000000]"
            } 
            ${
              location.pathname === link.path
                ? "text-[#F14419]"
                : "text-[#000000]"
            }
            text-[20px] font-medium`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#about"
          className="bg-[#F14419] py-[14px] px-3 text-[#ffffff] rounded-[8px]"
        >
          About Edubuk
        </a>
        {
        userName?<CgProfile className="text-[#006666] w-8 h-8 md:w-10 md:h-10" onClick={()=>setOpenPopup(!openPopup)}/>:
        <Link to="/login" className="text-black border-1 border-gray-200 rounded py-[14px] px-3 font-bold hover:bg-gray-200">Login</Link>
        }
      </div>
      {openPopup&&
      <div className="w-[300px] sm:w-[350px] absolute right-2 top-32 p-4 flex flex-col justify-center items-start z-20 bg-white border border-gray-200 rounded shadow-md gap-3">
  <InfoRow label="Name" value={userName} />
  <InfoRow label="Class" value={userClass} />
  <InfoRow label="School/College" value={userCollege} sliceLength={15} />
  <InfoRow label="Email" value={userEmail} sliceLength={15} />
  <button onClick={handleLogout} className="flex justify-center items-center text-[#006666] p-2 border-1 border-gray-200 rounded cursor-pointer">Logout <MdLogout className="ml-1"/></button>
</div>
     }
      <div className="relative sm:hidden flex justify-center items-center">
  <RxHamburgerMenu
    className="w-10 h-10 text-[#006666]"
    onClick={() => setOpen(true)}
  />
  {
        userName&&<CgProfile className="text-[#006666] w-8 h-8 md:w-10 md:h-10" onClick={()=>setOpenPopup(!openPopup)}/>
        }
  {isOpen && (
    <div className="fixed inset-0 flex flex-col justify-start items-center gap-4 z-20 bg-white p-6 h-fit animate-slide-down transition-all duration-300 ease-in-out">
    <div className="w-full flex justify-end">
        <RxCross2
          className="w-6 h-6 text-gray-700 cursor-pointer"
          onClick={() => setOpen(false)}
        />
    </div>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.path}
          className={`${
            location.hash === link.path ? "text-[#F14419]" : "text-[#000000]"
          } text-[20px] font-medium`}
          onClick={()=>setOpen(false)}
        >
          {link.name}
        </a>

      ))}
      {!userName&&<Link to="/login" className="text-black border-1 border-gray-200 rounded py-[14px] px-3 font-bold hover:bg-gray-200">Login</Link>}

    </div>
  )}
</div>

    </div>
  );
};

export default Navbar;
