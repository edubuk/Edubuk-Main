import { useLocation} from "react-router-dom";
import logo from "../assets/edubuklogo.png";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

interface NavLink {
  name: string;
  path: string;
}
const Navbar = ()=> {
  
  const location = useLocation();
  const [isOpen, setOpen] = useState<boolean>(false);
  
  const links: NavLink[] = [
    { name: "Home", path: "/home" },
    { name: "Edubuk Products", path: "#edubuk-products" },
    { name: "About Us", path: "#about-us" },
  ];



  return (
    <div className="flex justify-between items-center py-1 px-4 border-b border-gray-200">
      <img src={logo} className="w-fit h-28"></img>
      
      <div className="flex justify-center items-center">
        <div className="hidden md:flex p-2 gap-6 justify-center items-center">
        {links.map((link, i) => (
        <a
            key={i}
            href={link.path}
            className={`${
              location.hash === link.path
                ? "text-[#F14419]"
                : "text-[#03257e]"
            } 
            ${
              location.hash === link.path
                ? "text-[#F14419]"
                : "text-[#03257e]"
            }
            text-[20px] font-medium`}
          >
            {link.name}
          </a>
        ))}
        </div>
        <div
            className={`relative flex lg:hidden flex-col items-center justify-center w-8 h-8 cursor-pointer space-y-1.5 transition-all duration-300 ease-in-out ${
              isOpen ? "open" : ""
            }`}
            onClick={()=>setOpen(true)}
          >
            <span
              className={`block w-8 h-1 bg-[#03257e] rounded transition duration-300 ease-in-out ${
                isOpen ? "transform translate-y-3 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-[#f14419] rounded transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-[#006666] rounded transition duration-300 ease-in-out ${
                isOpen ? "transform -translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </div>
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
    </div>
  )}
    </div>
  );
};

export default Navbar;
