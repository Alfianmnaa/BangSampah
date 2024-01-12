// import React, { useContext, useEffect, useState } from "react";
// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import { Navbar } from "./components/Navbar";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { AuthContext } from "./context/AuthContext";
// import Layanan from "./pages/Layanan";
// import Jual from "./pages/Jual";
// import { FaArrowUp } from "react-icons/fa6";
// import Footer from "./pages/Footer";
// import Dashboard from "./pages/Dashboard";

// export default function App() {
//   const { currentUser } = useContext(AuthContext);
//   const [scrollVisible, setScrollVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 580) {
//         setScrollVisible(true);
//       } else {
//         setScrollVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const RequireAuth = ({ children }) => {
//     return currentUser ? children : <Navigate to="/masuk" />;
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="masuk" element={<Login />} />
//           <Route path="daftar" element={<Register />} />
//           <Route path="layanan" element={<Layanan />} />
//           <Route path="jual-sampah" element={<Jual />} />
//           <Route
//             path="dashboard"
//             element={
//               <RequireAuth>
//                 <Dashboard />
//               </RequireAuth>
//             }
//           />
//           <Route
//             path="about"
//             element={
//               <RequireAuth>
//                 <Home />
//               </RequireAuth>
//             }
//           />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//       <a
//         href="#header"
//         id="scroll-up"
//         onClick={scrollToTop}
//         style={{
//           position: "fixed",
//           bottom: "80px",
//           right: "30px",
//           zIndex: "9999",
//           display: scrollVisible ? "flex" : "none",
//           backgroundColor: "#318335",
//           color: "#fff",
//           borderRadius: "50%",
//           textAlign: "center",
//           lineHeight: "40px",
//           cursor: "pointer",
//         }}
//         className="scrollup w-12 h-12 justify-center items-center "
//       >
//         <FaArrowUp className="scrollup__icon text-2xl " />
//       </a>
//     </>
//   );
// }
import React, { useContext, useEffect, useRef } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContext } from "./context/AuthContext";
import Layanan from "./pages/Layanan";
import Jual from "./pages/Jual";
import { FaArrowUp } from "react-icons/fa6";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";
import Beli from "./pages/Beli";
import Tentang from "./pages/Tentang";
import Detail from "./pages/Detail";

export default function App() {
  const { currentUser } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        if (window.scrollY > 580) {
          scrollRef.current.style.display = "flex";
        } else {
          scrollRef.current.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/masuk" />;
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="masuk" element={<Login />} />
          <Route path="daftar" element={<Register />} />
          <Route path="layanan" element={<Layanan />} />
          <Route
            path="jual-sampah"
            element={
              <RequireAuth>
                <Jual />
              </RequireAuth>
            }
          />
          <Route path="beli-sampah" element={<Beli />} />
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="detail/:id"
            element={
              <RequireAuth>
                <Detail />
              </RequireAuth>
            }
          />
          <Route path="about" element={<Tentang />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <a
        href="#header"
        id="scroll-up"
        onClick={scrollToTop}
        ref={scrollRef}
        className="scrollup w-12 h-12 justify-center items-center"
        style={{
          position: "fixed",
          bottom: "80px",
          right: "30px",
          zIndex: "9999",
          backgroundColor: "#318335",
          color: "#fff",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "40px",
          cursor: "pointer",
          display: "none", // Initially hide the button
        }}
      >
        <FaArrowUp className="scrollup__icon text-2xl" />
      </a>
    </>
  );
}
