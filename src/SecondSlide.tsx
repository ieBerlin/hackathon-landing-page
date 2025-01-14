import aboutHackathonPic from "./assets/about-hackathon.png";
import algeriaMinisterEducationPic from "./assets/algeria-minister-education.png";
export default function SecondSlide() {
  return (
    <div className="mx-auto w-[75%] bg-white mt-[182px]">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-2">
        About The{" "}
        <span className="text-red-500 font-bold uppercase">HACKATHON</span>
      </h1>

      {/* Subheading */}
      <p className="text-center text-base text-gray-600 mb-12">
        “Empowering Innovation in Universities”
      </p>

      {/* Content and Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg bg-white p-[54px]  shadow-lg rounded-tl-[71px] rounded-bl-[71px] rounded-tr-md rounded-br-md flex flex-col justify-between h-full flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 font-medium">
            Our mission is to bridge the gap between academia and industry,
            empowering young minds to think beyond boundaries and transform
            ideas into actionable solutions. This hackathon is more than just a
            competition—it’s a movement to inspire creativity, foster
            collaboration, and drive real-world impact.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-[721px] h-full overflow-hidden rounded-tr-[71px] rounded-br-[71px] rounded-tl-[20px] rounded-bl-[20px] flex-1">
          <img
            className="h-full w-full object-cover transform transition-transform"
            src={aboutHackathonPic}
            alt="Hackathon"
          />
        </div>
      </div>
      {/* Colllaboration section  */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-evenly bg-white p-[46px] rounded-[71px] shadow-xl gap-8 w-[75%] mx-auto">
        {/* Image */}
        <img
          src={algeriaMinisterEducationPic}
          className="w-[250px] h-[250px] rounded-full object-cover"
          alt="Algerian Minister of Education"
        />

        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl font-bold text-black mb-4">
            Collaborating to Innovate for the Future
          </h1>
          <h6 className="text-base text-gray-600 leading-relaxed">
            Supported by the{" "}
            <span className="font-semibold text-gray-800   ">
              Ministry of Higher Education
            </span>{" "}
            and led by Minister{" "}
            <span className="font-semibold text-gray-800   ">
              Kamel Beddari
            </span>
            , this event brings together students, teachers, and industry
            leaders to tackle pressing challenges and create innovative
            solutions that{" "}
            <span className="font-semibold text-gray-800   ">
              shape the future.{" "}
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
}
