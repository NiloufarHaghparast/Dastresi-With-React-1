import useSWR from "swr";

const Postyek = () => {
  let {data:postyek}=useSWR("http://localhost:3002/Postyek")
  return ( 
    <>
     <div className="max-w-full bg-gray-200 border-gray-200 rounded-2xl pt-10 mt-10 pb-10 mr-2 ml-2">
    <div className="pb-5 pr-5 text-2xl font-semibold text-gray-600"> <h1><span className="text-red-500">%</span> تخفیف‌های روزانه دسترسی </h1></div>
  <div className="grid grid-cols-5 gap-2 max-w-8xl pr-2 pl-2">
  {postyek?.map(({id,image,price,discount,title})=>
  <div key={id} className="bg-white rounded-lg overflow-hidden">
  <a href="#"> <img className="max-w-xs object-cover" src={image} alt="proyek" /></a>
   <div className="p-4">
  <a href="#"> <h4 className="text-base font-medium mb-2 text-right h-14 line-clamp-2">
{title} </h4></a>
    <div className="flex flex-col gap-2">
     <a href="#"><div className="text-red-500 text-sm text-left">
      {discount} تومان تخفیف
     </div></a>
    <a href="#"><div className="text-blue-700 font-bold text-lg text-left">
      {price} <span className="text-gray-500 text-sm font-normal"> تومان</span>
     </div></a> 
    </div>
   </div>
  </div>
  )}
  </div>
 </div>
    </>
   );
}
 
export default Postyek;