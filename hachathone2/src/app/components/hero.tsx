import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[1000px] bg-[#FBEBB5] flex items-center justify-between px-[160px]">
      {/* Text Section */}
      <div className="w-[55%]">
        <h1 className="text-[50px] font-semibold leading-none px-12 py-4">
          Rocket single
          <br />
          <span className="block py-4 ">seater</span>
        </h1>

        <h6 className="font-medium text-[22px] underline px-12">
          Shop Now
        </h6>
      </div>

      {/* Image Section */}
      <div className="w-[50%] flex justify-end">
        <Image
          src="/Rocket seater.jpg" // Image in the public folder
          alt="Rocket Single Seater"
          width={853}
          height={1000}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
