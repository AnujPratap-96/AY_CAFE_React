import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social icons
import { useSelector } from 'react-redux'; // Importing useSelector

export default function Footer() {
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  return (
    <footer 
      style={{ 
        backgroundColor: theme.backgroundColor, 
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' // Apply the shadow directly here
      }} 
      className="text-white py-2 bottom-0 w-full relative" // Removed shadow-md to avoid conflict
    >
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        
        {/* Company Info */}
        <div className="text-center mb-3" style={{ color: theme.textColor }}>
          <h1 className="text-2xl font-bold tracking-wider">AY CAFE</h1>
          <p className="text-sm mt-2">© 2024 All rights reserved</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition duration-300"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Made by Section */}
        <div className="text-center" style={{ color: theme.subtextColor }}>
          <p className="text-sm">
            Made with ❤️ by <span className="font-semibold">Anuj Pratap Singh 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
