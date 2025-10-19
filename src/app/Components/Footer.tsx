import React from "react";
import Link from "next/link";

const categories = [
  "Electronics", "Clothes", "Jewelry", "Watches", "Home", "Kitchen", "Beauty", "Sports",
  "Outdoors", "Books", "Toys", "Games", "Automotive", "Computers", "Arts", "Baby",
  "Women", "Boys", "Girls", "Mens", "Health", "Industrial", "Scientific", "Luggage",
  "Movies", "Pet", "Software", "Tools"
];

const Footer = () => {
  // Split categories into two roughly equal columns
  const half = Math.ceil(categories.length / 2);
  const firstHalf = categories.slice(0, half);
  const secondHalf = categories.slice(half);

  return (
    <div className="bg-[#800000] text-white pt-14 px-6 md:px-12 lg:px-20">
      {/* Upper Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_2fr] gap-10 pb-20">
        
        {/* Brand + Newsletter + Socials */}
        <div>
          <Link href="/" className="text-2xl font-medium text-white">VÉON</Link>
          <p className="pt-2 text-gray-200">
            Sign-up to receive the latest <br /> news from Véon.
          </p>

          {/* Newsletter Signup */}
          <div className="mt-6 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-white/40 placeholder-gray-300"
            />
            <button className="px-5 py-3 bg-white text-[#800000] font-medium rounded-lg hover:bg-gray-100 transition w-full max-w-xs">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 6 4.39 10.96 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.02 1.8-4.68 4.54-4.68 1.31 0 2.68.23 2.68.23v2.95h-1.51..." },
                { name: "Instagram", icon: "M12 2.16c3.2 0 3.58..." },
                { name: "Twitter", icon: "M23.95 4.57c-.89.39..." },
                { name: "TikTok", icon: "M12.53.02C13.84 0..." },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-gray-300 block">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300 block">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300 block">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-gray-300 block">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gray-300 block">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-gray-300 block">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Categories (Two Columns) */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-x-10">
            <ul className="space-y-3">
              {firstHalf.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${cat}`}
                    className="hover:text-gray-300 transition hover:translate-x-1 block capitalize"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {secondHalf.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${cat}`}
                    className="hover:text-gray-300 transition hover:translate-x-1 block capitalize"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 pt-8 pb-6 text-sm">
          <p className="text-gray-200 text-center">
            © {new Date().getFullYear()} Shopygram. All rights reserved.
          </p>



      </div>
    </div>
  );
};

export default Footer;
