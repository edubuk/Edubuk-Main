import { useLocation } from "react-router-dom";
import logo from "../assets/edubuklogo.png";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { useState } from "react";
interface NavLink {
  name: string;
  path: string;
}
const Navbar = ()=> {
  const location = useLocation();
  const [isOpen, setOpen] = useState<boolean>(false);
  console.log("Path", location);
  const links: NavLink[] = [
    { name: "Home", path: "/home" },
    { name: "Olympiad", path: "#olympiad" },
    { name: "Awards", path: "#award" },
  ];
  return (
    <div className="flex justify-between items-center p-4">
      <img src={logo} className="w-24 h-24"></img>
      <div className="hidden sm:flex justify-center items-center p-2 gap-6">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`${
              location.hash === link.path
                ? "text-[#F14419]"
                : "text-[#000000]"
            } text-[20px] font-medium`}
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
      </div>
      <div className="relative sm:hidden flex justify-center items-center">
  <RxHamburgerMenu
    className="w-8 h-8 text-[#006666]"
    onClick={() => setOpen(true)}
  />
  
  {isOpen && (
    <div className="fixed inset-0 flex flex-col justify-start items-center gap-4 z-20 bg-white p-6 h-[200px] animate-slide-down transition-all duration-300 ease-in-out">
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
    </div>
  )}
</div>

    </div>
  );
};

export default Navbar;
