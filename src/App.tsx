import React from "react";
import "./index.css";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

const App: React.FC = () => {
  return (
    <div className="pb-[40px]">
      <FirstSlide />
      <SecondSlide />
    </div>
  );
};

export default App;
