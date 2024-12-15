import testimonialsData from "../Home/FakeData/Platform.json";

const NeccessaryApp = () => {
  const testimonials = testimonialsData.testimonials;

  return (
    <div className="bg-white min-h-screen font-sans mt-10">
      {/* Header Section */}
      <header className="text-center py-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Lark Base templates for your industries
        </h1>
      </header>

      {/* Main Section with Two Blocks */}
      <section className="flex flex-col md:flex-row justify-center gap-6 px-4 py-12">
        {/* Card 1 */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-3xl">
          <img
            src="https://i.ibb.co.com/mc8W2Mc/base6.jpg"
            alt="Base for retail"
            className="w-40 h-40 md:w-64 md:h-48 object-cover md:order-last md:ml-16"
          />
          <div className="text-center md:text-left flex flex-col justify-center ml-6">
            <h2 className="text-xl font-semibold mt-4 md:mt-0">Base for retail</h2>
            <p className="text-gray-700 mt-2">
              Use Lark Base for store inspection, inventory management, order and inventory tracking, and more.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold shadow-md rounded-md self-center md:self-start">
              Get it now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full max-w-3xl">
          <img
            src="https://i.ibb.co.com/jgLBW81/base7.jpg"
            alt="Base for E-commerce"
            className="w-40 h-40 md:w-64 md:h-48 object-cover md:order-last md:ml-6"
          />
          <div className="text-center md:text-left flex flex-col justify-center ml-6">
            <h2 className="text-xl font-semibold mt-4 md:mt-0">Base for E-commerce</h2>
            <p className="text-gray-700 mt-2">
              Use Lark Base for order fulfillment & inventory management, website design, and product development.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold shadow-md rounded-md self-center md:self-start">
              Get it now
            </button>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mb-16">
  <button className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-96">
    Get Lark Base templates for your use cases
  </button>
</div>


      {/* Footer Section */}
      <footer className="text-center py-8">
        <p className="text-4xl font-semibold text-gray-800">
          All the apps you need. In one Lark.
        </p>
        <section className="px-6 py-12">
        <div className="flex flex-wrap justify-center gap-12">
  {testimonials.map((item) => (
    <div
      key={item.label}
      className="text-center transform transition-all duration-300 hover:scale-110"
    >
      <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto cursor-pointer">
        <img
          src={item.icon}
          alt={item.label}
          className="w-10 h-10 object-contain"
        />
      </div>
      <p className="mt-2 text-gray-700">{item.label}</p>
    </div>
  ))}
</div>

        </section>
      </footer>
    </div>
  );
};

export default NeccessaryApp;
