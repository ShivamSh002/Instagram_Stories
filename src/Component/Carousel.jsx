import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/data");

      setData(res.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Swiper
      spaceBetween={-100}
      slidesPerView={3}
      pagination={{ clickable: true }}
      allowTouchMove
      style={{ height: "100px", marginLeft: "15px" }}
    >
      {data.map((ele, idx) => (
        <SwiperSlide id={idx}>
          <div className="warpper">
            <img src={ele.userImg} alt="img" />
            <p>{ele.userName}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
