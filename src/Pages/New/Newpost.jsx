import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import useSWR from 'swr';

const Newpost = () => {
let{data:newpost}=useSWR("http://localhost:3002/New")

 return ( 
   <div className="bg-gray-200 py-8 rounded-2xl mr-2 , ml-2">
       <div className="grid grid-cols-2 max-w-full">
  <div className="text-right text-gray-500 pr-5 text-2xl font-bold pb-5 ">
   <h1>همین الان موجود شد...</h1>
  </div>
  <div className="text-left text-gray-500 pl-5 text-base font-normal">
   <a href="#"><h1>مشاهده همه محصولات</h1></a>
  </div>
  </div>
     <div className="container mx-auto px-4">
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
               slidesPerView: 4 ,
               spaceBetween: 10,
             },
           }}
            modules={[Autoplay, Navigation]}
          className="mySwiper"
       >
         {newpost?.map(({id, image, price, discription, category}) => (
           <SwiperSlide key={id} className='rounded-lg' >
             <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
               <img 
                 className="w-full h-48 rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
                 src={image} 
               />
               <div className="p-4">
                 <div className="text-sm text-gray-400 mb-1 text-center">
                   {category}
                 </div>
                 <h5 className="text-base font-medium mb-2 text-center h-14 line-clamp-2 text-gray-950">
                   {discription}
                 </h5>
                   <div className="text-blue-700 font-semibold text-md text-left">
                     {price} <span className='text-gray-950'>تومان</span>
                   </div>
                 </div>
               </div>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
   </div>
 );
}
export default Newpost;