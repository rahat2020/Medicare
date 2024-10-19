'use client'
import useMediaQuery from "@/hooks/useMediaQuery";
import { getCurrentYear } from "@/utils/appHelpers";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Map, Phone, Twitter } from "react-feather";

const Footer = () => {
  const isMobileScreen = useMediaQuery('(max-width:768px)');
  return (
    <footer className="bg-gradient-to-r from-blue-50  text-gray-700 pt-10 pb-6 px-">
      {/* Subscription Section */}
      {
        !isMobileScreen &&
        <div className=" md:flex md:items-center md:justify-center px-8 md:px-40 -mt-20">
          <div className="bg-blue-500 text-white min-w-[33.33rem] max-w-[86.66rem] py-6 px-4 rounded-2xl ">
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center space-y-4 md:space-y-0">
              <h2 className="text-2xl font-semibold">
                Subscribe for the Exclusive Updates!
              </h2>
              <div className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 rounded-full text-gray-800 outline-none"
                />
                <button className="bg-white text-blue-500 rounded-full px-6 py-2 font-semibold hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      }

      {/* Footer Links Section */}
      <div className="container mx-auto px-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="">
              <Link href="/">
                <Image
                  src={'/assets/MEDICARE_HALF.png'}
                  alt="logo"
                  width={175}
                  height={80}
                  quality={100}
                  priority={true}
                />
              </Link>
            </div>
            <p className="text-gray-600 mb-4">
              There are to popular belie Lorem is Ipsum is not simply random.
            </p>
            <p className="mb-2">Hello to: <a href="mailto:support@gmail.com" className="text-blue-500">support@gmail.com</a></p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-icons-facebook" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-icons-twitter" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-icons-instagram" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-icons-linkedin" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-800">Home</a></li>
              <li><a href="#" className="hover:text-blue-700">About Us</a></li>
              <li><a href="#" className="hover:text-blue-700">Our Service</a></li>
              <li><a href="#" className="hover:text-blue-700">Our Team</a></li>
              <li><a href="#" className="hover:text-blue-700">Contact Us</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-semibold mb-2">Important</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-700">Our Process</a></li>
              <li><a href="#" className="hover:text-blue-700">Appointment</a></li>
              <li><a href="#" className="hover:text-blue-700">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-700">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-700">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Link</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-700">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-blue-700">Pricing Plan</a></li>
              <li><a href="#" className="hover:text-blue-700">News & Articles</a></li>
              <li><a href="#" className="hover:text-blue-700">Login</a></li>
              <li><a href="#" className="hover:text-blue-700">Subscribe</a></li>
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="font-semibold mb-2">Official Info</h3>
            <ul>
              <li className="mb-1 flex items-center">
                <span className="mr-2">
                  <Map className="w-4 h-4 text-blue-500" />
                </span> Mirpur-12 Dahaka, Bangladesh
              </li>
              <li className="mb-1 flex items-center">
                <span className="mr-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                </span> <a href="mailto:company@gmail.com" className="hover:text-blue-700">medicare@gmail.com</a>
              </li>
              <li className="mb-1 flex items-center">
                <span className="mr-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                </span> +965548547564
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
          <p>&copy; {getCurrentYear} Madicare. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-700">Terms and conditions</a>
            <a href="#" className="hover:text-blue-700">Cookies</a>
            <a href="#" className="hover:text-blue-700">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;