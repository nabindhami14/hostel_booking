import Hero from "../../components/Hero";
import HostelCard from "../../components/HostelCard";

import { hostels } from "../../data";

const Home = () => {
  return (
    <div>
      <Hero />

      {hostels.map((hostel) => (
        <HostelCard key={hostel.id} {...hostel} />
      ))}
    </div>
  );
};

export default Home;
