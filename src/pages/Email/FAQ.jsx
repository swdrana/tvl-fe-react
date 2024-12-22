
const FAQ = () => {
    const items = [
      {
        icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg",
        title: "Quick guide to Lark Mail",
        description:
          "Lark Mail is a mailbox tool that'll enhance communication and boost productivity for your organization. Learn about it in this quick guide.",
      },
      {
        icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg",
        title: "Configure Outlook account for Lark email migration",
        description:
          "Configure the Outlook admin console to authorize email migration.",
      },
      {
        icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg",
        title: "Bind Gmail service to Lark Mail",
        description:
          "Organizations can bind Gmail service to Lark Mail so that members can directly send and receive emails from their Gmail account in Lark.",
      },
      {
        icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg",
        title: "Lark Mail setup guide",
        description:
          "For administrators who want to activate an IMAP/STMP email account that is being migrated to Lark Mail.",
      },
      {
        icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg",
        title: "Use a public mailbox to send and receive emails",
        description:
          "Administrators can centralize email management by creating public mailboxes that are accessible by multiple users.",
      },
      {
        icon: "https://i.ibb.co.com/CMxL9Vm/maill.jpg",
        title: "Use Lark Mail on third-party email clients",
        description:
          "Log in to Lark Mail through third-party email clients.",
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