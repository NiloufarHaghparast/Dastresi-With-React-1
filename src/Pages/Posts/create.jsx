import axios from "axios";
import { useRef, useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  let refTitle = useRef();
  let refImage = useRef();
  let refBody = useRef();
  let refErrorTitle = useRef();
  let refErrorImage = useRef();
  let refErrorBody = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      refErrorTitle.current.innerText = "required";
    } else if (title.length < 5) {
      refErrorTitle.current.innerText = "less 5 charecter...!";
    } else if (title.length > 100) {
      refErrorTitle.current.innerText = "more 100 charecter...!";
    }
    if (image.length === 0) {
      refErrorImage.current.innerText = "required";
    } else if (image.length < 5) {
      refErrorImage.current.innerText = "less 5 charecter...!";
    } else if (image.length > 1000) {
      refErrorImage.current.innerText = "more 1000 charecter...!";
    }
    if (body.length === 0) {
      refErrorBody.current.innerText = "required";
    } else if (body.length < 5) {
      refErrorBody.current.innerText = "less 5 charecter...!";
    } else if (body.length > 100) {
      refErrorBody.current.innerText = "more 100 charecter...!";
    } else {
      const createPosts = async () => {
        let res = await axios.post("http://localhost:3002/Post", {
          title,
          image,
          body,
        });
        console.log(res.data);
        refTitle.current.value = "";
        refImage.current.value = "";
        refBody.current.value = "";
      };
      createPosts();
    }
  };
  return (
    <div className="max-w-lg text-center mt-5 mr-96 ">
      <h1 className="text-capitalize text-center text-gray-950 font-bold text-lg">create post</h1>
      <div className="col-6 bg-gray-300 p-5 text-gray-900 rounded-2xl">
        <form onSubmit={(e) => clickHandler(e)}>
          <div className="block mb-3 mr-">
            <label htmlFor="title" className="text-capitalize mb-2 ml-2 pr-5">
              تیتر:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
              ref={refTitle}
            />
            <p ref={refErrorTitle} className="text-yellow-500"></p>
          </div>
          <div className="block  mb-3">
            <label htmlFor="image" className=" mb-2 ml-2">
              تصویر :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="image"
              onChange={(e) => setImage(e.target.value)}
              ref={refImage}
            />
            <p className="text-yellow-500" ref={refErrorImage}></p>
          </div>
          <div className="block mb-3">
            <label htmlFor="body" className=" mb-3 ml-2 pr-4">
              متن :
            </label>
            <textarea
              className="form-control"
              placeholder="body"
              style={{ resize: "none", height: "150px" }}
              onChange={(e) => setBody(e.target.value)}
              ref={refBody}
            ></textarea>
            <p className="text-yellow-500" ref={refErrorBody}></p>
          </div>
          <div className="block">
            <button className=" text-sm text-capitalize bg-green-500 py-2 px-2 rounded-md mr-12">
              منتشر کردن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
