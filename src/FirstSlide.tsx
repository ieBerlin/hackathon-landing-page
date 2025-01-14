export default function FirstSlide() {
  return (
    <div className="h-[1028px] header-overlay relative">
      <div className="w-[84%] mx-auto">
        <div
          className="grid grid-flow-col gap-6 pt-[71px] bg-transparent"
          style={{
            gridTemplateColumns: "2fr 1fr",
          }}
        >
          {/* Left Section */}
          <div className="py-4 px-8 rounded-full bg-white flex items-center justify-between ">
            <div className="flex flex-col items-center justify-center text-center h-full space-y-1">
              <h6 className="text-sm font-medium text-gray-500 tracking-[5px]">
                SMART
              </h6>
              <h1 className="text-xl font-extrabold text-green-600">ALGERIA</h1>
            </div>

            <div className="flex items-center space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>

              <h2 className="text-xs font-semibold text-gray-700 cursor-pointer hover:text-green-600">
                HOME
              </h2>
              <h2 className="text-xs font-semibold text-gray-700 cursor-pointer hover:text-green-600">
                HOW TO PLAY
              </h2>
              <h2 className="text-xs font-semibold text-gray-700 cursor-pointer hover:text-green-600">
                PREVIOUS VERSIONS
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            </div>
          </div>

          {/* Right Section */}
          <div className="py-4 px-6 rounded-full bg-white flex flex-col items-center justify-center">
            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Join Us Button */}

              {/* Sign In Button */}
              <button className="text-green-600 text-sm font-semibold px-6 py-2 border border-transparent rounded-full hover:bg-gray-100 transition duration-200">
                Sign In
              </button>
              <button className="rounded-full bg-green-600 text-white text-sm font-semibold px-6 py-2 hover:bg-green-700 transition duration-200">
                Join Us
              </button>
            </div>
          </div>
        </div>
        {/* hero section  */}

        {/* Timer  */}

        {/* Timer Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[70%]">
          <div
            className="relative w-2/3 mx-auto bg-black text-center text-white py-4"
            style={{
              clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)",
            }}
          >
            Remaining time for the{" "}
            <span className="text-red-500 font-semibold">
              SUBMISSION DEADLINE
            </span>
          </div>

          <div className="bg-black py-10 rounded-lg text-center text-white">
            <div className="flex justify-center gap-6 text-3xl font-bold">
              {/* Days */}
              <div className="flex flex-row justify-center gap-2 items-end">
                <h1 className="text-red-500 text-5xl font-bold">53</h1>
                <h1 className="text-white text-3xl font-bold">Days</h1>
              </div>

              {/* Hours */}
              <div className="flex flex-row justify-center gap-2 items-end">
                <h1 className="text-red-500 text-5xl font-bold">16</h1>
                <h1 className="text-white text-3xl font-bold">Hours</h1>
              </div>

              {/* Minutes */}
              <div className="flex flex-row justify-center gap-2 items-end">
                <h1 className="text-red-500 text-5xl font-bold">53</h1>
                <h1 className="text-white text-3xl font-bold">Minutes</h1>
              </div>

              {/* Seconds */}
              <div className="flex flex-row justify-center gap-2 items-end">
                <h1 className="text-red-500 text-5xl font-bold">16</h1>
                <h1 className="text-white text-3xl font-bold">Seconds</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
