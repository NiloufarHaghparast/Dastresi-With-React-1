import { Swiper, SwiperSlide } from "Swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../Slider/Slider.css";
import { Autoplay, Pagination} from "swiper/modules";
import useSWR from "swr";


export default function slider() {
 let {data:slider}=useSWR("http://localhost:3002/Slider")
  return (
    <>
    <div className="slider max-w-screen-xl mt-8 ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slider?.map((slide) => ( 
   <SwiperSlide key={slide.id}>
     <img className='rounded-xl' src={slide.image} alt={slide.alt} />
   </SwiperSlide>
 ))}
      </Swiper>
      </div>
    </>
  );
}
