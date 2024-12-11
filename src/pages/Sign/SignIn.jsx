import { FaApple, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuLasso } from "react-icons/lu";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-gray-50 flex items-center justify-between">
      {/* Top-Left Logo */}
      <div className="absolute top-4 left-4">
        <img
          src="https://i.ibb.co.com/vZB9rjF/larklogo.png"
          alt="Lark Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Left Section */}
      <div className="w-full max-w-md bg-white rounded-md shadow-md p-6 ml-40 mt-16">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">Welcome to Lark</h1>
        </div>
        <form className="mt-4">
          <div className="flex space-x-4">
            <button
              type="button"
              className="flex-1 border-b-2 border-blue-500 text-blue-500 font-semibold"
            >
              Email Address
            </button>
            <button
              type="button"
              className="flex-1 border-b-2 border-transparent text-gray-500"
            >
              Phone Number
            </button>
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I have read and accept the{' '}
              <a href="#" className="text-blue-500 underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>.
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
            <LuLasso className="mr-3 text-l"/>
            Continue with SSO
          </button>
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-md border hover:bg-gray-200">
            <FaGoogle className="mr-3 text-l" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 rounded-md border hover:bg-gray-200">
            <FaApple className="mr-3 text-xl" />
            Continue with Apple
          </button>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          No organization account yet?{' '}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 underline"
          >
            Sign up now
          </button>
        </div>
      </div>

      {/* Right-Side Image */}
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
