
const Banner = () => {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col items-center p-8 mt-20">
      {/* Header Section */}
      <div className="flex gap-4">
      <div className="">
        <div className="flex gap-2 mb-4">
          <img src="https://i.ibb.co.com/Xb8ZRzr/basee.jpg" alt="" className="h-8 w-8 rounded-md"/>
          <p className="font-semibold">Base</p>
        </div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
        Plan, execute, track, and <br /> deliver. From frontline <br /> operations to boardroom <br /> projects.
        </h1>
        <p className=" text-gray-500 font-semibold mt-4">
        Streamline operational routines, keep track of task <br /> completion, and gain actionable insights instantly to keep <br /> every part of your business in check.
        </p>
      </header>
      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-full shadow hover:bg-blue-700">
          Create Base for unified workflows
        </button>
        <button className=" text-blue-600 border border-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-50">
          Schedule demo
        </button>
      </div>
      <p className="text-gray-500 text-xs ml-4">Free forever. No credit card required.</p>
      </div>

{/* Cards Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full sm:w-3/4 lg:w-1/2 mx-auto mt-12">
  {/* First Element (Full Height Column) */}
  <div className="lg:row-span-2 rounded-lg">
    <img src="https://i.ibb.co.com/23NP5W7/basebanner1.png" alt="Kanban View" className="w-full h-auto rounded-md" />
  </div>

  {/* Second Element */}
  <div className="rounded-lg">
    <img src="https://i.ibb.co.com/NYWSgjf/basebanner2.png" alt="Grid View" className="w-full h-auto rounded-md" />
  </div>

  {/* Third Element */}
  <div className="rounded-lg">
    <img src="https://i.ibb.co.com/5krKWc1/basebanner3.png" alt="Gantt View" className="w-full h-auto rounded-md" />
  </div>

  {/* Fourth Element */}
  <div className="rounded-lg">
    <img src="https://i.ibb.co.com/Mk6HCFd/basebanner4.png" alt="Form View" className="w-full h-auto rounded-md" />
  </div>

  {/* Fifth Element */}
  <div className="rounded-lg -mt-10">
    <img src="https://i.ibb.co.com/FXPFJhR/basebanner5.png" alt="Automated Workflow" className="w-full h-auto rounded-md" />
  </div>

  {/* Sixth Element */}
  <div className="lg:col-span-2 rounded-lg -mt-10">
    <img src="https://i.ibb.co.com/m9q5T8K/basebanner6.png" alt="Dashboard" className="w-full h-auto rounded-md" />
  </div>
</div>


      </div>
    </div>
  );
};

export default Banner;
