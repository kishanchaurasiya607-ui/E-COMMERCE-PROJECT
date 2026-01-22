import  Apple from "../assets/Phone/Apple.jpg"
import  Galaxy from "../assets/Phone/Galaxy.webp"
import  Samsung from "../assets/Phone/Samsung.webp"
import  Motorola from "../assets/Phone/Motorola.jpg"
import  Vivo from "../assets/Phone/Vivo.jpg"
import  Poco from "../assets/Phone/Poco.jpg"
const products = [
  {
    name: "Apple iPhone 16",
    price: "From ₹55,999",
    img: {Apple},
  },
  {
    name: "Galaxy S24 5G",
    price: "From ₹40,999",
    img: {Galaxy},
  },
  {
    name: "Motorola G57 Power",
    price: "Just ₹13,999",
    img: {Motorola},
  },
  {
    name: "Vivo T4x 5G",
    price: "From ₹14,999",
    img: {Vivo},
  },
  {
    name: "Poco C75 5G",
    price: "Just ₹7,999",
    img: {Poco},
  },
  {
    name: "Samsung Galaxy A3",
    price: "From ₹17,999",
    img: {Samsung},
  },
];

const BestDeals = () => {
  return (
    <div className="bg-white p-8"  >
      
      <h2 className="text-xl font-semibold mb-4">
        Best deals on smartphones
      </h2>

      <div className="flex gap-4">
        {/* Left products */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {products.map((item, i) => (
              <div
                key={i}
                className="w-[180px] flex-shrink-0 text-center cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[220px] object-contain"
                />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
                <p className="text-sm font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="w-[220px] hidden md:block">
          <div className="h-full bg-blue-600 text-white flex flex-col items-center justify-center p-4">
            <h3 className="text-lg font-semibold">Nothing Phone (3a) Pro</h3>
            <p className="text-sm mt-2">Octa core processor</p>
            <p className="text-xl font-bold mt-3">From ₹26,999</p>
            <p className="text-xs mt-1">*T&C apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
