import { Link } from "react-router-dom";

function About() {
    return (
        <section className="dark:bg-gray-100 px-12 md:px-6 dark:text-gray-800">
  <div className="lg:px-10 max-lg:px-0 py-5 relative flex justify-end max-lg:justify-center items-center">
    <img
      className="h-98 object-cover w-full max-lg:opacity-50"
      src="https://itsnotebookapp.netlify.app/assets/about-ItoOAqtu.jpg"
      alt=""
    />
    <div className="absolute lg:right-0 pr-14 w-1/3 max-lg:w-full max-lg:px-12 text-center">
      <h1 className="text-5xl max-lg:text-3xl max-lg:text-black text-white font-lightbold">
        Smart Online Shopping
      </h1>
      <p className="mt-6 mb-8 max-lg:text-black text-white text-lg sm:mb-12">
        Best quality products, secure payments and fast delivery at one place
      </p>
    </div>
  </div>

  <div className="container flex flex-col-reverse justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h1 className="text-5xl font-bold leading-none sm:text-4xl">
        Shop Something
        <span className="dark:text-rose-600"> Amazing</span>
      </h1>
      <p className="mt-6 mb-8 text-lg sm:mb-12">
        Explore electronics, gadgets, fashion and daily-use products at best price.
        Add products to cart and enjoy hassle-free shopping anytime, anywhere.
      </p>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <Link to="/cart" className="px-8 py-3 text-lg font-semibold border rounded bg-rose-500 text-white dark:border-rose-800">
          🛒 View Cart
        </Link>
      </div>
    </div>

    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img
        src="https://itsnotebookapp.netlify.app/assets/about%20-%20awesome-Carwd-T-.jpeg"
        alt=""
        className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      />
    </div>
  </div>

  
  <div className="container py-12 mx-auto ">
    <h1 className="text-4xl font-bold text-center mb-10">
      Our <span className="dark:text-rose-600">Products</span>
    </h1>
    
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
   
    {[ 
  { name: "Wireless Headphones", img: "https://images.unsplash.com/photo-1518443895471-1c7c0b0c3d8d" },
  { name: "Smart Watch", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { name: "Bluetooth Speaker", img: "https://images.unsplash.com/photo-1585386959984-a4155228f1a2" },
  { name: "Laptop Backpack", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f" },
  { name: "Gaming Mouse", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" },
  { name: "Mechanical Keyboard", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { name: "Mobile Stand", img: "https://images.unsplash.com/photo-1585238342028-4bbc8c1d8a1f" },
  { name: "Power Bank", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6" },
  { name: "Fast USB Charger", img: "https://images.unsplash.com/photo-1580910051074-7c1b9c2e8d54" },
  { name: "Wireless Earbuds", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df" },
  { name: "Phone Cover", img: "https://images.unsplash.com/photo-1606813902917-1a5fdbbd94b1" },
  { name: "Tablet Holder", img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e" },
  { name: "Smart Desk Lamp", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c" },
  { name: "HD Web Camera", img: "https://images.unsplash.com/photo-1580894908360-1a9c1e64e52c" },
  { name: "Camera Tripod", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { name: "Fitness Band", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a" },
  { name: "Desk Organizer", img: "https://images.unsplash.com/photo-1587614382346-ac3b0bdb6d8c" },
  { name: "Portable SSD", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d4" },
  { name: "VR Headset", img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620" },
  { name: "Smart Plug", img: "https://images.unsplash.com/photo-1581092334701-5c5b4e5aaf5d" },
].map((product, index) => (
  <div key={index} className="bg-white rounded shadow p-4 text-center ">
    <img
      src={product.img}
      alt={product.name}
      className="h-40 w-full object-cover rounded mb-4 "
    />

    <h2 className="text-lg font-semibold ">
      {product.name}
    </h2>

    <p className="text-gray-700 font-bold">
      ₹ {(index + 1) * 499}
    </p>

    <p className="text-sm text-gray-500 mt-1">
      Email:
      <span className="block font-medium text-gray-700">
        product{index + 1}@shop.com
      </span>
    </p>

    <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-rose-500 text-white rounded">
      🛒 Add to Cart
    </button>
  </div>
))}
   </div>
   
  </div>

  <div className="container flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img
        src="https://itsnotebookapp.netlify.app/assets/Information-B7MgrKVK.png"
        alt=""
        className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
      />
    </div>

    <div className="flex flex-col justify-center py-6 pr-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h1 className="text-5xl font-bold leading-none sm:text-4xl">
        Secure & Fast
        <span className="dark:text-rose-600"> Checkout</span>
      </h1>
      <p className="mt-6 mb-8 text-lg sm:mb-12">
        100% secure payments, easy returns and customer support via email anytime.
      </p>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <Link to="/signup" className="px-8 py-3 text-lg font-semibold border rounded bg-rose-500 text-white dark:border-rose-800">
          Start Shopping
        </Link>
      </div>
    </div>
  </div>
</section>

    );
}

export default About;