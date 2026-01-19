const deals = [
  {
    title: "Instant geysers",
    name: "Crompton, hindware...",
    price: "From ₹1,999",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/water-geyser/b/p/0/-original-imagzrf2gheaters.jpeg",
  },
  {
    title: "prepaids | super coins",
    name: "Best selling washing machines",
    price: "From ₹6,790",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/h/x/x/-original-imagzt8wyheater.jpeg",
  },
  {
    title: "Best Deal from motorola",
    name: "edge 60 Fusion (256GB)",
    price: "Just ₹19,999",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/mobile/1/u/y/-original-imagzjh6motorola.jpeg",
  },
  {
    title: "Top selling soundbars",
    name: "Feel like theatre vibe",
    price: "From ₹3,499",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/speaker/soundbar/q/9/2/-original-imagzt8wsoundbar.jpeg",
  },
  {
    title: "Biggest deal of the sale",
    name: "Apple Macbook M2",
    price: "Just ₹64,799",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/computer/z/l/2/-original-imagzjh6macbook.jpeg",
  },
  {
    title: "Deals on earbuds",
    name: "realme, Goboult & more",
    price: "From ₹699",
    img: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/earbud/y/4/u/-original-imagzt8wearbuds.jpeg",
  },
];

export default function BigDealsSection() {
  return (
    <section className="px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map((item, i) => (
          <div
            key={i}
            className="relative h-[230px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 text-white transform transition duration-300 hover:scale-[1.03] cursor-pointer"
          >
            {/* TEXT */}
            <div className="p-5 z-10 relative">
              <p className="text-sm opacity-90">{item.title}</p>
              <h3 className="text-xl font-semibold leading-tight">
                {item.name}
              </h3>
              <p className="text-lg font-bold mt-1">{item.price}</p>
            </div>

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="absolute right-4 bottom-3 h-[150px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
