import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "LED TV 32 inch",
    price: 15999,
    img: "https://via.placeholder.com/400x250.png?text=LED+TV+32+inch",
    details: ["HD display", "Slim design", "1 year warranty"],
  },
  {
    id: 2,
    title: "LED TV 43 inch",
    price: 25999,
    img: "https://via.placeholder.com/400x250.png?text=LED+TV+43+inch",
    details: ["Full HD", "Smart TV", "2 year warranty"],
  },
  {
    id: 3,
    title: "LED TV 50 inch",
    price: 34999,
    img: "https://via.placeholder.com/400x250.png?text=LED+TV+50+inch",
    details: ["4K Ultra HD", "Smart TV", "Voice control"],
  },
  {
    id: 4,
    title: "OLED TV 55 inch",
    price: 79999,
    img: "https://via.placeholder.com/400x250.png?text=OLED+TV+55+inch",
    details: ["OLED display", "4K HDR", "Premium sound"],
  },
  {
    id: 5,
    title: "QLED TV 65 inch",
    price: 119999,
    img: "https://via.placeholder.com/400x250.png?text=QLED+TV+65+inch",
    details: ["QLED display", "Smart TV", "Dolby Atmos"],
  },
  {
    id: 6,
    title: "Soundbar",
    price: 9999,
    img: "https://via.placeholder.com/400x250.png?text=Soundbar",
    details: ["Dolby Audio", "Bluetooth", "Wall mount"],
  },
  {
    id: 7,
    title: "Home Theater System",
    price: 24999,
    img: "https://via.placeholder.com/400x250.png?text=Home+Theater",
    details: ["5.1 channel", "Bluetooth", "USB support"],
  },
  {
    id: 8,
    title: "Air Conditioner 1.5 Ton",
    price: 34999,
    img: "https://via.placeholder.com/400x250.png?text=AC+1.5+Ton",
    details: ["Inverter", "Energy saving", "Fast cooling"],
  },
  {
    id: 9,
    title: "Air Conditioner 2 Ton",
    price: 44999,
    img: "https://via.placeholder.com/400x250.png?text=AC+2+Ton",
    details: ["Inverter", "Eco mode", "Low noise"],
  },
  {
    id: 10,
    title: "Refrigerator 260L",
    price: 24999,
    img: "https://via.placeholder.com/400x250.png?text=Fridge+260L",
    details: ["Double door", "Frost free", "Energy efficient"],
  },
  {
    id: 11,
    title: "Refrigerator 350L",
    price: 32999,
    img: "https://via.placeholder.com/400x250.png?text=Fridge+350L",
    details: ["Triple door", "Smart inverter", "Low noise"],
  },
  {
    id: 12,
    title: "Washing Machine 7kg",
    price: 17999,
    img: "https://via.placeholder.com/400x250.png?text=Washing+Machine+7kg",
    details: ["Semi automatic", "Rust proof", "Easy wash"],
  },
  {
    id: 13,
    title: "Washing Machine 8kg",
    price: 23999,
    img: "https://via.placeholder.com/400x250.png?text=Washing+Machine+8kg",
    details: ["Fully automatic", "Quick wash", "Energy saving"],
  },
  {
    id: 14,
    title: "Dishwasher",
    price: 27999,
    img: "https://via.placeholder.com/400x250.png?text=Dishwasher",
    details: ["8 place setting", "Auto clean", "Energy efficient"],
  },
  {
    id: 15,
    title: "Vacuum Cleaner",
    price: 6999,
    img: "https://via.placeholder.com/400x250.png?text=Vacuum+Cleaner",
    details: ["Powerful suction", "Bagless", "Portable"],
  },
  {
    id: 16,
    title: "Microwave Oven",
    price: 8999,
    img: "https://via.placeholder.com/400x250.png?text=Microwave+Oven",
    details: ["20L", "Grill function", "Auto cook"],
  },
  {
    id: 17,
    title: "Electric Kettle",
    price: 1299,
    img: "https://via.placeholder.com/400x250.png?text=Electric+Kettle",
    details: ["1.7L", "Auto shutoff", "Stainless steel"],
  },
  {
    id: 18,
    title: "Air Purifier",
    price: 9999,
    img: "https://via.placeholder.com/400x250.png?text=Air+Purifier",
    details: ["HEPA filter", "Silent mode", "Smart sensor"],
  },
  {
    id: 19,
    title: "Electric Iron",
    price: 1499,
    img: "https://via.placeholder.com/400x250.png?text=Electric+Iron",
    details: ["Steam iron", "Anti drip", "Non-stick soleplate"],
  },
  {
    id: 20,
    title: "Water Purifier",
    price: 8999,
    img: "https://via.placeholder.com/400x250.png?text=Water+Purifier",
    details: ["RO+UV", "5 stage filter", "TDS controller"],
  },
];

const TVsAppliances = () => {
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (price) => {
    setCartCount(cartCount + 1);
    setTotal(total + price);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          TVs & Appliances (20)
        </h1>

        {/* Cart Counter */}
        <div className="flex justify-end mb-6">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <p className="text-gray-600">Cart Items: {cartCount}</p>
            <p className="text-gray-600">Total: ₹{total}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card bg-white shadow-lg rounded-xl overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">₹{product.price}</p>
                <ul className="text-gray-600 text-sm space-y-1 mb-4">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>✔ {detail}</li>
                  ))}
                </ul>
                <button
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                  onClick={() => addToCart(product.price)}
                >
                  Add to Cart
                </button>
                 <button
              className="mt-3 w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500"
            >
              Buy now
            </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVsAppliances;
