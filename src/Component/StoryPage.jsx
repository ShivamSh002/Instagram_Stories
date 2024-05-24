import React from "react";

const StoryPage = ({ isOpen, setIsOpen, filterData }) => {
  console.log("Data:", filterData);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <img src={filterData.instaStories.storyImg} />
    </div>
  );
};

export default StoryPage;
