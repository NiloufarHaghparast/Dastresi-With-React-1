import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Show from "./Show";
import Delete from "../Posts/Delete";

const Post = () => {
 let[post, setpost]=useState([]);
 const fetchPost= async()=>{
  try {
   let res = await axios.get ("http://localhost:3002/Post")
   setpost(res.data);
  } catch (error) {
   console.log(error.message)
  }
 };
 useEffect(()=>{
  fetchPost();
 },[]);
 return ( 
  <>
      <Link to="/Post/Create"> <button type="button" className="px-3 py-2 text-sm 
font-medium 
text-center text-white bg-green-500 rounded-lg hover:bg-green-700 mr-3 mt-3 
"> ایجاد پست جدید </button></Link>
   <div className="  mt-5 grid grid-cols-2 gap-2 mr-3">
    {post?.map((item)=>
    <div key={item.id} className="bg-slate-300 max-w-sm rounded-lg overflow-hidden">
     <a href="#"><img className="max-w-sm object-cover  pt-3 pr-3 pl-3 rounded-lg" src={item.image} alt="pic" /></a>
     <div className=" p-4 text-center">
     <a href="#"> <h4 className="text-base font-medium  h-14 
line-clamp-2 text-gray-950">
{item.caption} </h4></a>
     </div>
     <div className="grid grid-cols-4 items-center mb-2 mr-2">
    <Link to="/Post/show"> <button type="button" className="px-3 py-2 text-sm font-medium 
text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
focus:ring-4 focus:outline-none focus:ring-blue-300 
dark:bg-blue-600 dark:hover:bg-blue-700 
dark:focus:ring-blue-800 ">مشاهده بیشتر</button></Link>
    <Link to="/Post/Delete"> <button type="button" className="px-3 py-2 text-sm 
font-medium 
text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ml-6 ">پاک کردن</button></Link>
    <Link to="/Post/Edit"> <button type="button" className="px-3 py-2 text-sm 
font-medium 
text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 ml-3 ">ویرایش</button></Link>
  </div>
    </div>
    )}
   </div>
  </>
  );
}
 
export default Post;