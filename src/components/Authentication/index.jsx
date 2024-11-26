"use client";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import useMediaQuery from "@/hooks/useMediaQuery";
import AppModal from "@/UI/AppModal";

const SignInAndSignUp = ({ setIsModalOpen }) => {
  const [activeTab, setActiveTab] = useState("signin");
  const isMobileScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <AppModal
        customClasses="w-[30rem] bg-white rounded-md"
        title={activeTab !== "signin" ? "Please sign up as new user" : "Welcome, please sign in"}
        setIsModalOpen={setIsModalOpen}
        drawerModal={isMobileScreen}
        isScrollable
        options={{
          yAxisPosition: "start"
        }}
      >
        <div className="flex items-center justify-center bg-gradient-to-b p-2">
          <div className="w-full max-w-md rounded-2xl overflow-hidden transition-all duration-300 ease-in-out">
            <div className="p-2">
              <div className="flex bg-white bg-opacity-50  rounded-lg p-1 mb-8">
                <button
                  className={`flex-1 py-3 px-4 text-center text-sm sm:text-base font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    activeTab === "signin"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 bg-indigo-50"
                  }`}
                  onClick={() => setActiveTab("signin")}
                  aria-pressed={activeTab === "signin"}
                >
                  Sign In
                </button>
                <button
                  className={`flex-1 py-3 px-4 text-center text-sm sm:text-base font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    activeTab === "signup"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-600 bg-indigo-50"
                  }`}
                  onClick={() => setActiveTab("signup")}
                  aria-pressed={activeTab === "signup"}
                >
                  Sign Up
                </button>
              </div>
              <div className="rounded-lg p-2">
                {activeTab === "signin" ? <Login /> : <Register />}
              </div>
            </div>
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default SignInAndSignUp;
