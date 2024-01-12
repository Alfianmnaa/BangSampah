import React from "react";
import kertas from "../assets/kertas.png";

const Penampungan = () => {
  return (
    <div>
      <div className="flex justify-center pt-[32px]">
        <div className="w-[1128px] h-11 p-2.5 rounded-lg border justify-start items-center gap-2.5 inline-flex">
          <div className="w-6 h-6 relative">
            <span className="material-symbols-rounded text-zinc-300">search</span>
          </div>
          <input type="search" id="default-search" className="w-[1128px] h-9 justify-start items-center gap-2.5 inline-flex focus:outline-none" placeholder="Cari sampah berkualitas disini" required />
        </div>
      </div>
      <div className="flex justify-center pt-[32px]">
        <div className="w-[1125px] h-60 bg-gradient-to-l from-green-700 to-green-600 rounded-2xl">
          <img className="absolute w-[1125px] h-60" src="beli_sampah_berkualitas.png" alt="image description" />
          <div className="absolute w-[857px] text-white text-[56px] font-bold font-['Figtree'] leading-[72.80px] ml-[56px] mt-[47px]">Beli Sampah Berkualitas untuk Mewujudkan Proyek Anda</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1125px] h-[60px] pt-[40px] flex flex-wrap justify-between">
          <div className="text-neutral-500 font-medium font-['Figtree'] capitalize leading-tight">Pilihan kategori</div>
          <ul className="flex font-medium lg:space-x-8">
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                KERTAS
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                PLASTIK
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                LOGAM
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                KACA
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                TEKSTIL
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                ELEKTRONIK
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-600 text-base font-medium font-['Figtree'] uppercase leading-tight tracking-tight">
                kARET DAN KARET PLASTIK
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1128px]">
          <div className="mt-[51px] text-neutral-800 text-2xl font-bold font-['Figtree'] leading-[28.80px]">Pilihan Untukmu</div>
          <div className="flex flex-wrap justify-between">
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1128px]">
          <div className="mt-[51px] text-neutral-800 text-2xl font-bold font-['Figtree'] leading-[28.80px]">Paling Laris</div>
          <div className="flex flex-wrap justify-between">
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[1128px]">
          <div className="mt-[51px] text-neutral-800 text-2xl font-bold font-['Figtree'] leading-[28.80px]">Rekomendasi Untukmu</div>
          <div className="flex flex-wrap justify-between">
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
            <div className="w-[168px] h-[307px] mt-[21px] relative">
              <div className="w-[168px] h-[307px] left-0 top-0 absolute bg-white rounded-2xl shadow"></div>
              <div className="w-[141px] left-[10px] top-[178px] absolute text-neutral-800 text-base font-normal font-['Figtree'] leading-tight">Plastik Botol Bekas 5 Liter - 10 Buah</div>
              <div className="w-[141px] left-[10px] top-[226px] absolute text-neutral-800 text-sm font-bold font-['Figtree'] leading-[18.20px]">Rp500</div>
              <div className="left-[32px] top-[251px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">Kota Yogyakarta</div>
              <div className="left-[32px] top-[277px] absolute text-stone-500 text-sm font-normal font-['Figtree'] leading-[18.20px]">5,0 • Terjual 500+</div>
              <img className="w-[168px] h-[168px] left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src={kertas} />
              <div className="w-5 h-5 left-[8px] top-[250px] absolute">
                <span className="material-symbols-rounded">editor_choice</span>
              </div>
              <div className="w-5 h-5 left-[8px] top-[275px] absolute">
                <span className="material-symbols-rounded">star</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penampungan;
