import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    alert('Login successful! (Demo)');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-bold text-lg">HB</span>
            </div>
            <span className="text-2xl font-bold text-dark">BookingHub</span>
          </div>
          <h1 className="text-3xl font-bold text-dark">Sign In</h1>
          <p className="text-gray-600 mt-2">Welcome back to BookingHub</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-dark mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-secondary font-medium">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full btn-primary text-lg font-bold hover:shadow-lg transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <span className="text-lg">f</span>
              <span className="text-sm font-medium">Facebook</span>
            </button>
            <button className="flex-1 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <span className="text-lg">G</span>
              <span className="text-sm font-medium">Google</span>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:text-secondary font-medium">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
