import { useNavigate } from "react-router-dom";

const TurnNumbers = () => {

  const navigate = useNavigate();
  
    return (
      <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/gtGfwrH/form1.jpg"
              alt="AI Configuration"
              className="rounded-2xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold text-gray-dark mt-2">
            Turn numbers into actions
            </h1>
            <p className="text-gray-light mt-4 font-semibold">
            Gather everything right in Lark Base. Share and collaborate on data with your team.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TurnNumbers;
  