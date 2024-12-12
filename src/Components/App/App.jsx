import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Pages/Header/Header";
import Home from "../../Pages/Home/Home";
import "../../Pages/Slider/Slider";
import "../../Pages/Posts/Postyek";
import "../../Pages/Gallery/Gallery";
import "../../Pages/New/Newpost";
import "../../Pages/Whyus/Whyus";
import "../../Pages/Porfrosh/Porfrosh";
import "../../Pages/Maghalat/Maghalat";


import useSWR from "swr";
import { SWRConfig } from "swr";
import axios from "axios";
import Post from "../../Pages/Posts/post";
import Show from "../../Pages/Posts/Show";
import Create from "../../Pages/Posts/create";
import Delete from "../../Pages/Posts/Delete";
import Edit from "../../Pages/Posts/Edit";

const App = () => {
  const { data: slider } = useSWR("http://localhost:3002/Slider");
  const { data: postyek } = useSWR("http://localhost:3002/Postyek");
  const { data: gallery } = useSWR("http://localhost:3002/Gallery");
  const { data: newpost } = useSWR("http://localhost:3002/New");
  const { data: whyus } = useSWR("http://localhost:3002/Whyus");
  const { data: porfrosh } = useSWR("http://localhost:3002/Porfrosh");
  const { data: maghalat } = useSWR("http://localhost:3002/Maghalat");


  return (
    <BrowserRouter
      futures={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Header />
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            axios.get(resource, init).then((res) => res.data),
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Postyek" element={<postyek />} />
          <Route path="/Gallery" element={<gallery />} />
          <Route path="/Newpost" element={<newpost />} />
          <Route path="/Whyus" element={<whyus />} />
          <Route path="/Porfrosh" element={<porfrosh />} />
          <Route path="/Maghalat" element={<maghalat />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/show" element={<Show />} />
          <Route path="/post/create" element={<Create />} />
          <Route path="/post/delete" element={<Delete/>}/>
          <Route path="/post/Edit" element={<Edit/>}/>
          
         
          
        </Routes>
      </SWRConfig>
    </BrowserRouter>
  );
};

export default App;
