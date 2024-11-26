"use client";
import { Loader } from "@/UI/customSVG/loader";
import React, { useState } from "react";

const Login = () => {
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
          <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            required
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
            placeholder="m@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            required
            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                      transition-all duration-300 ease-in-out"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    transition-all duration-300 ease-in-out ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
        >
          {isLoading ? <Loader title="Signing in..." /> : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
