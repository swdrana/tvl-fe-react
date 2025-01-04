import { useNavigate } from "react-router-dom";

const Automation = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
        {/* Left Side: Iframe */}
        <div className="lg:w-1/2">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "0px",
              paddingBottom: "75%",
            }}
          >
            <iframe
              allow="fullscreen; autoplay"
              allowFullScreen
              height="100%"
              src="https://streamable.com/e/d1qi0y?autoplay=1"
              width="100%"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0px",
                top: "0px",
                overflow: "hidden",
              }}
            ></iframe>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
          <p className="text-bluetext font-bold text-xl">Automation</p>
          <h1 className="text-4xl font-semibold text-gray-800 mt-2">
            Start with a simple drag and drop
          </h1>
          <p className="text-gray-600 mt-4 font-semibold text-lg">
            The magic of AnyCross is in its simplicity. With effortless onboarding, an intuitive interface, and robust features, AnyCross integrates seamlessly into your Lark experience.
          </p>
          <button
            onClick={() => navigate("/contactsales")}
            className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r hover:bg-gradient-hover px-1 py-2 text-white h-12 w-40"
          >
            Free demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Automation;
