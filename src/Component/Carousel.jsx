import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import StoryPage from "./StoryPage";

const Carousel = () => {
  const [data, setData] = useState([]);
  const [filterData, setFillerData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://instagram-stories.onrender.com/data"
      );

      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleClick = (ele) => {
    setIsOpen(!isOpen);
    setFillerData(ele);
  };
  console.log(filterData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isOpen ? (
        <StoryPage
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          filterData={filterData}
        />
      ) : (
        <div>
          <p className="head">Instagram</p>
          <Swiper
            spaceBetween={-100}
            slidesPerView={3}
            pagination={{ clickable: true }}
            allowTouchMove
            style={{ height: "100px", marginLeft: "15px" }}
          >
            {data.map((ele, idx) => (
              <SwiperSlide id={idx} onClick={() => handleClick(ele)}>
                <div className="warpper">
                  <img src={ele.userImg} alt="img" />
                  <p>{ele.userName}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Carousel;
