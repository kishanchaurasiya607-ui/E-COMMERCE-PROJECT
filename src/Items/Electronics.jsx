import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Smartphone",
    price: 14999,
    img: "https://via.placeholder.com/400x250.png?text=Smartphone",
    details: ["6.5 inch display", "128GB Storage", "48MP Camera"],
  },
  {
    id: 2,
    title: "Laptop",
    price: 45999,
    img: "https://via.placeholder.com/400x250.png?text=Laptop",
    details: ["8GB RAM", "512GB SSD", "i5 Processor"],
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 2999,
    img: "https://via.placeholder.com/400x250.png?text=Smart+Watch",
    details: ["Heart Rate", "Step Counter", "Notifications"],
  },
  {
    id: 4,
    title: "Bluetooth Earbuds",
    price: 1499,
    img: "https://via.placeholder.com/400x250.png?text=Bluetooth+Earbuds",
    details: ["Noise Cancellation", "12hr Battery", "Wireless"],
  },
  {
    id: 5,
    title: "LED TV",
    price: 25999,
    img: "https://via.placeholder.com/400x250.png?text=LED+TV",
    details: ["4K Display", "Smart TV", "HDR"],
  },
  {
    id: 6,
    title: "Gaming Console",
    price: 29999,
    img: "https://via.placeholder.com/400x250.png?text=Gaming+Console",
    details: ["4K Gaming", "Fast Loading", "Multiplayer"],
  },
  {
    id: 7,
    title: "Digital Camera",
    price: 19999,
    img: "https://via.placeholder.com/400x250.png?text=Digital+Camera",
    details: ["20MP", "4K Video", "Optical Zoom"],
  },
  {
    id: 8,
    title: "Home Speaker",
    price: 3999,
    img: "https://via.placeholder.com/400x250.png?text=Home+Speaker",
    details: ["Bass Boost", "Bluetooth", "Portable"],
  },
  {
    id: 9,
    title: "Power Bank",
    price: 899,
    img: "https://via.placeholder.com/400x250.png?text=Power+Bank",
    details: ["20000mAh", "Fast Charging", "Dual USB"],
  },
  {
    id: 10,
    title: "Wireless Mouse",
    price: 699,
    img: "https://via.placeholder.com/400x250.png?text=Wireless+Mouse",
    details: ["Ergonomic", "2.4GHz", "Long Battery"],
  },
  {
    id: 11,
    title: "Keyboard",
    price: 999,
    img: "https://via.placeholder.com/400x250.png?text=Keyboard",
    details: ["Mechanical", "Backlit", "Durable"],
  },
  {
    id: 12,
    title: "Router",
    price: 1799,
    img: "https://via.placeholder.com/400x250.png?text=Router",
    details: ["Dual Band", "Fast Speed", "Strong Signal"],
  },
  {
    id: 13,
    title: "Hard Disk",
    price: 3499,
    img: "https://via.placeholder.com/400x250.png?text=Hard+Disk",
    details: ["1TB Storage", "USB 3.0", "Portable"],
  },
  {
    id: 14,
    title: "SSD",
    price: 4999,
    img: "https://via.placeholder.com/400x250.png?text=SSD",
    details: ["512GB", "Fast Boot", "Reliable"],
  },
  {
    id: 15,
    title: "Smart Home Bulb",
    price: 999,
    img: "https://via.placeholder.com/400x250.png?text=Smart+Bulb",
    details: ["WiFi", "Color Changing", "Voice Control"],
  },
  {
    id: 16,
    title: "Air Purifier",
    price: 8999,
    img: "https://via.placeholder.com/400x250.png?text=Air+Purifier",
    details: ["HEPA Filter", "Silent Mode", "Auto Sensor"],
  },
  {
    id: 17,
    title: "Electric Kettle",
    price: 1299,
    img: "https://via.placeholder.com/400x250.png?text=Electric+Kettle",
    details: ["1.7L", "Auto Shutoff", "Stainless Steel"],
  },
  {
    id: 18,
    title: "Smart Vacuum",
    price: 15999,
    img: "https://via.placeholder.com/400x250.png?text=Smart+Vacuum",
    details: ["Auto Clean", "Smart Mapping", "Recharge"],
  },
  {
    id: 19,
    title: "Projector",
    price: 12999,
    img: "https://via.placeholder.com/400x250.png?text=Projector",
    details: ["1080p", "HDMI", "Portable"],
  },
  {
    id: 20,
    title: "Smart Thermostat",
    price: 4999,
    img: "https://via.placeholder.com/400x250.png?text=Smart+Thermostat",
    details: ["WiFi Control", "Energy Saving", "Auto Mode"],
  },
];

const ElectronicsProducts = () => {
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
          Electronics Products (20)
        </h1>

        {/* Cart Counter (Calculator Style) */}
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

export default ElectronicsProducts;
