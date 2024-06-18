import React from "react";
import testimonial from '../assets/Testimonial.png'
import pagination from '../assets/Pagination.png'
const Testimonial = () => {
  return (
    <>
      <div class="h-[948px] p-[100px_84px] gap-[70px]  border-8 border-sky-500 flex flex-col items-center justify-around text-center">
        <div className=" h-[233px] max-w-[1272px]  gap-[16px] flex flex-col items-center justify-around text-center my-8">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8] text-[24px] lg:text-[36px] font-semibold">
            Fueling Entrepreneurial Dreams with Tailored App
            <br className="hidden lg:block" />
            Startups Where Partnerships Thrive Beyond Client{" "}
            <br className="hidden lg:block" /> Relationships!
            <br className="hidden lg:block" />
          </h2>
          <p className="text-[16px] lg:text-[20px] max-w-[850px] text-[#42526B] font-medium">
            Phasellus interdum sagittis magna. Donec varius ultricies diam sed
            lacinia. Mauris <br className="hidden lg:block" /> porttitor quis
            risus eget mattis. Ut auctor.
          </p>
        </div>
        <div className=" w-[813px] bg-white rounded-lg shadow-md h-[393px] p-4 gap-[40px] flex flex-col items-center justify-around text-center ">
          <img src={testimonial} alt="testimonial" />
          <img src={pagination} alt="pagination" />
        </div>
        
      </div>
    </>
  );
};

export default Testimonial;
