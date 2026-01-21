import { useState } from "react";

export default function EcommerceMenu() {
  const [active, setActive] = useState("");

  const handleClick = (name) => {
    setActive(name);
    console.log("Clicked:", name);
    alert(name);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout");
  };

  return (
    <div className="max-w-2xl bg-white rounded-lg shadow p-5 space-y-6">

      <h2 className="text-xl font-bold text-black">
        My Account
      </h2>
      
      <Section title="Account">
        <Item name="My Profile" active={active} onClick={handleClick} />
        <Item name="Edit Profile" active={active} onClick={handleClick} />
        <Item name="Saved Addresses" active={active} onClick={handleClick} />
        <Item name="Payment Methods" active={active} onClick={handleClick} />
      </Section>

      <Section title="Orders">
        <Item name="My Orders" active={active} onClick={handleClick} />
        <Item name="Track Order" active={active} onClick={handleClick} />
        <Item name="Cancel / Return" active={active} onClick={handleClick} />
        <Item name="Download Invoice" active={active} onClick={handleClick} />
      </Section>

      <Section title="Wishlist & Cart">
        <Item name="Wishlist" active={active} onClick={handleClick} />
        <Item name="My Cart" active={active} onClick={handleClick} />
        <Item name="Saved Items" active={active} onClick={handleClick} />
      </Section>

      <Section title="Payments">
        <Item name="Wallet" active={active} onClick={handleClick} />
        <Item name="Coupons" active={active} onClick={handleClick} />
        <Item name="Gift Cards" active={active} onClick={handleClick} />
      </Section>

      <Section title="Support">
        <Item name="Notifications" active={active} onClick={handleClick} />
        <Item name="Help Center" active={active} onClick={handleClick} />
        <Item name="Customer Support" active={active} onClick={handleClick} />
        <Item name="Chat with Us" active={active} onClick={handleClick} />
      </Section>

      <Section title="Settings">
        <Item name="Account Settings" active={active} onClick={handleClick} />
        <Item name="Change Password" active={active} onClick={handleClick} />
        <Item name="Privacy & Security" active={active} onClick={handleClick} />
        <Item name="Language" active={active} onClick={handleClick} />
      </Section>

      <div className="pt-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

/* SECTION */
function Section({ title, children }) {
  return (
    <div>
      <p className="text-sm font-bold text-black mb-3">
        {title}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {children}
      </ul>
    </div>
  );
}

/* ITEM */
function Item({ name, onClick, active }) {
  return (
    <li
      onClick={() => onClick(name)}
      className={`px-3 py-2 rounded cursor-pointer text-sm transition
        ${
          active === name
            ? "bg-blue-50 text-blue-600 font-medium"
            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }`}
    >
      {name}
    </li>
  );
}
