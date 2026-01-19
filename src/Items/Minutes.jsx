const products = [
  { id: 1, name: "Milk 1L", price: 55, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Milk" },
  { id: 2, name: "Bread", price: 40, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Bread" },
  { id: 3, name: "Eggs (12)", price: 120, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Eggs" },
  { id: 4, name: "Chips", price: 30, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Chips" },

  { id: 5, name: "Butter", price: 95, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Butter" },
  { id: 6, name: "Cheese", price: 110, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Cheese" },
  { id: 7, name: "Curd", price: 45, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Curd" },
  { id: 8, name: "Cold Drink", price: 60, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Drink" },

  { id: 9, name: "Biscuits", price: 25, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Biscuits" },
  { id: 10, name: "Chocolate", price: 50, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Chocolate" },
  { id: 11, name: "Ice Cream", price: 90, img: "https://dummyimage.com/200x200/e5e7eb/000&text=IceCream" },
  { id: 12, name: "Juice", price: 70, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Juice" },

  { id: 13, name: "Apple", price: 120, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Apple" },
  { id: 14, name: "Banana", price: 60, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Banana" },
  { id: 15, name: "Tomato", price: 35, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Tomato" },
  { id: 16, name: "Potato", price: 30, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Potato" },

  { id: 17, name: "Onion", price: 40, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Onion" },
  { id: 18, name: "Cooking Oil", price: 160, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Oil" },
  { id: 19, name: "Rice 1kg", price: 75, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Rice" },
  { id: 20, name: "Sugar 1kg", price: 50, img: "https://dummyimage.com/200x200/e5e7eb/000&text=Sugar" },
];

const Minutes = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">
        ⚡ 10 Minutes Fast Delivery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((item) => (
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

            <p className="text-green-600 text-xs font-semibold">
              ⚡ Delivery in 10 mins
            </p>

            <p className="mt-1 font-bold">₹{item.price}</p>

            <button
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Minutes;
