const Anything = () => {
  return (
    <div className="bg-[#F1F3FF] my-20 py-20">
      <div className="container mx-auto">
        {/* Text Section */}
        <div>
          <div className="flex items-center justify-center gap-2">
            <img src="/MonitorIcon.svg" className="w-6" alt="Monitor Icon" />
            <p
              style={{
                background:
                  "linear-gradient(97deg, rgb(71, 82, 230) 0%, var(--token-f3e71d39-60d3-470b-86c0-689dedddff26, rgb(36, 196, 255)) 100%)",
                "WebkitBackgroundClip": "text",
                "WebkitTextFillColor": "transparent",
              }}
              className="font-semibold text-[#1F2329]"
            >
              Optimized for mobile
            </p>
          </div>
          <p className="text-center lg:text-[32px] md:text-xl font-semibold mt-2">
            Anything. Anywhere. Anytime. Any device.
          </p>
          <p className="text-center w-1/2 mt-2 text-[#646A73]">
            Lark helps enterprises plan and execute with effectiveness no matter
            where employees are. Use it on your phone or desk. Lark is for
            everyone and every role. Collaborate with cross-border colleagues
            without missing the point. Automate workflows to enhance efficiency.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full shadow-md">
              Try for free
            </button>
          </div>
        </div>
        {/* Card Section */}
        <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 py-8">
          {/* Base Card */}
          <div className="flex flex-col items-start md:w-1/3">
            <div className="absolute lg:left-32 -bottom-[260rem] z-50">
              <div className="flex items-center mb-4">
                <img src="/BaseIcon.svg" alt="Icon of base" />
                <h3 className="ml-3 font-medium text-gray-900">Base</h3>
              </div>
              <p className="w-1/3 text-[#646A73] mb-4">
                {
                  "Plan and track progress, from routines to projects. Automate content generation with OpenAI's integration."
                }
              </p>
            </div>
            <img
              src="/BaseImg.avif"
              alt="Base Image"
              className="relative rounded-xl"
            />
          </div>

          {/* Messenger Card */}
          <div className="flex flex-col items-start md:w-1/3">
            <div className="absolute lg:right-16 -bottom-[260rem] z-50">
              <div className="flex items-center mb-4">
                <img src="/Messenger.svg" alt="Icon of base" />
                <h3 className="ml-3 font-medium text-gray-900">Messenger</h3>
              </div>
              <p className="w-1/3 text-[#646A73] mb-4">
                {
                  "Turn chats into productivity hubs by scheduling meetings, assigning tasks, and approving - all within chat."
                }
              </p>
            </div>
            <img
              src="/MessengerImg.avif"
              alt="Base Image"
              className="relative rounded-xl"
            />
          </div>

          {/* Approval Card */}
          <div className="flex flex-col items-start md:w-1/3">
            <div className="absolute lg:-right-96 -bottom-[260rem] z-50">
              <div className="flex items-center mb-4">
                <img src="/ApprovalIcon.svg" alt="Icon of base" />
                <h3 className="ml-3 font-medium text-gray-900">Approval</h3>
              </div>
              <p className="w-1/3 text-[#646A73] mb-4">
                {
                  "Speed up your process from days to hours with smart workflows that route, track, and notify approval completion."
                }
              </p>
            </div>
            <img
              src="/ApprovalImg.avif"
              alt="Base Image"
              className="relative rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anything;
