import useSWR from "swr";

const Whyus = () => {
 let{data:whyus}=useSWR("http://localhost:3002/Whyus")
 return ( 
  <>
  <div className="max-w-full mt-10">
   <div className="text-center items-center text-2xl font-bold text-gray-950">
    <h1>چرا دسترسی رو برای خرید انتخاب کنیم؟</h1>
   </div>
   <div className=" grid grid-cols-4 gap-4 max-w-full mr-8 ml-8 mt-10 items-center">
    {whyus?.map(({id,image,title,discription})=>
    <div key={id} className="bg-white items-center">
     <div className="justify-items-center w-16 pr-20 mr-8 ">
     <img className=" max-w-14" src={image} alt="why" /></div>
     <div className="pt-2">
      <h2 className="text-base text-gray-500 font-semibold text-center">{title}</h2>
     </div>
     <div className="pt-5">
      <p className=" text-center text-gray-950 font-normal text-sm ">{discription}</p>
     </div>
    </div>
    )}
   </div>
  </div>
  </>
  );
}
 
export default Whyus;