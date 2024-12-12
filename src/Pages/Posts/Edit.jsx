import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Update from "../Posts/Update";

const Edit = () => {
  let {id}=useParams()
  const [post,setPost]=useState({})
  const fetchPost=async()=>{
    try {
        let res=await axios.get(`http://localhost:3004/slider/${id}`)
        setPost(res.data)
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(()=>{
    fetchPost()
  },[])
  return ( 
        <Update post={post} />
   );
}
 
export default Edit;