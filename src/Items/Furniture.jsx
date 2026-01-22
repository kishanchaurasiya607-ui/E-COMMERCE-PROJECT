import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Sofa Set",
    price: 24999,
    img: "https://via.placeholder.com/400x250.png?text=Sofa+Set",
    details: ["3-seater", "Leather", "Comfortable seating"],
  },
  {
    id: 2,
    title: "Dining Table",
    price: 15999,
    img: "https://via.placeholder.com/400x250.png?text=Dining+Table",
    details: ["6-seater", "Wooden", "Elegant design"],
  },
  {
    id: 3,
    title: "Bed (Queen Size)",
    price: 19999,
    img: "https://via.placeholder.com/400x250.png?text=Queen+Bed",
    details: ["Queen size", "Storage", "Sturdy frame"],
  },
  {
    id: 4,
    title: "Wardrobe",
    price: 17999,
    img: "https://via.placeholder.com/400x250.png?text=Wardrobe",
    details: ["3 doors", "Spacious", "Mirror included"],
  },
  {
    id: 5,
    title: "Study Table",
    price: 7999,
    img: "https://via.placeholder.com/400x250.png?text=Study+Table",
    details: ["Drawer", "Sturdy", "Ergonomic design"],
  },
  {
    id: 6,
    title: "Office Chair",
    price: 4999,
    img: "https://via.placeholder.com/400x250.png?text=Office+Chair",
    details: ["Adjustable height", "Comfortable", "Armrest"],
  },
  {
    id: 7,
    title: "Coffee Table",
    price: 3999,
    img: "https://via.placeholder.com/400x250.png?text=Coffee+Table",
    details: ["Glass top", "Modern design", "Sturdy legs"],
  },
  {
    id: 8,
    title: "TV Unit",
    price: 8999,
    img: "https://via.placeholder.com/400x250.png?text=TV+Unit",
    details: ["Wall mount", "Storage", "Modern look"],
  },
  {
    id: 9,
    title: "Bookshelf",
    price: 5999,
    img: "https://via.placeholder.com/400x250.png?text=Bookshelf",
    details: ["5 shelves", "Wooden", "Sturdy"],
  },
  {
    id: 10,
    title: "Recliner Chair",
    price: 10999,
    img: "https://via.placeholder.com/400x250.png?text=Recliner+Chair",
    details: ["Comfortable", "Leather", "Adjustable recline"],
  },
  {
    id: 11,
    title: "Chest of Drawers",
    price: 6999,
    img: "https://via.placeholder.com/400x250.png?text=Chest+of+Drawers",
    details: ["4 drawers", "Spacious", "Sturdy build"],
  },
  {
    id: 12,
    title: "Side Table",
    price: 1999,
    img: "https://via.placeholder.com/400x250.png?text=Side+Table",
    details: ["Small size", "Modern", "Easy to move"],
  },
  {
    id: 13,
    title: "Armchair",
    price: 6499,
    img: "https://via.placeholder.com/400x250.png?text=Armchair",
    details: ["Comfortable", "Soft cushion", "Stylish look"],
  },
  {
    id: 14,
    title: "Dining Chair",
    price: 1499,
    img: "https://via.placeholder.com/400x250.png?text=Dining+Chair",
    details: ["Wooden", "Comfortable", "Durable"],
  },
  {
    id: 15,
    title: "TV Stand",
    price: 3499,
    img: "https://via.placeholder.com/400x250.png?text=TV+Stand",
    details: ["Modern design", "Storage shelf", "Sturdy"],
  },
  {
    id: 16,
    title: "Drawer Cabinet",
    price: 4999,
    img: "https://via.placeholder.com/400x250.png?text=Drawer+Cabinet",
    details: ["3 drawers", "Storage", "Strong build"],
  },
  {
    id: 17,
    title: "Ottoman",
    price: 2999,
    img: "https://via.placeholder.com/400x250.png?text=Ottoman",
    details: ["Soft cushion", "Storage", "Modern look"],
  },
  {
    id: 18,
    title: "Corner Sofa",
    price: 29999,
    img: "https://via.placeholder.com/400x250.png?text=Corner+Sofa",
    details: ["L-shaped", "Comfortable", "Spacious seating"],
  },
  {
    id: 19,
    title: "Wardrobe (2 Doors)",
    price: 10999,
    img: "https://via.placeholder.com/400x250.png?text=Wardrobe+2+Doors",
    details: ["2 doors", "Spacious", "Modern design"],
  },
  {
    id: 20,
    title: "Bean Bag",
    price: 2499,
    img: "https://via.placeholder.com/400x250.png?text=Bean+Bag",
    details: ["Soft", "Comfortable", "Easy to move"],
  },
];

const FurnitureProducts = () => {
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
          Furniture Products (20)
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

export default FurnitureProducts;
