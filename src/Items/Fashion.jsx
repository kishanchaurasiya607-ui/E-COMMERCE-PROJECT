import React from "react";

const products = [
  {
    id: 1,
    title: "Men's Denim Jacket",
    price: "₹2,499",
    img: "https://via.placeholder.com/400x250.png?text=Denim+Jacket",
    details: ["Slim fit", "100% cotton", "Perfect for winters"],
  },
  {
    id: 2,
    title: "Women’s Floral Dress",
    price: "₹1,799",
    img: "https://via.placeholder.com/400x250.png?text=Floral+Dress",
    details: ["Lightweight", "Summer wear", "Flowy style"],
  },
  {
    id: 3,
    title: "Men’s Casual Shirt",
    price: "₹999",
    img: "https://via.placeholder.com/400x250.png?text=Casual+Shirt",
    details: ["Regular fit", "Breathable fabric", "Daily wear"],
  },
  {
    id: 4,
    title: "Women’s Denim Jeans",
    price: "₹1,299",
    img: "https://via.placeholder.com/400x250.png?text=Denim+Jeans",
    details: ["Skinny fit", "Stretchable", "Durable"],
  },
  {
    id: 5,
    title: "Men’s Leather Belt",
    price: "₹599",
    img: "https://via.placeholder.com/400x250.png?text=Leather+Belt",
    details: ["Genuine leather", "Classic buckle", "Long lasting"],
  },
  {
    id: 6,
    title: "Women’s Handbag",
    price: "₹1,499",
    img: "https://via.placeholder.com/400x250.png?text=Handbag",
    details: ["Spacious", "Trendy style", "Premium quality"],
  },
  {
    id: 7,
    title: "Men’s Sneakers",
    price: "₹2,199",
    img: "https://via.placeholder.com/400x250.png?text=Sneakers",
    details: ["Comfortable", "Breathable", "Casual wear"],
  },
  {
    id: 8,
    title: "Women’s Sandals",
    price: "₹899",
    img: "https://via.placeholder.com/400x250.png?text=Sandals",
    details: ["Soft sole", "Summer wear", "Lightweight"],
  },
  {
    id: 9,
    title: "Men’s Hoodie",
    price: "₹1,699",
    img: "https://via.placeholder.com/400x250.png?text=Hoodie",
    details: ["Warm", "Soft fabric", "Street style"],
  },
  {
    id: 10,
    title: "Women’s Crop Top",
    price: "₹699",
    img: "https://via.placeholder.com/400x250.png?text=Crop+Top",
    details: ["Stretchable", "Trendy", "Daily wear"],
  },
  {
    id: 11,
    title: "Men’s Formal Pants",
    price: "₹1,299",
    img: "https://via.placeholder.com/400x250.png?text=Formal+Pants",
    details: ["Slim fit", "Office wear", "Comfortable"],
  },
  {
    id: 12,
    title: "Women’s Kurti",
    price: "₹999",
    img: "https://via.placeholder.com/400x250.png?text=Kurti",
    details: ["Ethnic style", "Cotton fabric", "Daily wear"],
  },
  {
    id: 13,
    title: "Men’s Suit",
    price: "₹4,999",
    img: "https://via.placeholder.com/400x250.png?text=Suit",
    details: ["Premium fabric", "Perfect fit", "Party wear"],
  },
  {
    id: 14,
    title: "Women’s Saree",
    price: "₹2,499",
    img: "https://via.placeholder.com/400x250.png?text=Saree",
    details: ["Silk", "Traditional", "Elegant look"],
  },
  {
    id: 15,
    title: "Men’s T-Shirt",
    price: "₹499",
    img: "https://via.placeholder.com/400x250.png?text=T-Shirt",
    details: ["Cotton", "Soft fabric", "Daily wear"],
  },
  {
    id: 16,
    title: "Women’s Leggings",
    price: "₹599",
    img: "https://via.placeholder.com/400x250.png?text=Leggings",
    details: ["Stretchable", "Gym wear", "Comfortable"],
  },
  {
    id: 17,
    title: "Men’s Watch",
    price: "₹1,999",
    img: "https://via.placeholder.com/400x250.png?text=Watch",
    details: ["Water resistant", "Stylish", "Durable"],
  },
  {
    id: 18,
    title: "Women’s Sunglasses",
    price: "₹799",
    img: "https://via.placeholder.com/400x250.png?text=Sunglasses",
    details: ["UV protection", "Trendy style", "Lightweight"],
  },
  {
    id: 19,
    title: "Men’s Wallet",
    price: "₹699",
    img: "https://via.placeholder.com/400x250.png?text=Wallet",
    details: ["Genuine leather", "Slim design", "Durable"],
  },
  {
    id: 20,
    title: "Women’s Earrings",
    price: "₹399",
    img: "https://via.placeholder.com/400x250.png?text=Earrings",
    details: ["Stylish", "Lightweight", "Party wear"],
  },
];

const FashionProducts = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Fashion Products (20)
        </h1>

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
                <p className="text-gray-600 mb-2">{product.price}</p>
                <ul className="text-gray-600 text-sm space-y-1 mb-4">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>✔ {detail}</li>
                  ))}
                </ul>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add to Cart</button>
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

export default FashionProducts;
