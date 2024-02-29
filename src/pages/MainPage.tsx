import React from "react";
import SearchBar from "../components/SearchBar";
import ImageGallery from "../components/ImageGallery";

const MainPage = () => {
  return (
    <section className="py-[50px] px-[40px] md:px-[80px] lg:px-[120px]">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="mt-[80px]">
        <ImageGallery />
      </div>
    </section>
  );
};

export default MainPage;
