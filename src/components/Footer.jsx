import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-gray-300 text-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        
       
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">About</h3>
          <ul className="space-y-2 text-white">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">
            Group Companies
          </h3>
          <ul className="space-y-2 text-white">
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">Help</h3>
          <ul className="space-y-2 text-white">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">
            Consumer Policy
          </h3>
          <ul className="space-y-2 text-white">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
            <li>FSSAI Food Safety Connect App</li>
          </ul>
        </div>

        
        <div className="border-l border-gray-600 pl-6">
          <h3 className="text-gray-400 mb-3 uppercase text-xs">Mail Us</h3>
          <p className="text-white leading-6">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road,<br />
            Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>

          <div className="mt-4">
            <h3 className="text-gray-400 mb-2 uppercase text-xs">Social</h3>
            <div className="flex gap-4 text-white text-lg">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>

      
        <div>
          <h3 className="text-gray-400 mb-3 uppercase text-xs">
            Registered Office Address
          </h3>
          <p className="text-white leading-6">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road,<br />
            Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: <span className="text-blue-400">044-45614700</span>
          </p>
        </div>
      </div>

   
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          
          <div className="flex gap-8 text-sm">
            <span>Become a Seller</span>
            <span>Advertise</span>
            <span>Gift Cards</span>
            <span>Help Center</span>
          </div>

          <p className="text-xs">© 2007–2026 Flipkart.com</p>
        </div>
      </div>
    </footer>
  );
}
