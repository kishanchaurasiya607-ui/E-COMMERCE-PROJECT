import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [accordion, setAccordion] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [linksData, setLinksData] = useState(null);

  const year = new Date().getFullYear();

  // 1) Theme logic
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.add(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // 2) Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTop(true);
      else setShowTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3) Mock API fetch for footer links
  useEffect(() => {
    const fetchLinks = async () => {
      await new Promise((res) => setTimeout(res, 800));
      const data = {
        sections: [
          {
            title: "Customer Support",
            links: [
              { label: "Help Center", href: "/help" },
              { label: "Track Order", href: "/track-order" },
              { label: "Returns", href: "/returns" },
              { label: "Shipping Info", href: "/shipping" },
              { label: "Contact Us", href: "/contact" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Press", href: "/press" },
              { label: "Blog", href: "/blog" },
            ],
          },
          {
            title: "Quick Links",
            links: [
              { label: "Men", href: "/category/men" },
              { label: "Women", href: "/category/women" },
              { label: "Electronics", href: "/category/electronics" },
              { label: "Home & Kitchen", href: "/category/home" },
              { label: "Today's Offers", href: "/offers" },
            ],
          },
        ],
      };
      setLinksData(data);
    };
    fetchLinks();
  }, []);

  // 4) Newsletter API integration (mock)
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMsg("Please enter a valid email.");
      return;
    }
    setMsg("Subscribing...");
    await new Promise((res) => setTimeout(res, 1200));
    setMsg("Subscribed successfully!");
    setEmail("");
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-gray-200 dark:bg-white dark:text-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {/* Theme Switch */}
        <div className="md:col-span-4 flex justify-end">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
          >
            Theme: {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>

        {/* Dynamic Footer Sections */}
        {linksData?.sections?.map((sec, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="border border-gray-800 dark:border-gray-200 p-4 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold mb-2 text-white dark:text-gray-900">{sec.title}</h4>
              <button
                className="sm:hidden text-xl"
                onClick={() => setAccordion(accordion === index ? null : index)}
              >
                {accordion === index ? "−" : "+"}
              </button>
            </div>

            <ul className="space-y-1 sm:block hidden">
              {sec.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:underline hover:text-white dark:hover:text-gray-900 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {accordion === index && (
              <ul className="space-y-1 sm:hidden">
                {sec.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:underline hover:text-white dark:hover:text-gray-900 transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* Newsletter + Social + Payments + App */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.4 }}
          className="border border-gray-800 dark:border-gray-200 p-4 rounded-lg"
        >
          <h4 className="font-semibold mb-2 text-white dark:text-gray-900">Connect With Us</h4>

          {/* Social icons */}
          <div className="flex space-x-3 mb-3">
            {["FB", "IG", "TW", "TG"].map((item, idx) => (
              <motion.a
                key={idx}
                href="/"
                className="p-2 rounded-full border border-gray-700 dark:border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Newsletter */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Subscribe to our newsletter"
              className="w-full sm:flex-1 px-3 py-2 rounded bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium transition">
              Subscribe
            </button>
          </form>

          {msg && (
            <p className={`mt-2 text-sm ${msg.includes("success") ? "text-green-400" : "text-red-400"}`}>
              {msg}
            </p>
          )}

          {/* Payment Icons */}
          <div className="mt-4">
            <h4 className="font-semibold text-white dark:text-gray-900 mb-2">Payments</h4>
            <div className="flex gap-3">
              {["Visa", "Mastercard", "PayPal", "UPI"].map((p, i) => (
                <motion.div
                  key={i}
                  className="px-3 py-2 border border-gray-700 dark:border-gray-200 rounded"
                  whileHover={{ scale: 1.05 }}
                >
                  {p}
                </motion.div>
              ))}
            </div>
          </div>

          {/* App Download Buttons */}
          <div className="mt-4">
            <h4 className="font-semibold text-white dark:text-gray-900 mb-2">Download App</h4>
            <div className="flex gap-3">
              <motion.a
                href="/"
                className="px-4 py-2 border border-gray-700 dark:border-gray-200 rounded"
                whileHover={{ scale: 1.05 }}
              >
                Play Store
              </motion.a>
              <motion.a
                href="/"
                className="px-4 py-2 border border-gray-700 dark:border-gray-200 rounded"
                whileHover={{ scale: 1.05 }}
              >
                App Store
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 dark:border-gray-200 mt-6 pt-4 pb-6">
        <div className="max-w-6xl mx-auto px-4 text-xs text-gray-400 dark:text-gray-600 flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-200 dark:hover:text-gray-900 transition">Terms</a>
            <a href="/" className="hover:text-gray-200 dark:hover:text-gray-900 transition">Privacy</a>
            <a href="/" className="hover:text-gray-200 dark:hover:text-gray-900 transition">Cookies</a>
          </div>
          <div>© {year} myshop. All rights reserved.</div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTop && (
        <motion.button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          ↑ Top
        </motion.button>
      )}

      {/* Live Chat (WhatsApp) */}
      <motion.a
        href="https://wa.me/917985395009"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Chat
      </motion.a>
    </footer>
  );
};

export default Footer;
