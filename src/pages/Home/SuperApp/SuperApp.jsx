
import "./SuperApp.css";

const logos = [
  { id: 1, src: "https://i.ibb.co/D14m8zN/zoom.jpg" },
  { id: 2, src: "https://i.ibb.co/mv1W1tY/superapp2.jpg" },
  { id: 3, src: "https://i.ibb.co/QCD3VMh/superapp1.jpg" },
  { id: 4, src: "https://i.ibb.co/k5LtFQ5/teams.png" },
  { id: 5, src: "https://i.ibb.co/2yQ1HPF/zalo.png" },
];

const App = () => {
  return (
    <div className="mb-8">
      {/* Header Section */}
      <header className="superapp-header">
        <h1>
          Lark, The <span>Superapp</span> that Does it All.
        </h1>
        <p>Streamline Your Tech Stack and Save Big with Lark</p>
        <button>Learn why Lark beats out the competition</button>
      </header>

      {/* Scrolling Logos Section */}
      <section className="relative superapp-logos-wrapper">
        <div className="superapp-logos-container">
          {logos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className="superapp-logo"
            />
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {logos.map((logo) => (
            <img
              key={`duplicate-${logo.id}`}
              src={logo.src}
              alt={`Logo ${logo.id}`}
              className="superapp-logo"
            />
          ))}
        </div>

        {/* Central Comparison Section */}
        <div className="superapp-comparison-section">
          {/* <div className="superapp-comparison-card">
            <img
              src="https://i.ibb.co/1zP7tgX/lark-logo.png"
              alt="Lark Logo"
            />
            <p className="text-gray-700 font-medium text-xl">VS.</p> */}
            {/* <img
              src="https://i.ibb.co/Z6X7DX5/notion.png"
              alt="Notion Logo"
            />
            <a href="#">Discover →</a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default App;
