import Hero from "../../components/Hero";
import HostelCard from "../../components/HostelCard";

import { hostels } from "../../data";

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="grid sm:grid-cols-4 gap-4">
        {hostels.map((hostel) => (
          <HostelCard key={hostel.id} {...hostel} />
        ))}
      </section>
    </div>
  );
};

export default Home;
