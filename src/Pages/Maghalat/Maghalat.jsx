import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import useSWR from 'swr';


const Maghalat = () => {
let{data:maghalat}=useSWR("http://localhost:3002/Maghalat")
 return ( 
   <div className="bg-white py-8 rounded-2xl mr-2 , ml-2 mt-8">
     <div className="grid grid-cols-2 max-w-full">
      <div className="text-right text-gray-500 pr-5 text-xl font-bold ">
       <h1>آخرین مقالات</h1>
      </div>
      <div className="text-left text-gray-500 pl-5 text-base font-normal">
       <a href="#"><h1>ورود به بلاگ</h1></a>
      </div>
     </div>
     <div className="container mx-auto px-4 pt-8">
       <Swiper
           slidesPerView={1}
           spaceBetween={10}
           centeredSlides={true}
           loop={true}
           autoplay={{
             delay: 2000,
             disableOnInteraction: false,
             pauseOnMouseEnter: true,
           }}
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
               slidesPerView: 4 ,
               spaceBetween: 10,
             },
           }}
            modules={[Autoplay]}
          className="mySwiper"
       >
         {maghalat?.map(({id,image, discription}) => (
           <SwiperSlide key={id} className='rounded-lg' >
            <a href="#"><div className="bg-gray-50 shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-4">
               <img 
                 className="w-full rounded-lg object-cover hover:scale-105 transition-transform duration-300 pt-5 pr-2 " 
                 src={image} 
               />
               <div className="p-4">
                 <h5 className="text-base font-normal mb-2 text-center pt-4 line-clamp-2 text-gray-950 hover:text-blue-700">
                   {discription}
                 </h5>
                 </div>
               </div></a>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
   </div>
 );
}
export default Maghalat;