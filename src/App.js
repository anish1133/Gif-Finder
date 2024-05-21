import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background overflow-x-hidden items-center">
      <h1 className="  bg-white rounded-lg text-4xl font-bold w-11/12 text-center mt-[40px] "> 
      RANDOM GIFs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
          <Random /> 
          <Tag />
      </div>
    </div>
  );
}

export default App;
