import React from 'react';

const Asgher = () => {
  return (
    <div className="flex justify-between items-center w-full h-auto bg-[#FFF9E5] px-20 ">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full max-w-[900px]">
        <img 
          src="/Asghersofa.jpg" 
          alt="Left Image" 
          className="w-full h-auto object-cover"
        />
        {/* Button aligned to the Right */}
        <button className="bg-[#d7dbdb] text-gray-bold font-poppins py-2 px-6 rounded-md hover:bg-[#797979] transition-all mt-2  mb-16 ml-auto">
          Order Now
        </button>
      </div>

      {/* Right Image */}
      <img 
        src="/Asghertext.jpg" 
        alt="Right Image" 
        className="w-[331px] h-[108px] object-cover"
      />
    </div>
  );
};

export default Asgher;
