const mobileProducts = [
  {
    id: 101,
    name: "Redmi Note 13",
    price: 14999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Redmi",
  },
  {
    id: 102,
    name: "Realme Narzo 60",
    price: 17999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Realme",
  },
  {
    id: 103,
    name: "Samsung Galaxy S23",
    price: 74999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Samsung",
  },
  {
    id: 104,
    name: "iPhone 15",
    price: 79999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=iPhone",
  },
  {
    id: 105,
    name: "OnePlus Nord CE 3",
    price: 26999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=OnePlus",
  },
  {
    id: 106,
    name: "Vivo T2 5G",
    price: 15999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Vivo",
  },
  {
    id: 107,
    name: "Poco X6 Pro",
    price: 24999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Poco",
  },
  {
    id: 108,
    name: "Motorola Edge 40",
    price: 29999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Motorola",
  },

  // ✅ 12 NEW MOBILES
  {
    id: 109,
    name: "Samsung Galaxy A15",
    price: 12999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Galaxy+A15",
  },
  {
    id: 110,
    name: "Infinix Zero 30 5G",
    price: 22999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Infinix",
  },
  {
    id: 111,
    name: "iQOO Z7 Pro",
    price: 23999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=iQOO",
  },
  {
    id: 112,
    name: "Nothing Phone (2a)",
    price: 25999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Nothing",
  },
  {
    id: 113,
    name: "Realme 12 Pro",
    price: 27999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Realme+12",
  },
  {
    id: 114,
    name: "Redmi 13C",
    price: 8999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Redmi+13C",
  },
  {
    id: 115,
    name: "Samsung Galaxy F54",
    price: 34999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Galaxy+F54",
  },
  {
    id: 116,
    name: "Lava Agni 2",
    price: 19999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Lava",
  },
  {
    id: 117,
    name: "Motorola G84",
    price: 18999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Moto+G84",
  },
  {
    id: 118,
    name: "Poco M6 Pro",
    price: 10999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Poco+M6",
  },
  {
    id: 119,
    name: "Vivo Y200 5G",
    price: 21999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Vivo+Y200",
  },
  {
    id: 120,
    name: "Tecno Phantom V Flip",
    price: 49999,
    img: "https://dummyimage.com/200x200/e5e7eb/000&text=Tecno+Flip",
  },
];


const Mobiles = ({ addToCart }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">
        📱 Best Deals on Mobiles
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {mobileProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-contain"
            />

            <h3 className="mt-2 text-sm font-medium">
              {item.name}
            </h3>

            <p className="text-blue-600 text-xs font-semibold">
              🔥 Limited Time Sale
            </p>

            <p className="mt-1 font-bold text-lg">
              ₹{item.price.toLocaleString()}
            </p>

            <button
              onClick={() => addToCart(item)}
              className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
