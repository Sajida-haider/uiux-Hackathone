import React from 'react';

const BgImageComponent = () => {
  return (
    <div className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/insta.jpg')" }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src="/instatex.jpg
        " alt="Centered Image" className="w-auto h-auto" />
      </div>
    </div>
  );
}

export default BgImageComponent;