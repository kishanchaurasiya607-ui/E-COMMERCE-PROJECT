import { useEffect, useState } from "react";

const banners = [
  {
    img: "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
    title: "Mattresses",
    price: "From ₹2,899",
    desc: "Wakefit, sleepyhead & more",
  },
  {
    img: "https://s.tmimgcdn.com/scr/800x500/301100/furniture-sale-social-media-facebook-cover-banner-template-and-web-banner-design_301149-original.jpg",
    title: "Furniture",
    price: "Up to 60% Off",
    desc: "Modern sofa & beds",
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    title: "Home Essentials",
    price: "Best Deals",
    desc: "Kitchen & decor",
  },
];

const BannerSlider = () => {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-cover">
     
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((item, i) => (
          <div key={i} className="min-w-full h-[320px] relative bg-cover">
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />

           
            <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white bg-cover">
              <span className="bg-orange-500 text-xs px-3 py-1 rounded">
                REPUBLIC DAY SALE
              </span>
              <h2 className="text-xl mt-2">{item.title}</h2>
              <h1 className="text-3xl font-bold">{item.price}</h1>
              <p className="text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="absolute bottom-3 w-full flex justify-center gap-2 bg-cover">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              index === i ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
