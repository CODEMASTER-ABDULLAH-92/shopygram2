import React from "react";
import Link from "next/link";

const categories = [
  "Electronics", "Clothing", "Jewelry", "Watches", "Home & Garden", "Kitchen", "Beauty", "Fitness",
  "Outdoor", "Books", "Toys", "Games", "Automotive", "Computers", "Arts & Crafts", "Baby Care",
  "Women's Fashion", "Men's Fashion", "Kids", "Health & Wellness", "Industrial", "Scientific", "Luggage",
  "Entertainment", "Pet Supplies", "Software", "Tools & DIY"
];

const Footer = () => {
  const half = Math.ceil(categories.length / 2);
  const firstHalf = categories.slice(0, half);
  const secondHalf = categories.slice(half);

  return (
    <div className="bg-[#800000] text-white pt-14 px-6 md:px-12 lg:px-20">
      {/* Upper Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16">
        
        {/* Brand & Description */}
        <div className="lg:col-span-2">
          <Link href="/" className="text-3xl font-bold text-white hover:text-gray-200 transition-colors">
            Shopygram
          </Link>
          <p className="pt-4 text-gray-200 leading-relaxed max-w-2xl">
            Shopygram is your premier destination for trusted affiliate shopping. We curate high-quality 
            products across diverse categories, connecting you with reputable brands while ensuring a 
            seamless shopping experience. Discover everything from cutting-edge electronics to fashion 
            essentials, all with the confidence of our commitment to excellence and customer satisfaction.
          </p>

          {/* Social Icons */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {[
                { 
                  name: "Facebook", 
                  icon: "M24 12.073c0 6.023-4.327 11.032-10 12.151v-8.596h3v-3.555h-3V9.432c0-1.976 1.176-3.068 3.022-3.068.875 0 1.791.156 1.791.156v1.961h-1.009c-.994 0-1.304.617-1.304 1.25v1.5h2.219l-.355 3.555h-1.864v8.596C4.327 23.105 0 18.096 0 12.073c0-6.627 5.373-12 12-12s12 5.373 12 12z" 
                },
                { 
                  name: "Instagram", 
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
                },
                { 
                  name: "Twitter", 
                  icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" 
                },
                { 
                  name: "YouTube", 
                  icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" 
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Quick Links</h2>
          <ul className="space-y-3">
            {[
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Blog", href: "/blog" },
              { name: "FAQ", href: "/faq" },
              { name: "Shipping Info", href: "/shipping" },
              { name: "Returns", href: "/returns" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="hover:text-gray-300 block py-1.5 transition-all duration-200 hover:translate-x-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-bold mb-6 pb-2 border-b border-white/20">Shop Categories</h2>
          <div className="grid grid-cols-2 gap-x-6">
            <ul className="space-y-2.5">
              {firstHalf.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-gray-300 transition-all duration-200 hover:translate-x-1.5 block capitalize text-sm py-1.5"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {secondHalf.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-gray-300 transition-all duration-200 hover:translate-x-1.5 block capitalize text-sm py-1.5"
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
      <div className="border-t border-white/20 pt-6 pb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-200 text-center md:text-left">
            © {new Date().getFullYear()} Shopygram. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-200">
            <span  className="hover:text-white transition-colors">Sitemap</span>
            <span  className="hover:text-white transition-colors">Accessibility</span>
            <span  className="hover:text-white transition-colors">Affiliate Program</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;