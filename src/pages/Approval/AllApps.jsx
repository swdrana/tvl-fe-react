import jsonData from "../Home/FakeData/Platform.json"

const AllApps = () => {
    const testimonials = jsonData.testimonials;
    return (
        <div>
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

export default AllApps;