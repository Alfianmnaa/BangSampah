import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Detail = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  const [itemDetails, setItemDetails] = useState({
    judul: "",
    type: "",
    deskripsi: "",
    harga: "",
    berat: "",
    nomor: "",
    kota: "",
    domisili: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const itemDocRef = doc(db, "userSales", itemId);
        const itemDocSnap = await getDoc(itemDocRef);

        if (itemDocSnap.exists()) {
          const itemData = itemDocSnap.data();
          setItemDetails({
            judul: itemData.judul,
            type: itemData.type,
            deskripsi: itemData.deskripsi,
            harga: itemData.harga,
            berat: itemData.berat,
            nomor: itemData.nomor,
            kota: itemData.kota,
            domisili: itemData.domisili,
            imageUrl: itemData.imageUrl,
          });
        } else {
          console.log("Item not found");
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]);

  const handlePesan = () => {
    // Ganti nomor WhatsApp dan pesan sesuai kebutuhan
    const phoneNumber = itemDetails.nomor;
    console.log(phoneNumber); // Ganti dengan nomor WhatsApp yang diinginkan
    const message = encodeURIComponent("Hallo saya ingin memesan produk ini!");
    // Konstruksi URL dengan nomor WhatsApp dan pesan
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect ke WhatsApp
    window.location.href = whatsappUrl;
  };
  return (
    <div className="bg-gray-100  sm:px-10 px-2 md:py-[120px] py-[50px] min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl p-8 sm:mx-8 mx-4 rounded-lg shadow-md">
        <div className="md:flex md:flex-row flex flex-col gap-4  justify-between items-center w-full">
          <div className="sm:w-2/5 w-full">
            <img src={itemDetails.imageUrl} alt={itemDetails.judul} className="w-full h-auto rounded-lg" />
          </div>
          <div className="sm:w-3/5 w-full pl-8">
            <h1 className="text-4xl font-bold mb-4">{itemDetails.judul}</h1>
            <p className="text-gray-600 text-lg mb-4">Deskripsi: {itemDetails.deskripsi}</p>
            <p className="text-gray-600 text-lg mb-4">
              Alamat: {itemDetails.kota} {itemDetails.domisili}
            </p>
            <p className="text-gray-600 text-lg mb-4">
              <span>Jenis Sampah :</span>
              {itemDetails.type}
            </p>
            <p className="text-2xl font-bold text-gray-800 mb-4">Rp{itemDetails.harga}</p>
            <p className="text-gray-700">{itemDetails.berat} Kg (kilogram)</p>
          </div>
        </div>
        <div className="mt-8 flex gap-2">
          <button className=" bg-maingreen text-white py-2 px-4 rounded-md  focus:outline-none focus:ring focus:border-blue-300 hover:brightness-95 duration-150">Add to Cart</button>
          <Link onClick={handlePesan} target="_blank" className="flex items-center bg-maingreen text-white py-2 px-4 rounded-md hover:brightness-95 duration-150 focus:outline-none focus:ring focus:border-blue-300">
            <FaWhatsapp className="text-[24px] mr-2" />
            <div>Order</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
