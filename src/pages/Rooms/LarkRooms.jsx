

const LarkRooms = () => {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold text-gray-dark">Lark Rooms Software Download</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-28 mt-8">
            {/* Lark Rooms */}
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/3zPsGDb/larkroom.jpg" 
                alt="Lark Rooms"
                className="w-24 h-20"
              />
              <p className="text-gray-dark font-medium mt-4">Lark Rooms</p>
            </div>
  
            {/* Lark Rooms Controller */}
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/CMf8VW7/roomcontroller.jpg" 
                alt="Lark Rooms Controller"
                className="w-24 h-20"
              />
              <p className="text-gray-dark font-medium mt-4">Lark Rooms Controller</p>
            </div>
  
            {/* Lark Rooms Display */}
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/G9BFvVs/roomdisplay.jpg"
                alt="Lark Rooms Display"
                className="w-24 h-20"
              />
              <p className="text-gray-dark font-medium mt-4">Lark Rooms Display</p>
            </div>
          </div>
  
          {/* Button */}
          <div className="mt-8">
            <button className="bg-blue font-semibold text-white h-12 w-44 rounded-full hover:btn-blue-hover transition">
              Learn more
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default LarkRooms;
  