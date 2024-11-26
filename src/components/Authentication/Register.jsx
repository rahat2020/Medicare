import React, { useState } from "react";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Authentication successful!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="signup-name"
            type="text"
            required
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            required
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
            placeholder="m@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            required
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center">
          <input
            id="agree-terms"
            name="agree-terms"
            type="checkbox"
            required
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    transition-all duration-300 ease-in-out ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing Up...
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default Register;
