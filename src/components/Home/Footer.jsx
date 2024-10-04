// components/Footer.jsx
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-blue-600">DOCCURE</h2>
          <p className="text-gray-600 mt-2 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Specialities */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Specialities</h3>
          <ul className="space-y-2">
            {['Neurology', 'Cardiologist', 'Dentist', 'Urology'].map((item) => (
              <li key={item} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">{item}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
          <ul className="space-y-2">
            {['Medical', 'Operation', 'Laboratory', 'ICU'].map((item) => (
              <li key={item} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center"><MapPin className="mr-2" /> 3556 Beech Street, USA</li>
            <li className="flex items-center"><Phone className="mr-2" /> +1 315 369 5943</li>
            <li className="flex items-center"><Mail className="mr-2" /> doccure@example.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
          <div className="flex w-full mb-4">
            <input type="email" placeholder="Enter Email" className="p-2 w-48 rounded-l-md border border-gray-300 focus:outline-none" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">SUBMIT</button>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <div key={index} className="bg-gray-100 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Icon className="text-gray-600 hover:text-white" size={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-200 pt-6 mt-8">
        <p className="text-gray-600">&copy; 2024 Doccure. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms and Conditions</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

