import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";
function Navbar() {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("bg-black");
      } else {
        navRef.current.classList.remove("bg-black");
      }
    });
  }, []);
  return (
    <div
      ref={navRef}
      className="flex justify-between items-center px-3 lg:px-10 py-4 fixed left-0 right-0 top-0 z-50"
    >
      <div className="flex gap-10">
        <img className="w-15 h-8" src={logo} alt="" srcset="" />
        <ul className="lg:flex hidden gap-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Brows by Language</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-4">
        <img className="cursor-pointer" src={searchIcon} alt="" />
        <p className="cursor-pointer">Children</p>
        <img className="cursor-pointer" src={bellIcon} alt="" />
        <div className="flex justify-center items-center gap-2 relative group">
          <img className="rounded-md cursor-pointer" src={profileImg} alt="" />
          <img className="cursor-pointer" src={caretIcon} alt="" />
          <div className="absolute hidden group-hover:block top-[100%] right-0 w-fit bg-gray-700 px-5 py-2">
            <p
            onClick={()=>{
                logout()
            }}
            className="cursor-pointer whitespace-nowrap underline font-medium text-[17px]">
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
