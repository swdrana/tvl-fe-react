
const FAQ = () => {
    const items = [
      {
        icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg",
        title: "Translate text messages",
        description:
          "Lark provides translation for 18 languages: English, Chinese (simplified), Japanese, Thai, Indonesian, Hindi, French, Chinese (traditional), German, Spanish, Korean, Russian, Portuguese, Vietnamese, Italian, Arabic, Tagalog and Polish.",
      },
      {
        icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg",
        title: "Schedule messages to be sent later",
        description:
          "Send scheduled messages in chats when working across time zones or when you're on leave.",
      },
      {
        icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg",
        title: "Check read or unread status of messages",
        description:
          "Check whether a message you've sent has been read by the recipient.",
      },
      {
        icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg",
        title: "React to messages using emojis",
        description:
          "React to messages in a chat using emojis and everyone in the chat can see them.",
      },
      {
        icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg",
        title: "Streamline communication with threads",
        description:
          "Connect all the relevant messages and replies in the chat without distraction from unrelated messages.",
      },
      {
        icon: "https://i.ibb.co.com/BKKF71w/messenger.jpg",
        title: "Send audio messages",
        description:
          "Automatically convert audio messages you receive into text if you prefer reading over listening to messages.",
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