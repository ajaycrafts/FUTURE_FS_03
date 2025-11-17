export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Sports</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Training</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Order Status</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700 transition">F</div>
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700 transition">I</div>
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-700 transition">X</div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Nike Rebrand — Designed by You
      </div>
    </footer>
  );
}
