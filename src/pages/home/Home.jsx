import Hero from "../../components/Hero";
import HostelCarousel from "../../components/carousel/hostel-carousel";

import { hostels } from "../../data";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* HOSTELS */}
      <div className="w-11/12 mx-auto grid sm:grid-cols-4 gap-4 my-10">
        {hostels.map((hostel) => (
          <HostelCarousel key={hostel.id} hostel={hostel} />
        ))}
      </div>
    </div>
  );
};

export default Home;
