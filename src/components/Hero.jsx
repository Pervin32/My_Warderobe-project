/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  const slides = [
    {
      title: "MÜASİR VƏ İKİNCİ ƏL GEYİMLƏR",
      heading: "Tərzinizi Təzələyin",
      stat: "İNDİ ALIN",
      image: assets.about_img,
    },
    {
      title: "FOTOLARINIZI YÜKLƏYİN",
      heading: "Qarderobunuza Yenilik Qatın",
      stat: "SATIŞA BAŞLAYIN",
      image: assets.slide5,
    },
    {
      title: "QEYDİYYATDAN KEÇİN VƏ BİZƏ QOŞULUN",
      heading: "Xüsusi Seçimlər",
      stat: "DAHA ÇOX BİLGİ ƏLDƏ EDİN",
      image: assets.slide2,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative object-contain w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-[12/4] ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
          style={{ pointerEvents: index === current ? "auto" : "none" }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={slide.image}
            alt={slide.heading}
          />

          {/*Sekilin uzerindeki yazilar */}
          <div className="relative z-10 text-white text-center p-2 sm:p-4 lg:p-6">
            <div className="flex flex-col items-center space-y-4 bg-black bg-opacity-40 p-6 rounded-lg">
              <div className="flex items-center gap-2">
                <p className="w-8 h-[1px] bg-white"></p>
                <p className="font-medium text-sm md:text-base">{slide.title}</p>
                <p className="w-8 h-[1px] bg-white"></p>
              </div>
              <h1 className="text-2xl sm:text-5xl lg:text-6xl">{slide.heading}</h1>
              <div className="flex items-center gap-2">
                <p className="w-8 h-[1px] bg-white"></p>
                <p className="font-semibold text-sm md:text-base">{slide.stat}</p>
                <p className="w-8 h-[1px] bg-white"></p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? "bg-white w-4" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
