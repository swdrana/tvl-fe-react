import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SignIn = () => {
  const navigate = useNavigate();
  const [isEmailMode, setIsEmailMode] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = isEmailMode ? { email, password } : { phoneNumber, password };

    try {
      const response = await axios.post("http://localhost:5000/signin", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);

      if (response.data.message === "Login successful") {
        navigate("/dashboard");
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-screen relative bg-gray-50 flex items-center justify-between">
      <div className="absolute top-4 left-4">
        <img
          src="https://i.ibb.co.com/vZB9rjF/larklogo.png"
          alt="Lark Logo"
          className="h-10 w-auto"
        />
      </div>

      <div className="w-full max-w-md bg-white rounded-md shadow-md p-6 ml-40 mt-16">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Welcome to Lark</h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex space-x-4">
            <button
              type="button"
              className={`flex-1 border-b-2 font-semibold ${
                isEmailMode ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
              }`}
              onClick={() => setIsEmailMode(true)}
            >
              Email Address
            </button>
            <button
              type="button"
              className={`flex-1 border-b-2 font-semibold ${
                !isEmailMode ? "border-blue-500 text-blue-500" : "border-transparent text-gray-500"
              }`}
              onClick={() => setIsEmailMode(false)}
            >
              Phone Number
            </button>
          </div>
          <motion.div
            key={isEmailMode ? "email" : "phone"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {isEmailMode ? (
              <>
                <div className="mt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mt-4">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
          </motion.div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded cursor-pointer"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I have read and accept the{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">More Login Options</div>
        <div className="mt-4 space-y-2">
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-md border hover:bg-gray-200">
           <img src="https://i.ibb.co.com/2McH37v/SSO.png" alt="" className="w-8 mr-1"/>
            Continue with SSO
          </button>
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-md border hover:bg-gray-200">
            <img src="https://i.ibb.co.com/RQbkDQX/google.webp" alt="" className="w-8 mr-1"/>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-md border hover:bg-gray-200">
           <img src="https://i.ibb.co.com/GJNKKy1/Apple-Logo.png" alt="" className="w-9 mr-1"/>
            Continue with Apple
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          No organization account yet?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 underline"
          >
            Sign up now
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-end w-96 h-screen">
        <img
          src="https://i.ibb.co.com/kJRtwq6/Screenshot-2024-12-10-174821.png"
          alt="Right Side"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignIn;
