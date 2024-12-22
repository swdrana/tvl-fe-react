
const FAQ = () => {
    const items = [
      {
        icon: "https://i.ibb.co.com/R3vBNLS/docs.png",
        title: "Migrate data from Google Drive to Docs",
        description:
          "Easily migrate your Google Drive data, whether it's shared on the personal cloud or shared cloud, to your Lark Docs.",
      },
      {
        icon: "https://i.ibb.co.com/R3vBNLS/docs.png",
        title: "Import local files as Lark Docs",
        description:
          "Easily import your local files as Lark Docs for a better online collaboration experience.",
      },
      {
        icon: "https://i.ibb.co.com/R3vBNLS/docs.png",
        title: "Insert a board in Docs",
        description:
          "Design intuitive and visually-striking flowcharts, diagrams, schematics, and more in Docs.",
      },
      {
        icon: "https://i.ibb.co.com/R3vBNLS/docs.png",
        title: "Draw flowcharts and UML diagrams in Docs",
        description:
          "Create standout flowcharts, UML diagrams, and structural diagrams with ease.",
      },
      {
        icon: "https://i.ibb.co.com/R3vBNLS/docs.png",
        title: "Docs and Sheets permissions",
        description:
          "Share Docs with external users, adjust other security permissions for the Doc, and transfer the Doc ownership.",
      },
      {
        icon: "https://i.ibb.co.com/R3vBNLS/docs.png",
        title: "Use formulas and functions in Sheets",
        description:
          "Perform various calculation types by using functions to create formulas in Sheets.",
      },
      ];
    
    return (
        <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Help Center - FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white shadow-md rounded-lg"
              >
                <div className="mr-4">
                  <img src={item.icon} alt="" className="w-7 h-7"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQ;