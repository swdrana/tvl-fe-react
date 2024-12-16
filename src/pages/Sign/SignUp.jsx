import { MdOutlinePhoneAndroid } from "react-icons/md";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Top Right Buttons */}
      <div className="absolute top-4 right-8 flex space-x-6">
        <button className="text-sm text-gray-700 hover:underline">
          Help Center
        </button>
            <select
              className="border border-gray-300 p-2 rounded bg-white text-gray-700 cursor-pointer"
              onChange={(e) => alert(`Language changed to: ${e.target.value}`)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
      </div>

      {/* Left Section */}
      <div className="bg-gradient-to-b from-white to-blue-100 w-full md:w-1/2 p-8 flex flex-col justify-center items-center relative">
        {/* Logo in Top-Left Corner */}
        <img
          src="https://i.ibb.co.com/vZB9rjF/larklogo.png"
          alt="Lark Logo"
          className="absolute top-4 left-8 h-16 w-32"
        />

        <div className="w-full max-w-md mt-20">
          <div className="text-center">
            <div className="justify-center items-center mb-4">
              <p className="text-4xl">👋</p>
              <h1 className="text-2xl font-bold mb-2 border-b border-blue-300 pb-8">
                Bye Operation Chaos. <br /> Hello Lark.
              </h1>
            </div>
          </div>

          {/* Align Content */}
          <div className="text-left">
            <p className="text-sm mb-6">
              <span className="font-semibold text-blue-700">
                Free plan starts from $0/month
              </span>
              <br />
              No credit card required
            </p>
            <ul className="text-sm space-y-2 mb-6">
              <li>✔️ Up to 50 users</li>
              <li>✔️ Unlimited chats with full message history</li>
              <li>✔️ Secure and customizable business email</li>
              <li>✔️ Automatic language translation</li>
              <li>✔️ 100 GB cloud storage</li>
            </ul>
          </div>

          <div className="flex justify-center space-x-4 -ml-16">
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/BKKF71w/messenger.jpg"
                alt="Messenger"
                className="h-8 mx-auto mb-2"
              />
              <p>Messenger</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/CMxL9Vm/maill.jpg"
                alt="Email"
                className="h-8 mx-auto mb-2"
              />
              <p>Email</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/Nn9yPHr/meetings.jpg"
                alt="Meetings"
                className="h-8 mx-auto mb-2"
              />
              <p>Meetings</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/R3vBNLS/docs.png"
                alt="Docs"
                className="h-8 mx-auto mb-2"
              />
              <p>Docs</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/NmPfYqv/calender.jpg"
                alt="Calendar"
                className="h-8 mx-auto mb-2"
              />
              <p>Calendar</p>
            </div>
            <div className="text-center">
              <img
                src="https://i.ibb.co.com/Xb8ZRzr/basee.jpg"
                alt="Base"
                className="h-8 mx-auto mb-2"
              />
              <p>Base</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 p-8 flex flex-col bg-white mt-28 ml-14">
        <h2 className="text-2xl font-bold mb-6">Enter your work email</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="name@company.com"
          className="border border-gray-300 rounded-md p-3 w-full mb-4"
        />

        {/* Sign Up Button */}
        <button className="bg-blue-600 text-white rounded-md px-6 py-3 w-full mb-4">
          Sign Up for Free
        </button>

        {/* Divider Text */}
        <p className="text-gray-500 mb-4 text-center">Or continue with</p>

        {/* Social Buttons */}
        <div className="flex justify-between w-full">
          <button className="flex items-center justify-center border border-gray-300 rounded-md p-3 w-full mx-1">
            <MdOutlinePhoneAndroid className="text-gray-500 text-lg mr-2" />
            <span>Phone</span>
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-md p-3 w-full mx-1">
            <AiOutlineGoogle className="text-gray-500 text-lg mr-2" />
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center border border-gray-300 rounded-md p-3 w-full mx-1">
            <IoLogoApple className="text-gray-500 text-lg mr-2" />
            <span>Apple</span>
          </button>
        </div>

        {/* Terms and Conditions */}
        <p className="text-gray-400 text-sm mt-4 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-600">
            User Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already joined in an organization?{' '}
          <button
            onClick={() => navigate("/signin")}
            className="text-blue-500 underline"
          >
            Sign in now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
