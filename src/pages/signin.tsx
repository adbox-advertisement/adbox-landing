import { useState } from "react";
import { Link } from "wouter";
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { SiFacebook, SiApple } from "react-icons/si";
import { useAuth } from "@/context/authContext";
import { FcGoogle } from "react-icons/fc";
import { BASE_URL_V1 } from "@/helpers/api.service";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(formData.email, formData.password);
  };

  const handleSocialSignIn = (provider: string) => {
    console.log(`Sign in with ${provider}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-gray-100 flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Back to home</span>
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-3 sm:p-4 flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </div>
            <span className="font-bold text-xl sm:text-2xl text-gray-900">
              Adbox
            </span>
          </div>
        </div>

        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Welcome back
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Sign in to your publisher account
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 sm:py-8 sm:px-6 shadow-xl rounded-2xl animate-fade-in-up">
          {/* Social Sign In */}
          <div className="space-y-3 mb-5 sm:mb-6">
            <button
              type="button"
              onClick={() => handleSocialSignIn("Google")}
              className="w-full flex justify-center items-center px-3 py-3 sm:py-3.5 border border-gray-200 rounded-xl shadow-sm text-sm sm:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
            >
              <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mr-3" />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => handleSocialSignIn("Facebook")}
              className="w-full flex justify-center items-center px-3 py-3 sm:py-3.5 border border-gray-200 rounded-xl shadow-sm text-sm sm:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
            >
              <SiFacebook className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-3" />
              Continue with Facebook
            </button>

            <button
              type="button"
              onClick={() => handleSocialSignIn("Apple")}
              className="w-full flex justify-center items-center px-3 py-3 sm:py-3.5 border border-gray-200 rounded-xl shadow-sm text-sm sm:text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
            >
              <SiApple className="h-5 w-5 sm:h-6 sm:w-6 text-black mr-3" />
              Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-5 sm:mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2.5 sm:py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-sm sm:text-base"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                {/* Forgot password link */}
                <a
                  href={`${BASE_URL_V1}/auth/forgot-password`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-purple-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full pl-10 pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-colors text-sm sm:text-base"
                  placeholder="Enter your password"
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

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent text-sm sm:text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-500 to-purple-400 hover:opacity-90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition-all duration-300 transform"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Sign up link */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-purple-600 hover:underline"
            >
              Create new account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
