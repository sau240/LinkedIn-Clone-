import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import login_image from '../assets/sit.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ You cannot place <Navbar /> here

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
if (response.ok) {
  console.log('Login success:', data);
  setError(null);
  localStorage.setItem('isLoggedIn', 'true'); // ✅ this is essential
  navigate('/profile');
}
 else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="flex w-full h-[90vh]">
      {/* Optional: Navbar can go here */}
      {/* <Navbar /> */}

      {/* Left side: Login form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        <h1 className="text-5xl font-bold mb-6" style={{ color: '#FF3C00' }}>
          A Hearty Welcome to your professional community !!
        </h1>

        <h1 className="text-4xl font-semibold mb-6">Sign in</h1>
        <p className="text-sm mb-8 text-gray-600">
          Stay updated on your professional world
        </p>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>

        {error && (
          <p className="text-red-600 mt-2 font-medium text-center">{error}</p>
        )}

        <a
          href="#"
          className="mt-4 text-sm text-blue-600 hover:underline max-w-max"
        >
          Forgot password?
        </a>

        <div className="mt-8 pt-6 border-t border-gray-300">
          <p className="text-center text-sm text-gray-700">
            New to LinkedIn?{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Join now
            </a>
          </p>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 bg-blue-50 flex items-center justify-center p-6">
        <img
          src={login_image}
          alt="Login visual"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Login;
