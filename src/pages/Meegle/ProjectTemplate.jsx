import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const ProjectTemplate = () => {
  const imageData = [
    {
      src: "https://i.ibb.co.com/kHkG5LX/manufacturing.webp",
      href: "/manufacturing",
      title: "Manufacturing",
      subtitle: "Intelligent Hardware",
    },
    {
      src: "https://i.ibb.co.com/0D92tsR/recruitment-management.webp",
      href: "/recruitment-management",
      title: "Recruitment Management",
      subtitle: "HR Management | Operation Management",
    },
    {
      src: "https://i.ibb.co.com/cL2FcmV/marketing-plan.webp",
      href: "/marketing-plan",
      title: "Marketing Plan",
      subtitle: "Marketing",
    },
    {
      src: "https://i.ibb.co.com/tz43YKy/edm-marketing.webp",
      href: "/edm-marketing",
      title: "EDM Marketing",
      subtitle: "Marketing | Content Management",
    },
    {
      src: "https://i.ibb.co.com/MPckcCR/project-life-cycle.webp",
      href: "/project-lifecycle",
      title: "Project Life Cycle",
      subtitle: "Project Planing",
    },
    {
      src: "https://i.ibb.co.com/RYXp1YB/issue.webp",
      href: "/issue-resolution",
      title: "Issue Resolution",
      subtitle: "Operation Management",
    },
    {
      src: "https://i.ibb.co.com/S0svqJd/agile-development.webp",
      href: "/agile-development",
      title: "Agile Development",
      subtitle: "Software R&D",
    },
    {
      src: "https://i.ibb.co.com/Trkfc8p/leadtocash.webp",
      href: "/leadtocash",
      title: "Lead to Cash",
      subtitle: "Business Service | Operation Management",
    },
    {
      src: "https://i.ibb.co.com/MCH3t8L/videoproduction.webp",
      href: "/videoproduction",
      title: "Video Production",
      subtitle: "Content Management | Operation Management",
    },
    {
      src: "https://i.ibb.co.com/mhGw5Cm/e-commerce.webp",
      href: "/e-commerce",
      title: "E-commerce",
      subtitle: "Marketing | Project Planning",
    },
  ];

  return (
    <div className="bg-white py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Jumpstart Your Projects <br /> with Top-tier Templates!
        </h1>
        <p className="text-gray-light mt-2">
          Browse all the best practices and kickstart your projects with ease.
        </p>
      </div>

      {/* Scrolling Section */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {imageData.map((image, index) => (
            <a
              key={index}
              href={image.href}
              className="flex-shrink-0 w-[300px] rounded-lg overflow-hidden shadow-lg"
            >
              <div>
                <img
                  src={image.src}
                  alt={`Template ${index + 1}`}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-500">{image.subtitle}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center mt-8">
        <button className="mt-10 mb-10 px-6 py-3 bg-gradient-to-p hover:bg-gradient-hover-p text-white text-xl font-semibold rounded-full shadow transition flex items-center">
          Explore All Templates <FaArrowCircleRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProjectTemplate;
