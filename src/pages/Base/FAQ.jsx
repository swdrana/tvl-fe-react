
const FAQ = () => {
  const items = [
    {
      icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg",
      title: "Use automated workflows in Base",
      description:
        "After configuring the triggering conditions and actions, Base will automatically perform the actions based on data changes.",
    },
    {
      icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg",
      title: "Create and insert a Base",
      description:
        "With Base, you can build flexible lightweight databases that meet your unique business needs.",
    },
    {
      icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg",
      title: "Use Base advanced permissions",
      description:
        "Configure who can view and edit specific fields or records in a table, and who can view dashboards.",
    },
    {
      icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg",
      title: "Sync data between Bases",
      description:
        "Gather all your key data into a single base by syncing with other Bases.",
    },
    {
      icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg",
      title: "Use form view in Base",
      description:
        "Form view converts a table in base into a form. You can send the form to specific groups or your entire network to quickly gather and add information to your table.",
    },
    {
      icon: "https://i.ibb.co.com/Xb8ZRzr/basee.jpg",
      title: "Send sales reports to groups - Base automation use case",
      description:
        "Base's automated workflow enables you to automate the sending of messages to private and group chats, with wide-ranging customization and style options.",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Help Center - FAQ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white"
            >
              <div className="mr-4">
                <img src={item.icon} alt="" className="w-7 h-7"/>
              </div>
              <div>
                <h3 className="underline text-lg font-semibold text-blue-600 cursor-pointer">
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
