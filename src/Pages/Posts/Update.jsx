import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ post }) => {  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const navigate=useNavigate()
  const clickHandler=(e)=>{
    e.preventDefault()
    const updatePost=async()=>{
      try {
          let res=await axios.put(`http://localhost:3002/Post/${post.id}`,{
            title,
            image,
            body 
          })
          console.log(res.data);
          navigate("/posts")
      } catch (error) {
        console.log(error.message);
        
      }
    }
    updatePost()
  }
  useEffect(() => {
    setTitle(post.title);
    setImage(post.image);
    setBody(post.body);
  },[post]);
  return (
    <>
      <form onSubmit={(e)=>clickHandler(e)}>
      <div className="col-6 bg-gray-300 p-5 text-gray-900 rounded-2xl max-w-lg mr-96 mt-5">
        <div className="block mb-3">
          <label htmlFor="title" className="text-capitalize mb-2 ml-2 pr-5">
            تیتر :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="block mb-3">
          <label htmlFor="image" className=" mb-2 ml-2">
            تصویر :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="block mb-3">
  <label htmlFor="body" className=" mb-3 ml-2 pr-4">
    متن :
  </label>
          <textarea
            className="form-control"
            placeholder="body"
            style={{ resize: "none", height: "150px" }}
            defaultValue={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="block">
  <button className=" text-sm text-capitalize bg-green-500 py-2 px-2
rounded-md mr-48">
     ثبت تغییرات
  </button>
        </div>
        </div>
      </form>
    </>
  );
};

export default Update;
