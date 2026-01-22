import fashion from "../assets/fashion.webp"
import { Link } from 'react-router-dom';
export default function DealsSection() {
  return (
    <section className="px-6 py-8 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Best Gadgets & Appliances</h2>
            <button className="text-blue-600 text-xl">›</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "True Wireless", offer: "Min. 50% Off", img: "/images/earbuds.png" },
              { name: "Wrist Watches", offer: "Min. 90% Off", img: "/images/watch.png" },
              { name: "Neckband", offer: "Popular", img: "/images/neckband.png" },
              { name: "Trimmers", offer: "Min. 50% Off", img: "/images/trimmer.png" },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-md p-3 text-center hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[100px] mx-auto object-contain"
                />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
                <p className="text-green-600 text-sm font-semibold">
                  {item.offer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg">Republic Day Specials</h2>
            <button className="text-blue-600 text-xl">›</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Dry Fruit, Nut & Seed", offer: "Min. 50% Off", img: "/images/dryfruits.png" },
              { name: "Kitchen Containers", offer: "Min. 50% Off", img: "/images/container.png" },
              { name: "Women's Ethnic Sets", offer: "Min. 50% Off", img: "/images/ethnic.png" },
              { name: "Wall Clocks", offer: "Top Picks", img: "/images/clock.png" },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-md p-3 text-center hover:shadow-md transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[100px] mx-auto object-contain"
                />
                <p className="mt-2 text-sm font-medium">{item.name}</p>
                <p className="text-green-600 text-sm font-semibold">
                  {item.offer}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="relative rounded-md overflow-hidden">
          <img
            src={fashion}
            alt="Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-6">
            <h2 className="text-2xl font-bold text-white">
              Shop your fashion Needs
            </h2>
            <p className="text-white mt-1">
              with Latest & Trendy Choices
            </p>
            <button  className="mt-4 w-fit bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
              Shop Now →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
