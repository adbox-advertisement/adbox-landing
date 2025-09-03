import { useState } from 'react';
import { Link } from 'wouter';
import { Eye, EyeOff, Mail, Lock, User, Building, ArrowLeft } from 'lucide-react';
import { SiGoogle, SiFacebook, SiApple } from 'react-icons/si';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Sign up:', formData);
  };

  const handleSocialSignUp = (provider: string) => {
    // Handle social sign up logic here
    console.log(`Sign up with ${provider}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back to home link */}
        <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-adbox-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-lg"></div>
            </div>
            <span className="font-bold text-2xl text-gray-900">Adbox</span>
          </div>
        </div>
        
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
          Start advertising today
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Create your publisher account and reach 50,000+ engaged users
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 animate-fade-in-up">
          {/* Social Sign Up */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              onClick={() => handleSocialSignUp('Google')}
              className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <SiGoogle className="h-5 w-5 text-red-500 mr-3" />
              Sign up with Google
            </button>
            
            <button
              type="button"
              onClick={() => handleSocialSignUp('Facebook')}
              className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <SiFacebook className="h-5 w-5 text-blue-600 mr-3" />
              Sign up with Facebook
            </button>
            
            <button
              type="button"
              onClick={() => handleSocialSignUp('Apple')}
              className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <SiApple className="h-5 w-5 text-black mr-3" />
              Sign up with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adbox-primary focus:border-adbox-primary transition-colors"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adbox-primary focus:border-adbox-primary transition-colors"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adbox-primary focus:border-adbox-primary transition-colors"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Company field */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adbox-primary focus:border-adbox-primary transition-colors"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adbox-primary focus:border-adbox-primary transition-colors"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-adbox-primary focus:border-adbox-primary transition-colors"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-adbox-primary focus:ring-adbox-primary border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <a href="#" className="font-medium text-adbox-primary hover:text-adbox-secondary">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-adbox-primary hover:text-adbox-secondary">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-primary hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adbox-primary transition-all duration-300 transform"
              >
                Create account
              </button>
            </div>
          </form>

          {/* Sign in link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/signin"
                className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-adbox-primary transition-colors"
              >
                Sign in instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}