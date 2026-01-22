import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Pressure Cooker",
    price: 1999,
    img: "https://via.placeholder.com/400x250.png?text=Pressure+Cooker",
    details: ["Stainless steel", "5L capacity", "Safety lock"],
  },
  {
    id: 2,
    title: "Non-stick Pan",
    price: 899,
    img: "https://via.placeholder.com/400x250.png?text=Non-stick+Pan",
    details: ["Teflon coated", "Easy to clean", "Durable"],
  },
  {
    id: 3,
    title: "Mixer Grinder",
    price: 3499,
    img: "https://via.placeholder.com/400x250.png?text=Mixer+Grinder",
    details: ["500W motor", "3 jars", "Easy to use"],
  },
  {
    id: 4,
    title: "Electric Kettle",
    price: 1299,
    img: "https://via.placeholder.com/400x250.png?text=Electric+Kettle",
    details: ["1.7L", "Auto shutoff", "Stainless steel"],
  },
  {
    id: 5,
    title: "Toaster",
    price: 1499,
    img: "https://via.placeholder.com/400x250.png?text=Toaster",
    details: ["2 slice", "Auto shutoff", "Compact design"],
  },
  {
    id: 6,
    title: "Microwave Oven",
    price: 8999,
    img: "https://via.placeholder.com/400x250.png?text=Microwave+Oven",
    details: ["20L", "Grill function", "Digital display"],
  },
  {
    id: 7,
    title: "Gas Stove",
    price: 2999,
    img: "https://via.placeholder.com/400x250.png?text=Gas+Stove",
    details: ["2 burners", "Stainless steel", "Easy to clean"],
  },
  {
    id: 8,
    title: "Rice Cooker",
    price: 2499,
    img: "https://via.placeholder.com/400x250.png?text=Rice+Cooker",
    details: ["Automatic", "Keep warm function", "Non-stick pot"],
  },
  {
    id: 9,
    title: "Chopping Board",
    price: 399,
    img: "https://via.placeholder.com/400x250.png?text=Chopping+Board",
    details: ["Bamboo", "Anti-slip", "Easy to clean"],
  },
  {
    id: 10,
    title: "Knife Set",
    price: 999,
    img: "https://via.placeholder.com/400x250.png?text=Knife+Set",
    details: ["Stainless steel", "6 pieces", "Sharp blades"],
  },
  {
    id: 11,
    title: "Cooking Spoon Set",
    price: 299,
    img: "https://via.placeholder.com/400x250.png?text=Cooking+Spoon+Set",
    details: ["Heat resistant", "Non-stick safe", "Durable"],
  },
  {
    id: 12,
    title: "Food Storage Containers",
    price: 799,
    img: "https://via.placeholder.com/400x250.png?text=Storage+Containers",
    details: ["Air tight", "Set of 5", "BPA free"],
  },
  {
    id: 13,
    title: "Blender",
    price: 2199,
    img: "https://via.placeholder.com/400x250.png?text=Blender",
    details: ["Smoothies", "500W motor", "Easy to clean"],
  },
  {
    id: 14,
    title: "Hand Mixer",
    price: 1299,
    img: "https://via.placeholder.com/400x250.png?text=Hand+Mixer",
    details: ["2 speed", "Lightweight", "Easy to use"],
  },
  {
    id: 15,
    title: "Cutlery Set",
    price: 599,
    img: "https://via.placeholder.com/400x250.png?text=Cutlery+Set",
    details: ["Stainless steel", "24 pieces", "Elegant design"],
  },
  {
    id: 16,
    title: "Baking Tray",
    price: 499,
    img: "https://via.placeholder.com/400x250.png?text=Baking+Tray",
    details: ["Non-stick", "Durable", "Easy to clean"],
  },
  {
    id: 17,
    title: "Kitchen Scale",
    price: 699,
    img: "https://via.placeholder.com/400x250.png?text=Kitchen+Scale",
    details: ["Digital", "High precision", "Compact"],
  },
  {
    id: 18,
    title: "Pressure Cooker (3L)",
    price: 1599,
    img: "https://via.placeholder.com/400x250.png?text=Pressure+Cooker+3L",
    details: ["Stainless steel", "3L capacity", "Safety valve"],
  },
  {
    id: 19,
    title: "Steamer",
    price: 1799,
    img: "https://via.placeholder.com/400x250.png?text=Steamer",
    details: ["Multi-layer", "Healthy cooking", "Easy to clean"],
  },
  {
    id: 20,
    title: "Dish Rack",
    price: 899,
    img: "https://via.placeholder.com/400x250.png?text=Dish+Rack",
    details: ["Rust proof", "2 tier", "Easy to assemble"],
  },
];

const KitchenProducts = () => {
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
          Kitchen Products (20)
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

export default KitchenProducts;
