import headerImage from "../../assets/SAH looppogo-01-02-01.png";

export default function Header() {
  return (
    <header className="w-full py-[20px] px-[20px] border-b border-[#2F2B3D1F] flex justify-start items-center">
      <img 
        src={headerImage} 
        alt="Logo" 
        className="w-[200px] h-auto"
      />
    </header>
  );
}
