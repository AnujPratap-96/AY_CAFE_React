import { useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Utility/Loader"; // Import the Loader component
import { toast } from "react-toastify";
import { useSelector } from 'react-redux'; // Importing useSelector

export default function Signup() {
  const { signup } = useContext(UserContext);
  const [name, setName] = useState(''); // New state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  // Access theme from Redux
  const theme = useSelector((store) => store.sidebar.theme);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before signup attempt
    try {
      await signup(name, email, password); // Pass name to signup function
      navigate("/"); // Redirect to login after signing up
      toast.success("Sign Up Successfully");
    } catch (error) {
      console.error("Failed to sign up", error);
      toast.error("Sign Up Failed");
    } finally {
      setLoading(false); // Reset loading state after signup attempt
    }
  };

  return (
    <div className="flex items-center justify-center h-[85vh]" style={{ backgroundColor: theme.backgroundColor }}>
      <div className=" p-8 my-5 rounded-md shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6" style={{ color: theme.textColor }}>Sign Up</h2>
        {loading ? ( // Show loader while loading
          <Loader />
        ) : (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label className="block mb-1 " style={{ color: theme.textColor }}>Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                style={{color : theme.textColor , backgroundColor : theme.backgroundColor}}
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 " style={{ color: theme.textColor }}>Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                style={{color : theme.textColor , backgroundColor : theme.backgroundColor}}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 " style={{ color: theme.textColor }}>Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                style={{color : theme.textColor , backgroundColor : theme.backgroundColor}}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
        <p className="mt-4 text-sm text-center" style={{ color: theme.textColor }}>
          Already have an account?{' '}
          <Link to="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
