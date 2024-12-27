import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-gradient-to-b from-white to-blue-100 text-gray-900">
      {/* Header Section */}
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mt-28">
          Your <span className="text-blue-600">Digital Hub</span> to <br /> simplify business operations
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Turn boardroom vision into operational excellence with tools for
          centralized communication, project management, digital workflows,
          analytics and more.
        </p>
        <div className="flex justify-center mt-4 text-yellow-500">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-500 ml-2">
            4.9 | Based on 2,300+ reviews
          </span>
        </div>
        {/* Buttons */}
        <div className="flex justify-center mt-6 gap-6">
          <button
            onClick={() => navigate("/signup")}
            className="text-xl font-semibold rounded-full px-4 py-2 text-white bg-gradient-to-r hover:bg-gradient-hover h-12 w-44"
          >
            Try for free
          </button>
          <a
            href="#"
            onClick={() => navigate("/contactsales")}
            className="text-blue-600 font-bold hover:underline text-xl mt-2"
          >
            Book a demo →
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-6">
        {/* Left Panel */}
        <div className="relative flex-shrink-0">
          <div className="absolute text-sm top-0 left-[-10px] text-blue-600">
            All your work in one place !!
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg h-60 w-48 md:w-72"></div>
        </div>
        {/* Center Panel */}
        <div className="flex-shrink-0">
          <div className="bg-gray-100 shadow-lg rounded-lg h-80 w-48 md:w-96"></div>
        </div>
        {/* Right Panel */}
        <div className="relative flex-shrink-0">
          <div className="absolute text-sm top-0 right-[-10px] text-blue-600">
            Approval anytime, anywhere
          </div>
          <div className="bg-gray-100 shadow-lg rounded-lg h-60 w-48 md:w-72"></div>
        </div>
      </div>

      {/* Trusted Brands Section */}
      <div className="text-center my-10 px-4 relative">
        <h3 className="text-gray-500 mb-8 uppercase text-sm">
          Trusted by fast-growing companies from 125+ countries
        </h3>
        <div className="flex flex-wrap justify-center gap-4 relative" style={{ top: '-14px' }}>
          <div className="bg-white rounded-md p-2">
            <img
              src="https://i.ibb.co.com/Ky5FpSZ/mi.png"
              alt="Brand 1"
              className="h-8 w-20 object-contain"
            />
          </div>
          <div className="bg-white rounded-md p-2">
            <img
              src="https://i.ibb.co.com/tbQgGbg/nio.png"
              alt="Brand 2"
              className="h-8 w-20 object-contain"
            />
          </div>
          <div className="bg-white rounded-md p-2">
            <img
              src="https://i.ibb.co.com/XL0D7Cp/anker-vector-logo.png"
              alt="Brand 3"
              className="h-8 w-20 object-contain"
            />
          </div>
          <div className="bg-white rounded-md p-2">
            <img
              src="https://i.ibb.co.com/mJ6zxDT/Carro-Logo-1.png"
              alt="Brand 4"
              className="h-8 w-20 object-contain"
            />
          </div>
          <div className="bg-white rounded-md p-2">
            <img
              src="https://i.ibb.co.com/b3L7hjW/haidiliao.png"
              alt="Brand 5"
              className="h-8 w-20 object-contain"
            />
          </div>
          <div className="bg-white rounded-md p-2">
            <img
              src="https://i.ibb.co.com/L8cbbVm/advance.png"
              alt="Brand 6"
              className="h-8 w-20 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
