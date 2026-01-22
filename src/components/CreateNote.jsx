import axios from "axios";
import { useContext, useState } from "react";
import { BaseUrl } from "../BaseUrls";
import authContext from "../context/authContext";
import { useNotes } from "../context/NoteState";
import { Link } from "react-router-dom";

const CreateNote = () => {

    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: "",
        image: ""
    })
    const [isPublic, setIsPublic] = useState(false);

    const { token } = useContext(authContext)
    const { createNotes } = useNotes()

    const submitHandlers = (e) => {
        e.preventDefault()
        createNotes(note, isPublic, setNote)
    }

    console.log(token)


    const changeHandler = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
       
<div className="mt-10 w-full">
  <h2 className="text-2xl font-bold mb-6 text-center">Products</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      { name: "Wireless Headphones", price: 1499, img: "https://images.unsplash.com/photo-1518443895471-1c7c0b0c3d8d" },
      { name: "Smart Watch", price: 2999, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
      { name: "Bluetooth Speaker", price: 1999, img: "https://images.unsplash.com/photo-1585386959984-a4155228f1a2" },
      { name: "Laptop Backpack", price: 999, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f" },
      { name: "Gaming Mouse", price: 899, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04" },
      { name: "Mechanical Keyboard", price: 2499, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
      { name: "Mobile Stand", price: 399, img: "https://images.unsplash.com/photo-1585238342028-4bbc8c1d8a1f" },
      { name: "Power Bank", price: 1299, img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6" },
    ].map((product, index) => (
      <div key={index} className="bg-white rounded shadow p-4 text-center">
        <img
          src={product.img}
          alt={product.name}
          className="h-40 w-full object-cover rounded mb-4"
        />

        <h2 className="text-lg font-semibold">
          {product.name}
        </h2>

        <p className="text-gray-700 font-bold">
          ₹ {product.price}
        </p>

        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
           Add to Cart
        </button>
        <button
           
            className="mt-3 w-full bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500"
            >
              Buy now
              </button>
      </div>
    ))}
  </div>
</div>

    );
};

export default CreateNote;
