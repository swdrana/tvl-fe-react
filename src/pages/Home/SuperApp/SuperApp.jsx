import "./SuperApp.css";

const logos = [
  { id: 1, src: "https://i.ibb.co/D14m8zN/zoom.jpg" },
  { id: 2, src: "https://i.ibb.co/mv1W1tY/superapp2.jpg" },
  { id: 3, src: "https://i.ibb.co/QCD3VMh/superapp1.jpg" },
  { id: 4, src: "teams.png" },
  { id: 5, src: "zalo.png" },
];

const App = () => {
  return (
    <div className="mb-8">
      {/* Header Section */}
      <header className="text-center bg-gradient-to-b from-gray-100 to-white py-12">
        <h1 className="text-5xl font-bold text-gray-900">
          Lark, The <span className="text-blue-600">Superapp</span> that Does it All.
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Streamline Your Tech Stack and Save Big with Lark
        </p>
        <button className="tablet-only text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 mt-6">
          Learn why Lark beats out the competition
        </button>
      </header>

      {/* Scrolling Logos Section */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="logos-wrapper">
          <div className="logos-container">
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt={`Logo ${logo.id}`}
                className="logo"
              />
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo) => (
              <img
                key={`duplicate-${logo.id}`}
                src={logo.src}
                alt={`Logo ${logo.id}`}
                className="logo"
              />
            ))}
          </div>
        </div>

        {/* Central Comparison Section */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-gradient-to-t from-gray-50 to-transparent p-6 rounded-xl shadow-lg">
            <img src="lark-logo.png" alt="Lark" className="h-12 mb-2" />
            <p className="text-gray-700 font-medium text-xl">VS.</p>
            <img src="notion.png" alt="Notion" className="h-12 mt-2" />
            <a href="#" className="text-blue-600 mt-4 font-medium hover:underline">
              Discover →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
