import React, { useState, useRef, useEffect, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  //   const notifRef = useRef();
  //   const profileRef = useRef();

  // Close dropdowns when clicking outside of them
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       if (notifRef.current && !notifRef.current.contains(event.target)) {
  //         setShowNotifDropdown(false);
  //       }
  //       if (profileRef.current && !profileRef.current.contains(event.target)) {
  //         setShowProfileDropdown(false);
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [notifRef, profileRef]);

  // Handle scroll
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const navbarClasses = `bg-white w-full absolute top-0 z-50 ${scrolling ? "bg-black shadow-sm sticky top-0" : ""}`;

  // Fungsi untuk memeriksa apakah link sesuai dengan path URL saat ini
  const isLinkActive = (path) => (path === "/" ? location.pathname === path : location.pathname.startsWith(path));

  return (
    <header className={navbarClasses}>
      <nav className=" text-black px-2 sm:py-6 py-2 h-full flex justify-between items-center">
        <div className="logo  ml-5 flex items-center py-3  ">
          <Link to="/" className="w-40 sm:w-64 flex justify-center items-center gap-2">
            {/* <img src="" className="w-40 sm:w-64" alt="logo" /> */}
            <div className="w-10 h-10 bg-[#D9D9D9]"></div>
            <span className="text-subtitle font-bold">BangSampah</span>
          </Link>
        </div>
        <div className="nav-kiri lg:w-[750px] sm:w-[700px] hidden font-semibold text-smsubtitle lg:ml-16 sm:ml-4  min-[890px]:flex justify-start items-center">
          <Link to="/" className={`ml-4 ${isLinkActive("/") ? "text-greenuin" : ""}`}>
            Beranda
          </Link>
          <Link to="/layanan" className={`ml-4 ${isLinkActive("/layanan") ? "text-greenuin" : ""}`}>
            Layanan
          </Link>
          <Link to="/dashboard" className={`ml-4 ${isLinkActive("/dashboard") ? "text-greenuin" : ""}`}>
            Dashboard
          </Link>
          <Link to="/about" className={`ml-4 ${isLinkActive("/about") ? "text-greenuin" : ""}`}>
            Tentang Kami
          </Link>
        </div>

        <div className="auth  font-semibold text-smsubtitle sm:w-[450px] hidden min-[890px]:block">
          {currentUser ? (
            <div onClick={handleLogout} className="hover:brightness-90 hover:border duration-150 w-[95px] h-[51px] px-6 py-4 bg-green-700 rounded-[30px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
              <div className="text-white text-base font-semibold  ">Logout</div>
            </div>
          ) : (
            <>
              <Link to="/masuk" className="ml-4">
                <div className=" hover:brightness-90 duration-150 w-[95px] h-[51px] px-6 py-4 rounded-[30px] border border-green-700 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-800 text-base font-semibold ">Masuk</div>
                </div>
              </Link>
              <Link to="/daftar" className="ml-4">
                <div className="hover:brightness-90 hover:border duration-150 w-[95px] h-[51px] px-6 py-4 bg-green-700 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base font-semibold  ">Daftar</div>
                </div>
              </Link>
            </>
          )}
        </div>
        <div className="hamburger">
          <GiHamburgerMenu
            className="w-6 h-6 ml-3 mr-3 min-[890px]:hidden"
            onClick={() => {
              setShowMobileNav(!showMobileNav);
            }}
          />
        </div>
      </nav>
      {/* Mobile Nav */}
      <div className={`bg-white shadow-sm pb-8 fixed top-0 inset-x-0 h-auto z-50 transform ${showMobileNav ? "translate-y-0" : "-translate-y-[109%]"} transition-transform duration-300 ease-in-out min-[890px]:hidden`}>
        {/* Close icon or back button could be placed here */}
        <AiOutlineClose className="text-black mt-5 w-5 h-5 absolute right-3" onClick={() => setShowMobileNav(false)} />
        <div className="overflow-hidden nav-kiri mt-20 text-subtitle flex flex-col items-center p-4">
          <div className="auth mb-8 font-semibold text-smsubtitle">
            {currentUser ? (
              <div onClick={handleLogout} className="hover:brightness-90 hover:border duration-150 w-[95px] h-[51px] px-6 py-4 bg-green-700 rounded-[30px] justify-center items-center gap-2.5 inline-flex cursor-pointer">
                <div className="text-white text-base font-semibold  ">Logout</div>
              </div>
            ) : (
              <>
                <Link to="/masuk" className="ml-4">
                  <div className=" hover:brightness-90 duration-150 w-[95px] h-[51px] px-6 py-4 rounded-[30px] border border-green-700 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-800 text-base font-semibold ">Masuk</div>
                  </div>
                </Link>
                <Link to="/daftar" className="ml-4">
                  <div className="hover:brightness-90 hover:border duration-150 w-[95px] h-[51px] px-6 py-4 bg-green-700 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-base font-semibold  ">Daftar</div>
                  </div>
                </Link>
              </>
            )}
          </div>
          <Link to="/" className="text-black mb-4 duration-100 hover:brightness-90">
            Beranda
          </Link>
          <Link to="/layanan" className="text-black mb-4 duration-100 hover:brightness-90">
            Layanan
          </Link>
          <Link to="/dashboard" className="text-black mb-4 duration-100 hover:brightness-90">
            Dashboard
          </Link>
          <Link to="/about" className="text-black mb-4 duration-100 hover:brightness-90">
            Tentang Kami
          </Link>
        </div>
      </div>
    </header>
  );
};
