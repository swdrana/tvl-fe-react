import { useNavigate } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Anything = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10 px-5 mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <header className="text-center mb-10 mt-10">
        <motion.div
          className="flex items-center justify-center space-x-2 mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaMobileAlt className="text-2xl text-blue-600" />
          <p className="text-blue-600 font-semibold">Optimized for mobile</p>
        </motion.div>
        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Anything. Anywhere. Anytime. Any device.
        </motion.h1>
        <motion.p
          className="text-gray-500 font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lark helps enterprises plan and execute with effectiveness no matter where
          employees are. Use it on your phone or desk. Lark is for everyone and every
          role. <br />
          Collaborate with cross-border colleagues without missing the point. Automate
          workflows to enhance efficiency.
        </motion.p>
        <motion.button
          className="mt-6 text-xl font-semibold rounded-full px-4 py-2 text-white bg-gradient-to-r hover:bg-gradient-hover h-12 w-40"
          onClick={() => navigate("/signup")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Try for free
        </motion.button>
      </header>

      {/* Cards Section */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Base Card */}
        <motion.div
          onClick={() => navigate("/base")}
          className="group cursor-pointer p-6 bg-cover bg-center rounded-xl shadow-md hover:border-blue-500 border-2 border-transparent transition-all h-[600px] flex flex-col justify-between"
          style={{
            backgroundImage: "url('https://i.ibb.co/RzxK22H/uit-Gm-CA62-TN966-Zbm-Yi-Dt16y6ng.jpg')",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-opacity-80 rounded p-4">
            <div className="flex text-3xl mb-4 gap-2">
              <img
                src="https://i.ibb.co/Xb8ZRzr/basee.jpg"
                alt=""
                className="h-8 w-7"
              />
              <h3 className="text-xl font-bold mb-2">Base</h3>
            </div>
            <p className="text-gray-700">
              Plan and track progress, from routines to projects. Automate content
              generation with Open AI's integration.
            </p>
          </div>
        </motion.div>

        {/* Messenger Card */}
        <motion.div
          onClick={() => navigate("/messenger")}
          className="group cursor-pointer p-6 bg-cover bg-center rounded-xl shadow-md hover:border-green-500 border-2 border-transparent transition-all h-[600px] flex flex-col justify-between"
          style={{
            backgroundImage: "url('https://i.ibb.co/9btPk0X/Hqt-AGv-Qfpkx-Zqx8-Nqo-Wn-Syf3aa0.jpg')",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-opacity-80 rounded p-4">
            <div className="flex text-3xl mb-4 gap-2">
              <img
                src="https://i.ibb.co/BKKF71w/messenger.jpg"
                alt=""
                className="h-8 w-7"
              />
              <h3 className="text-xl font-bold mb-2">Messenger</h3>
            </div>
            <p className="text-gray-700">
              Turn chats into productivity hubs by scheduling meetings, assigning tasks, and
              approving - all within chat.
            </p>
          </div>
        </motion.div>

        {/* Approval Card */}
        <motion.div
          onClick={() => navigate("/approval")}
          className="group cursor-pointer p-6 bg-cover bg-center rounded-xl shadow-md hover:border-red-500 border-2 border-transparent transition-all h-[600px] flex flex-col justify-between"
          style={{
            backgroundImage: "url('https://i.ibb.co/R7sq5Km/Uvh53moo-GSs-Hy-Lu-Vrev-RGIJIi-Ao.jpg')",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-opacity-80 rounded p-4">
            <div className="flex text-3xl mb-4 gap-2">
              <img
                src="https://i.ibb.co/9TzsFGc/approvall.png"
                alt=""
                className="h-8 w-7"
              />
              <h3 className="text-xl font-bold mb-2">Approval</h3>
            </div>
            <p className="text-gray-700">
              Speed up your process from days to hours with smart workflows that route,
              track, and notify approval completion.
            </p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Anything;
