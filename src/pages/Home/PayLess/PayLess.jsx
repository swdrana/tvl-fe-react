const PayLess = () => {
  return (
    <div className="rounded-lg lg:h-[420px] md:h-96 h-[510px] shadow-md">
      <img
        src="/PayLessBg.avif"
        className="lg:h-[420px] md:h-96 h-[510px]"
        alt="Pay less background"
      />
      <div className="text-center relative lg:bottom-80 lg:top-auto md:top-auto md:bottom-80 md:left-0 lg:left-0 lg:right-10 bottom-96">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#1F2329] mb-4">
          Pay less to get more today
        </h2>
        <p className="text-[#646A73] text-[18px] mb-4">
          Welcome to contact us. Lark performance consultants will provide you
          with full support.
        </p>
        <ul className="list-none flex justify-center lg:flex-row flex-col items-center p-0 gap-4">
          <li className="text-gray-600 flex justify-center gap-1">
            <img src="/Tick.svg" alt="Tick" className="w-6" />
            Share advanced work methods
          </li>
          <li className="text-gray-600 lg:mb-2 md:mb-0 flex justify-center gap-1">
            <img src="/Tick.svg" alt="Tick" className="w-6" />
            Deliver industry best practices
          </li>
          <li className="text-gray-600 mb-2 flex justify-center gap-1">
            <img src="/Tick.svg" alt="Tick" className="w-6" />
            Assist organizations to improve efficiency
          </li>
        </ul>
        <div className="flex justify-center gap-4 mt-4">
          <button className="md:px-4 flex px-1 gap-2 md:text-xl font-semibold py-2 rounded-full border-[#ffffff33] border-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            Book a demo{" "}
            <span className="border-white text-[#3370FF] bg-white border-2 rounded-[100px] px-2">
              →
            </span>
          </button>
          <div
            style={{
              backgroundColor: "white",
              display: "inline-block",
              padding: "0.5rem",
              border: "2px solid rgba(128, 128, 128, 0.4)"
            }}
            className="rounded-full"
          >
            <button
              className="md:text-xl md:px-4 px-1 font-semibold"
              style={{
                background:
                  "linear-gradient(96deg, var(--token-d5a17d1f-2990-4a9f-b1ca-388c105e73de, rgb(71, 82, 230)) 0%, var(--token-f3e71d39-60d3-470b-86c0-689dedddff26, rgb(36, 196, 255)) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayLess;
