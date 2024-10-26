// Login.js
import { useState, useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../Utility/Loader"; // Import the Loader component
import { toast } from "react-toastify";
import { useSelector } from "react-redux"; // Import useSelector

export default function Login() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();
  const theme = useSelector((store) => store.sidebar.theme); // Access theme from Redux

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message before trying to login
    setLoading(true); // Set loading to true before login attempt
    try {
      await login(email, password);
      navigate("/"); // Redirect to home after login
      toast.success("Login Successfully");
    } catch (error) {
      setError("Invalid email or password."); // Set error message if login fails
      toast.error("Login Failed");
      console.error("Failed to log in:", error);
    } finally {
      setLoading(false); // Reset loading state after login attempt
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh]" style={{ backgroundColor: theme.backgroundColor }}>
      <div className=" p-8 rounded-md shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6" style={{ color: theme.textColor }}>Log In</h2>
        {loading ? ( // Show loader while loading
          <Loader />
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block mb-1 "
               style={{color : theme.textColor }}>Email</label>
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
              <label className="block mb-1 "
              style={{color : theme.textColor }}
              >Password</label>
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
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p> // Display error message
            )}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Log In
            </button>
          </form>
        )}
        <p className="mt-4 text-sm text-center" style={{ color: theme.subtextColor }}>
          Don't have an account?{' '}
          <Link to="/signup" className="text-orange-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
