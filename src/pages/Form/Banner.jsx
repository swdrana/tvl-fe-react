import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center mt-10 justify-between bg-gradient-to-l from-amber-100 to-white p-8 lg:p-16">
    {/* Left Side Content */}
    <div className="max-w-lg text-center lg:text-left mb-20">
      <h1 className="text-5xl font-semibold text-gray-dark mb-4">
        Ask the right <br /> questions, collect <br /> actionable data
      </h1>
      <p className="text-gray-light mb-6 font-semibold">
        Create surveys, polls, and quizzes for feedback and <br /> engagement, and make better decisions.
      </p>
      <button
  onClick={() => navigate("/signin")}
  className="bg-brown-600 text-amber-50 text-xl font-semibold px-8 py-4 rounded-full shadow-lg transform transition-transform duration-200 hover:scale-105"
>
  Create a Form - it's free &rarr;
</button>

    </div>

    {/* Right Side Iframe */}
    <div className="mt-20 lg:mt-0 lg:ml-12 w-full max-w-md lg:max-w-lg">
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '0',
          paddingBottom: '109.04%',
        }}
      >
        <iframe
          allow="fullscreen; autoplay"
          allowFullScreen
          height="100%"
          src="https://streamable.com/e/byt3s5?autoplay=1"
          width="100%"
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: '0',
            top: '0',
            overflow: 'hidden',
          }}
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default Banner;
