import React from "react";
import bhaskar from '../assets/bhaskar.png'
import dailyhunt from '../assets/dailyhunt.png'
import hindustan from '../assets/hindustan.png'
import news18 from '../assets/new18.png'
function Company() {
  return (
    <div
      className="h-[477.53px] flex flex-col justify-center items-center"
      style={{
        padding: "100px 84px",
        gap: "59px",
        // Added width to match your original requirement
      }}
    >
      <div className="flex flex-col items-center justify-center h-[164px] w-[1272px] text-center p-10">
        <h2 className="text-4xl mb-4 h-[48px]" style={{
                background: "linear-gradient(to right, #53ADE4, #277BA8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "36px",
                fontWeight: "bold",
              }}>Big companies are here</h2>
        <p className="text-center max-w-[850px] h-[86px] text-[#42526B] text-[20px] ">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next <br></br> consultancy website within a few minutes. You
          have a business to run. Stop <br></br> worrying about cross-browser bugs,
          designing new pages.
        </p>
      </div>

      <div className="h-[54.53px] w-[1272px] flex justify-around items-center justify-center">
        <div className="h-[54.3px]"><img src={bhaskar} alt="" /></div>
        <div><img src={hindustan} alt="" /></div>
        <div><img src={news18} alt="" /></div>
        <div><img src={dailyhunt} alt="" /></div>
      </div>
    </div>
  );
}

export default Company;
