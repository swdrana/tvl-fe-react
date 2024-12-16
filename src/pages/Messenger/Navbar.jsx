
const Navbar = () => {
  const navItems = [
    { name: "Messenger", icon: "https://i.ibb.co/BKKF71w/messenger.jpg" },
    { name: "Docs", icon: "https://i.ibb.co/R3vBNLS/docs.png" },
    { name: "Base", icon: "https://i.ibb.co/Xb8ZRzr/basee.jpg" },
    { name: "Meetings", icon: "https://i.ibb.co/Nn9yPHr/meetings.jpg" },
    { name: "Minutes", icon: "https://i.ibb.co/hZQS2ZH/minutes.jpg" },
    { name: "Email", icon: "https://i.ibb.co/CMxL9Vm/maill.jpg" },
    { name: "Calendar", icon: "https://i.ibb.co/NmPfYqv/calender.jpg" },
    { name: "Approval", icon: "https://i.ibb.co/9TzsFGc/approvall.png" },
    { name: "Wiki", icon: "https://i.ibb.co/vQTrcZn/m-Ru-FNIyra-FZRVq-HNSd1gf-P4izg.jpg" },
    { name: "OKR", icon: "https://i.ibb.co/tY35PZj/okr.jpg" },
  ];
  return (
    <div className="fixed top-20 left-0 right-0 flex items-center space-x-6 bg-white shadow-md p-3 z-50">
      {navItems.map((item, index) => (
        <div key={index} className="ml-6 relative flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2">
          <div className="flex gap-2 items-center">
            <img src={item.icon} alt={item.name} className="w-7 h-7 object-cover rounded-full" />
            <span className="font-medium">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
