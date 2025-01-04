import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-cyan-50 p-8 lg:p-16">
    {/* Left Side Content */}
    <div className="max-w-lg text-center lg:text-left mb-20">
      <h1 className="text-5xl font-semibold text-gray-dark mb-4">
      Turn strategy into <br /> measurable results
      </h1>
      <p className="text-gray-light mb-6 font-semibold">
      Lark OKR helps create organizational focus with alignment on individual and team goals.
      </p>
      <button
  onClick={() => navigate("/contactsales")}
  className="bg-blue text-white text-xl font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-blue-hover"
>
  Contact us
</button>

    </div>

    {/* Right Side image */}
    <div className="relative rounded-lg w-full max-w-4xl flex items-center justify-center lg:ml-4">
     <img src="https://i.ibb.co.com/zQNwdSG/okrbanner.webp" alt="" className="w-full md:w-5/6 lg:w-3/2 max-w-2xl rounded-lg ml-16"/>
    </div>
  </div>
  );
};

export default Banner;
