import { useEffect, useRef } from "react";
import { MdInsights } from "react-icons/md";
import { TbFocus2 } from "react-icons/tb";
import { RiTodoLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Productivity = () => {
  
  const navigate = useNavigate();

  const useAutoPlayVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        },
        { threshold: 0.5 }
      );

      if (videoRef.current) {
        observer.observe(videoRef.current);
      }

      return () => {
        if (videoRef.current) observer.unobserve(videoRef.current);
      };
    }, []);

    return videoRef;
  };

  const videoRef = useAutoPlayVideo();

  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-50 min-h-screen flex flex-col items-center justify-center p-6 mt-10">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          The productivity <span className="text-blue-500">Superapp</span> all businesses need
        </h1>
        <p className="font-semibold md:text-lg text-gray-500 max-w-3xl mx-auto">
          Lark digitizes operations from HQ to storefront, streamlines communication, and empowers
          your business with tools for project management, video conferencing, chat, and more!
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Options */}
        <div className="space-y-6">
          {[
            {
              title: "Designed for businesses of any scale",
              subtitle:
                "Manage 1, 100 or 1000 outlets with 1 digital hub",
              icon: "",
            },
            {
              title: "Run a global workforce from 1 platform",
              subtitle: "Transform cross-border collaboration with Lark's intuitive translation feature",
              icon: <TbFocus2 className="text-2xl"/>,
            },
            {
              title: "Get insights from frontline to boardroom",
              subtitle: "Centralise all your business data in one place and mine insights",
              icon: <MdInsights className="text-2xl"/>,
            },
            {
              title: "Get things done in minutes, not days",
              subtitle: "Digitalise your workflows like approvals, daily checklist submissions, and reporting",
              icon: <RiTodoLine className="text-2xl"/>,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative ml-16 px-2 py-2 md:px-4 md:py-4 rounded-lg hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out box-border"
            >
      <div className="flex items-center">
        {/* Icon aligned to the left of the title */}
        <div className="mr-3 group-hover:text-blue-600">
          {item.icon} {/* Render different icon here */}
        </div>
        <h3 className="font-semibold group-hover:text-blue-600">{item.title}</h3>
      </div>
              <p className="text-gray-500 mt-2 hidden group-hover:block">
                {item.subtitle}
              </p>
            </div>
          ))}

          {/* "Book a Demo" Button */}
          <div className="mt-8 flex justify-start">
          <button onClick={() => navigate("/contactsales")} className="tablet-only text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40 ml-14">
  Book a demo
</button>
          </div>
        </div>

        {/* Right Video */}
        <div className="flex items-center justify-center">
          <video
            ref={videoRef}
            className="rounded-lg shadow-lg w-full"
            autoPlay
            muted
            loop
            controls={false}
            src="src\assets\video.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Productivity;
