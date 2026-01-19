import { motion } from "framer-motion";

const deals = [
  {
    title: "Shirts, T-shirts, Jeans",
    offer: "Min. 70% Off",
    img: "https://rukminim2.flixcart.com/image/400/400/xif0q/t-shirt/m/1/l/-original-imagzjh6tshirt.jpeg",
  },
  {
    title: "Sports Shoes",
    offer: "Min. 70% Off",
    img: "https://rukminim2.flixcart.com/image/400/400/xif0q/shoe/x/o/k/-original-imagzjh6shoe.jpeg",
  },
  {
    title: "Smart Suitcases",
    offer: "Min. 70% Off",
    img: "https://rukminim2.flixcart.com/image/400/400/xif0q/suitcase/z/k/l/-original-imagzjh6bag.jpeg",
  },
  {
    title: "Headphones",
    offer: "From ₹699",
    img: "https://rukminim2.flixcart.com/image/400/400/xif0q/headphone/q/y/e/-original-imagzjh6headphone.jpeg",
  },
];

export default function DealsSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6 overflow-hidden">

      {/* background animation bubbles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <h2 className="relative text-2xl font-bold mb-6">
        Smart Gadgets & Deals
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
        {deals.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg overflow-hidden cursor-pointer"
          >
            {/* image */}
            <div className="w-1/2 bg-white flex items-center justify-center p-4">
              <motion.img
                src={item.img}
                alt={item.title}
                className="h-40 object-contain"
                whileHover={{ rotate: -3, scale: 1.1 }}
              />
            </div>

            {/* content */}
            <div className="w-1/2 p-5 text-white flex flex-col justify-center">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm bg-white/20 inline-block px-3 py-1 rounded-full">
                {item.offer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
