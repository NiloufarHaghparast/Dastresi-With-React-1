import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Delete = ({ id }) => {
  let navigate=useNavigate()
  const deleteItem = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          let res = await axios.delete(`http://localhost:3002/Post/${id}`);
          console.log(res.data);
          navigate("/post")
        } else {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!-delete",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
   <button onClick={deleteItem} type="button" className="px-3 py-2 text-sm 
   font-medium 
   text-center text-white bg-red-500 rounded-lg hover:bg-red-700 mr-3 mt-3 
   "> ایجاد پست جدید </button>
  );
};

export default Delete;
