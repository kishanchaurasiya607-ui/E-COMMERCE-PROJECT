import { Link } from "react-router-dom";
import  mobiles from "../assets/phone.jpg"
import  Minutes from "../assets/Minutes.jpg"
import  TVs from "../assets/TVs.jpg"
import  Beauty from "../assets/Beauty.jpg"
import  Furniture from "../assets/Furniture.jpg"
import  Kitchen from "../assets/Kitchen.avif"
import  Flight from "../assets/Flight.jpg"
import  Grocery from "../assets/Grocery.jpg"

const CategorySection = () => {
  return (
   <div className="bg-white border-b">
  <div className="max-w-7xl mx-auto px-4 py-4">
    <div className="flex items-center justify-between gap-6 overflow-x-auto scrollbar-hide">

      <Link to="/minutes">
      <a  className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={Minutes}
          alt="Minutes"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Minutes
        </p>
      </a>
      </Link>

     <Link to="/Mobiles">
      <a href="src/Items/Mobiles.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={mobiles}
          alt="Mobiles"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Mobiles
        </p>
      </a>
      </Link>

      <Link to="/TVs&Appliances">
      <a href="src/Items/TVs&Appliances.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={TVs}
          alt="TVs & Appliances"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          TVs & Appliances
        </p>
      </a>
      </Link>

      <Link to="/Electronics">
      <a href="src/Items/Electronics.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/69c6589653afdb9a.png"
          alt="Electronics"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Electronics
        </p>
      </a>
      </Link>

     <Link to="/Fashion">
      <a href="src/Items/Fashion.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png"
          alt="Fashion"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Fashion
        </p>
      </a>
      </Link>

     <Link to="/Beauty&toys">
      <a href="src/Items/Beauty&toys.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={Beauty}
          alt="Beauty & toys"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Beauty & toys
        </p>
      </a>
      </Link>

      <Link to="/Furniture">
      <a href="src/Items/Furniture.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={Furniture}
          alt="Furniture"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Furniture
        </p>
      </a>
      </Link>
      
      <Link to="/Home&Kitchen">
      <a href="src/Items/Home&Kitchen.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={Kitchen}
          alt="Home & Kitchen"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Home & Kitchen
        </p>
      </a>
      </Link>
      
      <Link to="/FlightBookings">
      <a href="src/Items/FlightBookings.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={Flight}
          alt="Flight Bookings"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
         Flight Bookings
        </p>
      </a>
      </Link>

      <Link to="/Grocery">
      <a href="src/Items/Grocery.jsx" className="flex flex-col items-center min-w-[90px] cursor-pointer group">
        <img
          src={Grocery}
          alt="Grocery"
          className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <p className="mt-2 text-sm font-medium text-gray-900 group-hover:text-blue-600 text-center whitespace-nowrap">
          Grocery
        </p>
      </a>
       </Link>
    </div>
  </div>
</div>

    
  );
};

export default CategorySection;
