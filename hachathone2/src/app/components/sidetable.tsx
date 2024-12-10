import React from 'react';
import Image from 'next/image';

export const SideTable = () => {
  return (
    <div className="w-full flex flex-col items-center p-4  py-20 bg-[#FAF4F4]">
      {/* Images and Text Section */}
      <div className="w-[90%] flex justify-between items-start gap-8"> {/* Adjusted gap */}
        {/* Left Image and Text */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/table2.jpg" // Replace with your left image path
            alt="Side Table Left"
            width={605}
            height={562}
            className="object-cover"
          />
          <div className="text-center">
          <h3 className="text-4xl font-bold">Side Table</h3>
            <p className="text-sm mt-1">
              <span className="underline cursor-pointer font-poppins text-2xl ml-4">
                View More
              </span>
            </p>
          </div>
        </div>

        {/* Right Image and Text */}
        <div className="flex flex-col items-center space-y-4"> {/* Same layout as left */}
          <Image
            src="/table1.jpg" // Replace with your right image path
            alt="Side Table Right"
            width={605}
            height={562}
            className="object-cover"
          />
           <div className="text-center">
          <h3 className="text-4xl font-bold">Side Table</h3>
            <p className="text-sm mt-1">
              <span className="underline cursor-pointer font-poppins text-2xl">
                View More
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideTable;
