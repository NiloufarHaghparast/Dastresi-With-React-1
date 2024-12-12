import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import useSWR from 'swr';

export default function Gallery() {
  let{data:gallery}=useSWR("http://localhost:3002/Gallery")
  return ( 
    <div className="bg-white py-8">
      <div className='text-center text-gray-700 text-2xl font-bold'>دسته بندی های منتخب</div>
    <div className="container mx-auto px-4 py-8">
  
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        loop={true} //     
        autoplay={{
          delay: 2000, //    
          disableOnInteraction: false, // 
          pauseOnMouseEnter: true, // 
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {gallery?.map(({id, image, alt}) => (
          <SwiperSlide key={id}>
            <div className="rounded-lg shadow-md overflow-hidden 
hover:shadow-lg transition-shadow duration-300">
              <img 
                className="w-full h-48 object-cover hover:scale-105 
transition-transform duration-300" 
                src={image} 
                alt={alt}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
