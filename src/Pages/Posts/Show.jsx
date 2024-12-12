import axios from "axios";
import { useEffect, useState } from "react";
import {  Link,useNavigate, useParams } from "react-router";

const Show = () => {
 const { id } = useParams();
 const[post,setPost]=useState({});
 const navigate= useNavigate();

 const comeback =()=>{
  navigate("/post");
 };
 let fetchPost=async()=>{
  try {
   let res = await axios.get(`http://localhost:3002/Post${id}`)
   setPost(res.data);
  } catch (error) {
   console.log(error.message);
   
  }
 };
 useEffect(()=>{
  fetchPost();
 },[]);
 return ( 
  <>
     <div className=" container mr-10 mt-5">

    <div key={post.id} className="bg-slate-200 max-w-sm rounded-lg 
overflow-hidden">  
     <a href="#"><img className="max-w-sm object-cover  pt-3 pr-3 pl-3 
rounded-lg" src={post.image} alt="pic" /></a>
     <div className=" p-4">
     <a href="#"> <h4 className="text-base font-medium  h-14 
line-clamp-2 text-gray-950">
{post.caption}</h4></a>
     </div>
     <div>
    <Link to="/post"> <button onClick={comeback} type="button" className="px-3 py-2 text-sm 
font-medium 
text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
focus:ring-4 focus:outline-none focus:ring-blue-300 
dark:bg-blue-600 dark:hover:bg-blue-700 
dark:focus:ring-blue-800 mr-72 mb-3">بازگشت</button></Link>
    </div>
    </div>
    
   </div>
  </>
  );
}
 
export default Show;