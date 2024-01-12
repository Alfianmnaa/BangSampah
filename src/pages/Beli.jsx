import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { IoMdSearch } from "react-icons/io";
import kertas from "../assets/kertas.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Beli = () => {
  const { currentUser } = useContext(AuthContext);
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    const fetchUserItems = async () => {
      try {
        const q = query(collection(db, "userSales"));
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        setUserItems(items);
      } catch (error) {
        console.error("Error fetching user items:", error);
      }
    };

    fetchUserItems();
  }, [currentUser]);
  return (
    <div className="sm:p-10 px-4  p-2 md:py-[120px] py-[50px]">
      <div className=" mx-auto flex sm:w-[610px] md:w-[720px] lg:w-[1024px] xl:w-[1125px] p-3 rounded-lg md:translate-y-0 translate-y-[4rem] border border-zinc-400">
        <IoMdSearch className="w-6 h-6 mr-2" />
        <input type="text" className="w-full outline-none text-[16px]" placeholder="Cari sampah berkualitas disini" />
      </div>
      <div className=" mx-auto mt-8 w-full sm:w-[610px] md:w-[720px] lg:w-[1024px] xl:w-[1125px] h-60 bg-gradient-to-l from-green-700 to-green-600 rounded-2xl relative md:translate-y-0 translate-y-[4rem]">
        <div className="right-0 absolute z-10 rounded-tr-2xl rounded-br-2xl h-60 md:w-[330.5px] object-cover sm:w-44 w-32 bg-no-repeat bg-hero" />
        <div className="max-w-[800px]  text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold font-figtree lg:leading-[72.80px] md:leading-[52.80px] leading-10  p-8 ">Beli Sampah Berkualitas untuk Mewujudkan Proyek Anda</div>
      </div>
      <div className="mx-auto flex justify-center mt-12 sm:w-[610px] md:w-[720px] lg:w-[1024px] xl:w-[1125px]">
        <div className="w-full h-[60px] pt-[40px] flex flex-wrap justify-between ">
          <div className="text-neutral-500 font-bold font-['Figtree'] capitalize leading-tight mb-2 ">Pilihan kategori</div>
          <ul className="flex flex-wrap gap-2 font-medium lg:space-x-8 ">
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px] ">
                KERTAS
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px]">
                PLASTIK
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px]">
                LOGAM
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px]">
                KACA
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px]">
                TEKSTIL
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px]">
                ELEKTRONIK
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight sm:text-[16px] text-[14px]">
                kARET
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center  mt-12">
        <div className="w-[1128px]">
          <div className="mt-[51px] text-neutral-800 text-2xl font-bold font-['Figtree'] leading-[28.80px]">Pilihan Untukmu</div>
          <div className="flex flex-wrap sm:justify-start justify-center gap-6">
            {userItems.map((item) => (
              <Link to={`/detail/${item.id}`} key={item.id} className="sm:w-[168px] w-[300px] h-[307px]  mt-[21px] relative hover:brightness-95 duration-150">
                <div className="sm:w-[168px] w-[300px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
                <div className="sm:w-[141px] w-full left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">{item.judul}</div>
                <div className="w-[141px] left-[10px] sm:top-[226px] top-[210px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp{item.harga}</div>
                <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota {item.kota}</div>
                <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
                <img className="object-cover w-full h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={item.imageUrl} />
                <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                  <FaLocationDot />
                </div>
                <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                  <FaStar className="text-yellow-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beli;
