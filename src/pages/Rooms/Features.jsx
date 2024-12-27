import { HiOutlineCursorClick, HiOutlineUsers, HiOutlineClock, HiOutlineDeviceTablet } from 'react-icons/hi';

const features = [
  {
    icon: <HiOutlineCursorClick className="text-bluetext text-4xl" />,
    title: "Effortless",
    description: "Reserve and join scheduled meetings directly from Lark Calendar",
  },
  {
    icon: <HiOutlineUsers className="text-bluetext text-4xl" />,
    title: "Collaborative",
    description: "Streamline discussion with wireless sharing, whiteboard, subtitles, and live translations",
  },
  {
    icon: <HiOutlineClock className="text-bluetext text-4xl" />,
    title: "Efficient",
    description: "Deploy and manage all meeting rooms across workplaces",
  },
  {
    icon: <HiOutlineDeviceTablet className="text-bluetext text-4xl" />,
    title: "Adaptive",
    description: "Customize all of your meeting spaces with diversified hardware",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div>{feature.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-light mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
