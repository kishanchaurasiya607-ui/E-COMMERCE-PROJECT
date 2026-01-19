const appliances = [
  {
    name: '55" 4K TVs',
    price: 'From ₹19,749',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/z/r/-original-imagttg7tcltv.jpeg',
  },
  {
    name: 'Best-selling Refrigerators',
    price: 'From ₹9,990',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/v/k/j/-original-imagzrf2fridge.jpeg',
  },
  {
    name: 'Microwave Ovens',
    price: 'From ₹4,990',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/microwave-new/z/p/6/-original-imagzt8wmicro.jpeg',
  },
  {
    name: 'Kitchen Essentials',
    price: 'From ₹299',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mixer-grinder-juicer/s/5/x/-original-imagzjh6mixer.jpeg',
  },
  {
    name: 'Water Purifier',
    price: 'From ₹2,712',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/water-purifier/a/p/q/-original-imagzrf2purifier.jpeg',
  },
  {
    name: 'Fans & Geysers',
    price: 'From ₹799',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/water-geyser/g/e/r/-original-imagzt8wgeyser.jpeg',
  },
  {
    name: 'Energy efficient ACs',
    price: 'From ₹19,990',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/f/h/3/-original-imagzrf2ac.jpeg',
  },

  {
    name: 'Front Load Washing Machines',
    price: 'From ₹21,499',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/y/6/j/-original-imagzt8wwashing.jpeg',
  },
  {
    name: 'Top Load Washing Machines',
    price: 'From ₹12,990',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/u/z/p/-original-imagzrf2topload.jpeg',
  },
  {
    name: 'Air Coolers',
    price: 'From ₹5,499',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/air-cooler/j/k/v/-original-imagzt8wcooler.jpeg',
  },
  {
    name: 'Vacuum Cleaners',
    price: 'From ₹3,299',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/vacuum-cleaner/x/2/1/-original-imagzjh6vacuum.jpeg',
  },
  {
    name: 'Induction Cooktops',
    price: 'From ₹1,499',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/induction-cook-top/a/3/5/-original-imagzt8winduction.jpeg',
  },
  {
    name: 'Electric Kettles',
    price: 'From ₹699',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/electric-kettle/6/p/f/-original-imagzrf2kettle.jpeg',
  },
  {
    name: 'Room Heaters',
    price: 'From ₹1,099',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/room-heater/y/e/r/-original-imagzt8wheater.jpeg',
  },
  {
    name: 'Chimneys',
    price: 'From ₹6,999',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/chimney/9/q/r/-original-imagzjh6chimney.jpeg',
  },
  {
    name: 'Dishwashers',
    price: 'From ₹23,990',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/dishwasher-new/h/8/7/-original-imagzrf2dishwasher.jpeg',
  },
  {
    name: 'OTG Ovens',
    price: 'From ₹3,799',
    img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/otg-new/q/x/p/-original-imagzt8wotg.jpeg',
  },
];


export default function AppliancesSection() {
  return (
    <section className="px-6 py-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Appliances</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {appliances.map((item, index) => (
          <div
            key={index}
            className="min-w-[170px] text-center cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-[140px] mx-auto object-contain"
            />
            <h3 className="text-sm font-medium mt-3">{item.name}</h3>
            <p className="text-sm font-semibold text-gray-800">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
