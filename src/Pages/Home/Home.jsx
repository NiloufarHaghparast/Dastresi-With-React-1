import useSWR from "swr";
import Slider from "../Slider/Slider";
import Postyek from "../Posts/Postyek";
import Gallery from "../Gallery/Gallery";
import Newpost from "../New/Newpost";
import Whyus from "../Whyus/Whyus";
import Porfrosh from "../Porfrosh/Porfrosh";
import Maghalat from "../Maghalat/Maghalat";
import Post from "../Posts/post";
import "../Posts/Show"
import { Link } from "react-router";


const Home = () => {
  let { data: slider } = useSWR("http://localhost:3002/Slider");
  let { data: postyek } = useSWR("http://localhost:3002/postyek");
  let { data: gallery } = useSWR("http://localhost:3002/Gallery");
  let { data: newpost } = useSWR("http://localhost:3002/New");
  let { data: whyus } = useSWR("http://localhost:3002/Whyus");
  let { data: porfrosh } = useSWR("http://localhost:3002/Porfrosh");
  let { data: maghalat } = useSWR("http://localhost:3002/Maghalat");
  return (
    <>
      <div>
        <Slider slider={slider} />
        <Postyek postyek={postyek} />
        <Gallery gallery={gallery} />
        <Newpost newpost={newpost} />
        <Whyus whyus={whyus} />
        <Porfrosh porfrosh={porfrosh} />
        <Maghalat maghalat={maghalat} />
        <Link to="/post"></Link>
        <Link to="/Show"></Link>
      </div>
    </>
  );
};

export default Home;
