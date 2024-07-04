import { useMemo, useState } from "react";

import SingleHostel from "../../components/SingleHostel";
import HostelsMap from "../../components/maps/HostelsMap";
import Search from "../../components/Search";
import Filters from "../../components/Filters";

import { hostels } from "../../data";

const Hostels = () => {
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [searchText, setSearchText] = useState("");

  // Filter hostels based on the search text
  const filteredHostels = useMemo(() => {
    return hostels.filter((hostel) =>
      hostel.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <div className="container mx-auto space-y-4 my-10">
      {/* SEARCH AND FILTERS */}
      <div className="w-full flex items-center justify-between gap-2">
        <Search searchText={searchText} setSearchText={setSearchText} />
        <Filters />
      </div>

      <HostelsMap
        hostels={filteredHostels}
        selectedHostel={selectedHostel}
        setSelectedHostel={setSelectedHostel}
      />

      {selectedHostel && <SingleHostel hostel={selectedHostel} />}
    </div>
  );
};

export default Hostels;
