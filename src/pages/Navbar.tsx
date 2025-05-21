import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/edubuklogo.png";
import olymLogo from "../assets/olympiadLogo.png";
import { RxCross2 } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import InfoRow from "./InfoRow";
import { useAuth } from "../context/auth";
interface NavLink {
  name: string;
  path: string;
}
const Navbar = ()=> {
  
  const location = useLocation();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [openPopup,setOpenPopup]= useState<boolean>(false);
  const navigate = useNavigate();
  const [auth,setAuth]= useAuth();
  //console.log("Path", location);
  
  const links: NavLink[] = [
    { name: "Home", path: "/home" },
    { name: "Olympiad", path: "#olympiad" },
    { name: "Awards", path: "#award" },
  ];

  const handleLogout = ()=>{
    localStorage.removeItem("auth");
    setOpenPopup(false);
    setAuth({user:null,token:""})
    navigate("/login")
  }

  return (
    <div className="flex justify-between items-center p-4">
      <img src={logo} className="w-32 h-32 md:w-38 md:h-38"></img>
      <div className="flex justify-center items-center gap-1 w-full sm:hidden cursor-pointer" onClick={() => setOpen(true)}>
      <div className="flex justify-center flex-col items-center gap-1">
      <span className=" w-4 h-4 rounded-full bg-[#03257E]"></span>
      <span className="w-4 h-4 rounded-full bg-[#006666]"></span>
      <span className="w-4 h-4 rounded-full bg-[#F14419]"></span>
    </div>
    </div>
      {/* <RxHamburgerMenu
    className="flex md:hidden w-10 h-10 text-[#006666]"
    onClick={() => setOpen(true)}
  /> */}
      <div className="flex justify-center items-center">
        <div className="hidden md:flex p-2 gap-6">
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
          className="bg-[#F14419] py-[8px] px-3 text-[#ffffff] rounded-full cursor-pointer"
        >
          About Edubuk
        </a>
        {
        auth.user?<CgProfile className="text-[#006666] w-8 h-8 md:w-10 md:h-10" onClick={()=>setOpenPopup(!openPopup)}/>:
                <Link to="/login" className="text-black border-1 border-gray-300 rounded-full py-[8px] px-3 font-bold hover:bg-gray-200">Login</Link>
        }
        </div>
      {
        auth.user&&<CgProfile className="flex sm:hidden text-[#006666] w-8 h-8 md:w-10 md:h-10" onClick={()=>setOpenPopup(!openPopup)}/>
        }      {openPopup&&
      <div className="w-[300px] sm:w-[350px] absolute right-2 top-32 p-4 flex flex-col justify-center items-start z-20 bg-white border border-gray-200 rounded shadow-md gap-3">
  <InfoRow label="Name" value={auth.user.name} />
  <InfoRow label="Class" value={auth.user.stuClass} />
  <InfoRow label="School/College" value={auth.user.college} sliceLength={15} />
  <InfoRow label="Email" value={auth.user.email} sliceLength={15} />
  <button onClick={handleLogout} className="flex justify-center items-center text-[#006666] p-2 border-1 border-gray-200 rounded cursor-pointer">Logout <MdLogout className="ml-1"/></button>
</div>
     }
</div>
{isOpen && (
    <div className="fixed inset-0 flex flex-col justify-start items-center gap-4 z-20 bg-white p-6 h-fit fade-in-down transition-all duration-300 ease-in-out">
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
            location.hash === link.path ? "text-[#F14419]" : "text-[#006666]"
          } text-[20px] font-medium`}
          onClick={()=>setOpen(false)}
        >
          {link.name}
        </a>

      ))}
      {!auth.user&&<Link to="/login" onClick={()=>setOpen(false)} className="text-[#006666] border-1 border-gray-300 rounded-full py-[10px] px-6 sm:px-3 font-bold hover:bg-gray-200">Login</Link>}

    </div>
  )}
      <img src={olymLogo} className=" w-32 h-32 md:w-38 md:h-38"></img>


    </div>
  );
};

export default Navbar;
