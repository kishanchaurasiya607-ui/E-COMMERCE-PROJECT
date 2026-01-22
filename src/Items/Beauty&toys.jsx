import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Lipstick",
    price: 599,
    img: "https://via.placeholder.com/400x250.png?text=Lipstick",
    details: ["Long-lasting", "Matte finish", "Vibrant color"],
  },
  {
    id: 2,
    title: "Foundation",
    price: 899,
    img: "https://via.placeholder.com/400x250.png?text=Foundation",
    details: ["Full coverage", "Smooth texture", "SPF 20"],
  },
  {
    id: 3,
    title: "Eyeliner",
    price: 299,
    img: "https://via.placeholder.com/400x250.png?text=Eyeliner",
    details: ["Waterproof", "Sharp tip", "Easy to apply"],
  },
  {
    id: 4,
    title: "Face Wash",
    price: 249,
    img: "https://via.placeholder.com/400x250.png?text=Face+Wash",
    details: ["Deep cleansing", "No harsh chemicals", "For all skin types"],
  },
  {
    id: 5,
    title: "Moisturizer",
    price: 399,
    img: "https://via.placeholder.com/400x250.png?text=Moisturizer",
    details: ["Hydrates skin", "Non-greasy", "Daily use"],
  },
  {
    id: 6,
    title: "Perfume",
    price: 1299,
    img: "https://via.placeholder.com/400x250.png?text=Perfume",
    details: ["Long-lasting scent", "Elegant bottle", "Fresh fragrance"],
  },
  {
    id: 7,
    title: "Hair Oil",
    price: 349,
    img: "https://via.placeholder.com/400x250.png?text=Hair+Oil",
    details: ["Reduces hair fall", "Nourishes scalp", "Smooth hair"],
  },
  {
    id: 8,
    title: "Nail Polish",
    price: 199,
    img: "https://via.placeholder.com/400x250.png?text=Nail+Polish",
    details: ["Glossy finish", "Quick dry", "Chip resistant"],
  },
  {
    id: 9,
    title: "Mascara",
    price: 449,
    img: "https://via.placeholder.com/400x250.png?text=Mascara",
    details: ["Volumizing", "Waterproof", "Long lashes"],
  },
  {
    id: 10,
    title: "Blush",
    price: 349,
    img: "https://via.placeholder.com/400x250.png?text=Blush",
    details: ["Natural glow", "Smooth texture", "Easy blend"],
  },
  {
    id: 11,
    title: "Toy Car",
    price: 499,
    img: "https://via.placeholder.com/400x250.png?text=Toy+Car",
    details: ["Durable", "Safe material", "Bright colors"],
  },
  {
    id: 12,
    title: "Doll",
    price: 699,
    img: "https://via.placeholder.com/400x250.png?text=Doll",
    details: ["Soft body", "Cute dress", "Safe for kids"],
  },
  {
    id: 13,
    title: "Building Blocks",
    price: 999,
    img: "https://via.placeholder.com/400x250.png?text=Blocks",
    details: ["Educational", "Colorful", "Easy to build"],
  },
  {
    id: 14,
    title: "Puzzle Game",
    price: 349,
    img: "https://via.placeholder.com/400x250.png?text=Puzzle",
    details: ["Brain game", "Fun for kids", "Durable pieces"],
  },
  {
    id: 15,
    title: "Soft Toy",
    price: 799,
    img: "https://via.placeholder.com/400x250.png?text=Soft+Toy",
    details: ["Super soft", "Cute design", "Safe material"],
  },
  {
    id: 16,
    title: "Action Figure",
    price: 599,
    img: "https://via.placeholder.com/400x250.png?text=Action+Figure",
    details: ["Detailed design", "Collectible", "Durable"],
  },
  {
    id: 17,
    title: "Remote Control Car",
    price: 1499,
    img: "https://via.placeholder.com/400x250.png?text=RC+Car",
    details: ["Fast speed", "Rechargeable", "Easy control"],
  },
  {
    id: 18,
    title: "Board Game",
    price: 899,
    img: "https://via.placeholder.com/400x250.png?text=Board+Game",
    details: ["Family game", "Fun hours", "Easy rules"],
  },
  {
    id: 19,
    title: "Kids Watch",
    price: 399,
    img: "https://via.placeholder.com/400x250.png?text=Kids+Watch",
    details: ["Colorful strap", "Water resistant", "Easy to read"],
  },
  {
    id: 20,
    title: "Toy Train Set",
    price: 1299,
    img: "https://via.placeholder.com/400x250.png?text=Train+Set",
    details: ["Realistic design", "Safe material", "Fun for kids"],
  },
];

const BeautyToysProducts = () => {
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
          Beauty & Toys Products (20)
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

export default BeautyToysProducts;
