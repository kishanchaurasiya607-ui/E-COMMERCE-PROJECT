import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import authContext from "../context/authContext";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeState";
import SideBar from "./SideBar";

const Navbar = () => {

    const { theme, darkModefun, lightModefun } = useTheme()

    const [open, setOpen] = useState(false);

    const { token, setToken } = useContext(authContext)
    console.log(token)
    const navigate = useNavigate()

    // function logoutHandler() {
    //     localStorage.removeItem('token')
    //     setToken("")
    //     navigate('/login')
    // }

    function toggleTheme() {
        // if(theme=="light"){
        //     darkModefun()
        // }
        // else{
        //     lightModefun()
        // }
        theme == "light" ? darkModefun() : lightModefun()
    }


    return (
      <div>
  <SideBar open={open} setOpen={setOpen} navigate={navigate} />

  <header className="p-4 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 shadow">
    <div className="container flex justify-between h-16 mx-auto">

      
      <NavLink
        to="/"
        aria-label="Back to homepage"
        className="flex items-center p-2 gap-2"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path d="M3 3h18l-2 13H5L3 3zM5 21a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
        <span className="font-bold text-lg">MyShop</span>
      </NavLink>

      
      <div className="flex items-center max-lg:hidden -mx-4 overflow-x-auto">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-rose-600" : ""}
             px-5 py-3 flex items-center gap-2`
          }
        >
           <span>Home</span>
        </NavLink>

        <NavLink
          to="notes"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-rose-600" : ""}
             px-5 py-3 flex items-center gap-2`
          }
        >
           <span>Products</span>
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-rose-600" : ""}
             px-5 py-3 flex items-center gap-2`
          }
        >
           <span>About Store</span>
    </NavLink>

        <NavLink
        to="AddCart"
       className={({ isActive }) =>
    `${isActive ? "border-b-2 border-rose-600" : ""}
     px-5 py-3 flex items-center gap-2`
        }
       >
        <span>🛒</span>
        </NavLink>

        <NavLink
          to="contact"
          className={({ isActive }) =>
            `${isActive ? "border-b-2 border-rose-600" : ""}
             px-5 py-3 flex items-center gap-2`
          }
        >
          📞 <span>Support</span>
        </NavLink>
      </div>

      
      <div className="flex items-center md:space-x-4">

       
        <span className="cursor-pointer mr-4" onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </span>

      
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            🔍
          </span>
          <input
            type="search"
            placeholder="Search products..."
            className="w-40 py-2 pl-8 pr-2 text-sm rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800"
          />
        </div>

        
        {token ? (
          <img
            className="h-12 w-12 mx-4 rounded-full cursor-pointer"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile"
            onClick={() => setOpen(true)}
          />
        ) : (
          <NavLink
            to="/login"
            className="hidden px-6 py-2 font-semibold rounded lg:block bg-rose-600 text-white"
          >
            Login
          </NavLink>
        )}

        <button
        className="p-4 lg:hidden"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      </div>
    </div>
  </header>
</div>

    );
};

export default Navbar;