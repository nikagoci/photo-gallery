import React from "react";

const ImageGallery = () => {
  const nums = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 place-items-center gap-[40px]">
      {nums.map((num) => (
        <img
          className="w-[250px] h-[250px] border-8 p-2 shadow-xl rounded-xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZZocOm0mveS5oDanGcykSRAU-8pqOkJOwTxUvNmA8Q&s"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
