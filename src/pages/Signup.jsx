import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please accept the Terms & Conditions');
      return;
    }

    alert('Sign up successful! (Demo)');
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
          <h1 className="text-3xl font-bold text-dark">Create Account</h1>
          <p className="text-gray-600 mt-2">Join BookingHub today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-dark mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                          transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                          transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                        transition-all"
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 rounded mt-1 flex-shrink-0"
            />
            <span className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-primary hover:text-secondary font-medium">
                Terms & Conditions
              </a>
              {' '}and{' '}
              <a href="#" className="text-primary hover:text-secondary font-medium">
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="w-full btn-primary text-lg font-bold hover:shadow-lg transition-all"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
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
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:text-secondary font-medium">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
