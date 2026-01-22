import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Rice (5kg)",
    price: 399,
    img: "https://via.placeholder.com/400x250.png?text=Rice+5kg",
    details: ["Premium quality", "Long grain", "Fresh & clean"],
  },
  {
    id: 2,
    title: "Wheat Flour (5kg)",
    price: 249,
    img: "https://via.placeholder.com/400x250.png?text=Wheat+Flour+5kg",
    details: ["Whole wheat", "High fiber", "Freshly milled"],
  },
  {
    id: 3,
    title: "Sugar (2kg)",
    price: 120,
    img: "https://via.placeholder.com/400x250.png?text=Sugar+2kg",
    details: ["Pure sugar", "Fine crystals", "Sweet & fresh"],
  },
  {
    id: 4,
    title: "Salt (1kg)",
    price: 25,
    img: "https://via.placeholder.com/400x250.png?text=Salt+1kg",
    details: ["Iodized", "Pure", "Fine grains"],
  },
  {
    id: 5,
    title: "Cooking Oil (1L)",
    price: 199,
    img: "https://via.placeholder.com/400x250.png?text=Cooking+Oil+1L",
    details: ["Healthy oil", "Low cholesterol", "Pure & fresh"],
  },
  {
    id: 6,
    title: "Tea (250g)",
    price: 149,
    img: "https://via.placeholder.com/400x250.png?text=Tea+250g",
    details: ["Strong flavor", "Premium leaves", "Aromatic"],
  },
  {
    id: 7,
    title: "Coffee (200g)",
    price: 249,
    img: "https://via.placeholder.com/400x250.png?text=Coffee+200g",
    details: ["Rich aroma", "Freshly roasted", "Strong taste"],
  },
  {
    id: 8,
    title: "Milk (1L)",
    price: 55,
    img: "https://via.placeholder.com/400x250.png?text=Milk+1L",
    details: ["Fresh milk", "Pure & hygienic", "Daily use"],
  },
  {
    id: 9,
    title: "Eggs (12 pcs)",
    price: 70,
    img: "https://via.placeholder.com/400x250.png?text=Eggs+12pcs",
    details: ["Farm fresh", "High protein", "Safe packing"],
  },
  {
    id: 10,
    title: "Bread (1 loaf)",
    price: 35,
    img: "https://via.placeholder.com/400x250.png?text=Bread+1+loaf",
    details: ["Soft bread", "Freshly baked", "Healthy"],
  },
  {
    id: 11,
    title: "Butter (200g)",
    price: 120,
    img: "https://via.placeholder.com/400x250.png?text=Butter+200g",
    details: ["Creamy", "Pure milk", "Tasty"],
  },
  {
    id: 12,
    title: "Cheese (200g)",
    price: 150,
    img: "https://via.placeholder.com/400x250.png?text=Cheese+200g",
    details: ["Soft cheese", "Fresh", "High quality"],
  },
  {
    id: 13,
    title: "Pasta (500g)",
    price: 99,
    img: "https://via.placeholder.com/400x250.png?text=Pasta+500g",
    details: ["Italian pasta", "Easy to cook", "Tasty"],
  },
  {
    id: 14,
    title: "Noodles (2 packs)",
    price: 60,
    img: "https://via.placeholder.com/400x250.png?text=Noodles+2+packs",
    details: ["Instant noodles", "Quick cooking", "Tasty"],
  },
  {
    id: 15,
    title: "Biscuits (200g)",
    price: 40,
    img: "https://via.placeholder.com/400x250.png?text=Biscuits+200g",
    details: ["Crunchy", "Fresh", "Sweet taste"],
  },
  {
    id: 16,
    title: "Chocolates (100g)",
    price: 80,
    img: "https://via.placeholder.com/400x250.png?text=Chocolates+100g",
    details: ["Rich taste", "Creamy", "Perfect gift"],
  },
  {
    id: 17,
    title: "Oats (1kg)",
    price: 179,
    img: "https://via.placeholder.com/400x250.png?text=Oats+1kg",
    details: ["Healthy", "High fiber", "Easy to cook"],
  },
  {
    id: 18,
    title: "Corn Flakes (500g)",
    price: 129,
    img: "https://via.placeholder.com/400x250.png?text=Corn+Flakes+500g",
    details: ["Crunchy", "Breakfast cereal", "Tasty"],
  },
  {
    id: 19,
    title: "Honey (500g)",
    price: 249,
    img: "https://via.placeholder.com/400x250.png?text=Honey+500g",
    details: ["Pure honey", "Natural", "Healthy"],
  },
  {
    id: 20,
    title: "Spices Combo",
    price: 199,
    img: "https://via.placeholder.com/400x250.png?text=Spices+Combo",
    details: ["Mix of 5 spices", "Fresh aroma", "High quality"],
  },
];

const GroceryProducts = () => {
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
          Grocery Products (20)
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

export default GroceryProducts;
