import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#800000] text-white pt-14 px-6 md:px-12 lg:px-20">
      {/* Upper side */}
      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 pb-20">
        {/* Logo + description + Newsletter */}
        <div>
          <Link href={"/"} className="text-2xl font-medium text-white">VÉON</Link>
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

          {/* Social Media Icons */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 6 4.39 10.96 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.02 1.8-4.68 4.54-4.68 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87v2.25h3.32l-.53 3.47h-2.8v8.38C19.61 23.03 24 18.07 24 12.07z" },
                { name: "Instagram", icon: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.25-1.69 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.25 1.69-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.27 0-3.68.01-4.96.07-4.08.2-5.7 1.82-5.9 5.9-.06 1.28-.07 1.69-.07 4.96s.01 3.68.07 4.96c.2 4.08 1.82 5.7 5.9 5.9 1.28.06 1.69.07 4.96.07s3.68-.01 4.96-.07c4.08-.2 5.7-1.82 5.9-5.9.06-1.28.07-1.69.07-4.96s-.01-3.68-.07-4.96c-.2-4.08-1.82-5.7-5.9-5.9-1.28-.06-1.69-.07-4.96-.07zm0 5.18a6.14 6.14 0 1 0 0 12.28 6.14 6.14 0 0 0 0-12.28zm0 10.12a3.98 3.98 0 1 1 0-7.96 3.98 3.98 0 0 1 0 7.96zm6.24-10.12a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86z" },
                { name: "Twitter", icon: "M23.95 4.57c-.89.39-1.83.65-2.83.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.77.12 1.13-4.09-.2-7.71-2.16-10.14-5.14-.42.72-.66 1.56-.66 2.46 0 1.7.87 3.2 2.18 4.08-.8-.03-1.56-.24-2.22-.61v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.82 2.11-6.13 2.11-.4 0-.79-.02-1.18-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.02-.63.96-.69 1.79-1.56 2.45-2.55z" },
                { name: "TikTok", icon: "M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" }
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
            <li>
              <Link href="/about" className="hover:text-gray-300 transition hover:translate-x-1 block">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-300 transition hover:translate-x-1 block">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Policies</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/affiliate-disclosure" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Affiliate Disclosure
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Clothing Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Clothing</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/category/all" className="hover:text-gray-300 transition hover:translate-x-1 block">
                All
              </Link>
            </li>
            <li>
              <Link href="/category/shirts" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Shirts
              </Link>
            </li>
            <li>
              <Link href="/category/tshirts" className="hover:text-gray-300 transition hover:translate-x-1 block">
                T-Shirts
              </Link>
            </li>
            <li>
              <Link href="/category/bottoms" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Bottoms
              </Link>
            </li>
            <li>
              <Link href="/category/coats-jackets" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Coats & Jackets
              </Link>
            </li>
            <li>
              <Link href="/category/knitwear" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Knitwear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/payment-methods" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Payment Methods
              </Link>
            </li>
            <li>
              <Link href="/returns-refunds" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Shipping Details
              </Link>
            </li>
            <li>
              <Link href="/size-guide" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Size Guide
              </Link>
            </li>
            <li>
              <Link href="/care-guide" className="hover:text-gray-300 transition hover:translate-x-1 block">
                Care Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Side */}
      <div className="border-t border-white/20 pt-8 pb-6 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-gray-200">Accepted Payments:</span>
            <div className="flex gap-2">
              {["💳", "🛡️", "📱", "🔒"].map((icon, index) => (
                <span key={index} className="text-lg">{icon}</span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-200 text-center">
            © {new Date().getFullYear()} VÉON. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Link href="/sitemap" className="text-gray-200 hover:text-white transition">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-gray-200 hover:text-white transition">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;