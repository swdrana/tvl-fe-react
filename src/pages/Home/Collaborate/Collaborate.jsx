const Collaborate = () => {
    return (
      <div className="bg-white pt-32 px-4 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-xl lg:text-4xl font-semibold mb-4">
            Plan, collaborate, execute and measure
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-l font-semibold">
            Lark empowers you to achieve operational excellence by providing tools
            to organize your business, digitalize workflows, and ensure your plans
            turn into action on the ground.
          </p>
        </div>
  
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10">
          <button className="font-bold py-4 px-6 bg-black text-white rounded-lg">
            All Businesses
          </button>
          <button className="font-bold py-4 px-6 text-black border border-gray-300 rounded-lg">
            Food & Beverage
          </button>
          <button className="font-bold py-4 px-6 text-black border border-gray-300 rounded-lg">
            Retail
          </button>
          <button className="font-bold py-4 px-6 text-black border border-gray-300 rounded-lg">
            Technology
          </button>
        </div>
  
        {/* Main Content */}
        <div className="flex justify-center items-center min-h-screen">
  <div className="flex flex-col lg:flex-row items-stretch lg:space-x-10 space-y-8 lg:space-y-0 w-full max-w-7xl"> {/* Increased max-w-5xl to max-w-7xl */}
    
    {/* Left Image Section */}
    <div className="relative flex-1 bg-gray-100 h-full">
      <img
        src="https://i.ibb.co.com/cXGMvcL/image.png"
        alt="Team collaboration"
        className="rounded-lg shadow-lg h-full w-full object-cover"
      />
      <div className="absolute bottom-4 -left-14 p-4 w-80">
        <img className="rounded-xl" src="https://i.ibb.co.com/CshyCpV/overlap.png" alt="" />
      </div>
    </div>

    {/* Right Text Section */}
    <div className="flex-1 bg-gradient-to-b from-violet-50 to-violet-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
      {/* Heading */}
      <h2 className="text-4xl font-semibold mb-1 mt-6 ml-8">All Businesses</h2>
      
      {/* List */}
      <ul className="space-y-4 text-gray-500 font-semibold text-xl px-10">
        <li className="flex items-center space-x-4">
          <span className="text-2xl">🌍</span>
          <span>
            Work together globally, with translations for chats, documents,
            meetings, and more.
          </span>
        </li>
        <li className="flex items-center space-x-4">
          <span className="text-2xl">📱</span>
          <span>Manage projects and track progress from your phone.</span>
        </li>
        <li className="flex items-center space-x-4">
          <span className="text-2xl">⏱</span>
          <span>
            Streamline approval process for purchases, promotions, and more.
          </span>
        </li>
      </ul>
      
      {/* Button */}
      <button className="tablet-only text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40">
        Book a demo
      </button>
    </div>

  </div>
</div>


      </div>
    );
  };
  
  export default Collaborate;
  