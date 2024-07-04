/* eslint-disable react/prop-types */

import { Coins, Feather, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SingleHostel = ({ hostel }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({})]);

  return (
    <div className="container mx-auto">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {hostel.images.map((h, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 flex-grow-0 basis-full min-w-0"
            >
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <img
                src={h.uri}
                className="w-full h-[30rem] rounded"
                alt={`Hostel Image ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="container mx-auto">
          <h2 className="underline">{hostel.name}</h2>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> <span>{hostel.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4" />
            <span>Nrs. {hostel.rent}/month</span>
          </div>

          <p className="mt-4">{hostel.description}</p>

          {/* FACILITIES */}
          <div className="mt-4">
            <h3 className="font-bold">Features</h3>
            <ul className="grid grid-cols-2 gap-4 mt-2">
              {hostel.features.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 border rounded-md"
                >
                  <Feather className="w-4 h-4" />
                  <li className="font-semibold">{facility}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHostel;
