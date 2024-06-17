import React from "react";
import svglog from "../assets/vereda2.png";
import gImage from '../assets/GirlImage.png'
const Hero = () => {
  return (
    <div className="text-white h-[818px]  bg-[#161C2D]">
      <nav className="h-[110px] flex justify-between items-center px-[84px]">
        <div className="w-[168px] h-[70px]">
          <img className="w-full h-full" src={svglog} alt="Logo" />
        </div>
        <ul className="flex w-[388px] justify-around font-bold">
          <li className="cursor-pointer">Demos</li>
          <li className="cursor-pointer">Page</li>
          <li className="cursor-pointer">Support</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <button className="w-[209px] h-[50px] flex justify-center items-center rounded-[1rem] text-[16px] bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100">
          Get started on a project
        </button>
      </nav>
      <div className="content-area w-[1228px] h-[514.7px]  ml-[206px] mt-[54px] flex justify-between items-center">
        <div className="w-[600px] h-[481px] flex-col justify-between ">
        <p class="text-gradient-to-r from-[#53ade4]; to-[#277ba8]" style={{
              background: 'linear-gradient(to right, #53ADE4, #277BA8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>DEVELOP & GROW</p>
          <p className=" text-[40px] w-[600px ] h-[180px] font-bold">
            Crafting bespoke Apps tailored to fuel your business's growth
            trajectory
          </p>
          <p
            className="w-[554.53px] h-[130.72px] text-[20px] mt-[25px] font-[20px] font-normal leading-[30px] text-left opacity-70"
          >
            We specialize in creating custom apps meticulously <br></br> designed to
            propel your business forward. Our<br></br>  solutions are finely tuned to meet
            your growth <br></br>  objectives and drive success.
          </p>

          <button className="w-[209px] h-[50px] mt-[50px] flex justify-center items-center rounded-[1rem] text-[16px] bg-gradient-to-r from-[#53ADE4] to-[#277BA8] opacity-100">
            Get Started a Projec
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="w-[464px] h-[514.7px] ">
          <img src={gImage} alt="GirlImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
