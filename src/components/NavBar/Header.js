import { FaBars, FaTimes, FaWifi, FaUser, FaTimesCircle, FaHome, FaInfoCircle, FaPhone, FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AY_CAFE from "../../../public/AY_CAFE.webp";
import useOnline from "../hooks/useOnline";
import { UserContext } from '../hooks/UserContext';
import { useSelector, useDispatch } from 'react-redux';
import { RxCaretDown } from "react-icons/rx";
import { handleClick } from '../hooks/useGetLogitude-latitude';
import { toggleTheme } from '../store/sidebarSlice';

export default function Header() {
  const isOnline = useOnline();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, username, logout } = useContext(UserContext); 
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const city = useSelector((store) => store.sidebar.cityName);
  const state = useSelector((store) => store.sidebar.state);
  const theme = useSelector((store) => store.sidebar.theme);
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);
  const [cityName, setCityName] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const showSideMenu = () => setToggle(true);
  const hideSideMenu = () => setToggle(false);

  // Logout handler
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/'); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      {/* Sidebar Overlay */}
      <div
        className={`w-full h-full fixed top-0 left-0 z-50 duration-500 ${toggle ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={hideSideMenu}
      >
        <div
          className="w-[300px] h-full fixed left-0 top-0 z-50 duration-[400ms] p-6 shadow-lg"
          style={{ transform: toggle ? "translateX(0)" : "translateX(-100%)", backgroundColor: theme.backgroundColor }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar content */}
          <div className="w-full">
            <div className="flex flex-col items-center gap-4 mt-10">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{color : theme.textColor , backgroundColor : theme.backgroundColor}}
                placeholder="Search for city..."
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
              />
              <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-300" onClick={() => handleClick(cityName, dispatch)}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="shadow-lg sticky top-0 z-40 py-3 px-4" style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          
          {/* Container for Logo and City/State Details */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img data-testid="logo" className="w-16 h-16 sm:w-25 sm:h-25 object-cover ml-0 sm:ml-5 rounded-full" src={AY_CAFE} alt="Restaurant Logo" />
            </NavLink>

            {/* Sidebar toggle (show only city on small screens) */}
            <div className="cursor-pointer flex" onClick={showSideMenu} style={{ color: theme.subtextColor }}>
              <span className="sm:hidden">{city}, {state}</span> 
              <span className="hidden sm:inline"><span className='text-orange-500 underline decoration-orange decoration-2'>{city}</span>, {state}, India</span> {/* Show full city and state on larger screens */}
              <RxCaretDown fontSize={25} className="text-[#ec8f43]" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center justify-between text-lg font-semibold gap-5">
            <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'}>
              <FaHome className="inline-block mr-2" />Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'}>
              <FaInfoCircle className="inline-block mr-2" />About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'}>
              <FaPhone className="inline-block mr-2" />Contact Us
            </NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'}>
              <FaShoppingCart className="inline-block mr-2" />Cart<sup data-testid="cart-id" className="text-orange-400 font-semibold">{cartItems.length}</sup>
            </NavLink>
            
            {/* Online Status */}
            <p data-testid="online-status" className="hidden lg:flex items-center" style={{ color: theme.subtextColor }}>
              {isOnline ? <FaWifi className="text-green-500 mr-2" /> : <FaTimesCircle className="text-red-500 mr-2" />}
              {isOnline ? 'Online' : 'Offline'}
            </p>
            
            {/* User Login/Logout */}
            <div>
              {user ? (
                <div className="flex items-center lg:gap-4 gap-1">
                  <p style={{ color: theme.textColor }}>Hello, {username || 'User'}</p>
                  <button onClick={handleLogout} className="lg:px-3 py-1.5 rounded-2xl border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition duration-500">
                    <FaTimesCircle className="inline-block " /> Logout
                  </button>
                </div>
              ) : (
                <NavLink to="/login" className="px-3 py-1.5 rounded-2xl border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition duration-500">
                  <FaUser className="inline-block mr-2" /> Login
                </NavLink>
              )}
            </div>
          </nav>

          {/* Theme Toggle Button */}
          <button onClick={() => dispatch(toggleTheme())} className="text-2xl" style={{ color: theme.textColor }}>
            {theme.backgroundColor === '#ffffff' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer text-3xl" onClick={toggleMenu} style={{ color: theme.textColor }}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu (only visible on small screens) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4 text-lg font-semibold">
            <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'} onClick={() => setIsMenuOpen(false)}>
              <FaHome className="inline-block mr-1" /> Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'} onClick={() => setIsMenuOpen(false)}>
              <FaInfoCircle className="inline-block mr-1" /> About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'} onClick={() => setIsMenuOpen(false)}>
              <FaPhone className="inline-block mr-1" /> Contact Us
            </NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? 'underline text-orange-500' : 'hover:text-orange-500 transition duration-500'} onClick={() => setIsMenuOpen(false)}>
              <FaShoppingCart className="inline-block mr-1" /> Cart <sup className="text-orange-400">{cartItems.length}</sup>
            </NavLink>

            {/* User Login/Logout for Mobile */}
            {user ? (
              <button onClick={handleLogout} className="px-3 py-1.5 rounded-2xl border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition duration-500">
                <FaTimesCircle className="inline-block " /> Logout
              </button>
            ) : (
              <NavLink to="/login" className="px-3 py-1.5 rounded-2xl border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition duration-500">
                <FaUser className="inline-block mr-2" /> Login
              </NavLink>
            )}
          </div>
        )}
      </header>
    </>
  );
}
