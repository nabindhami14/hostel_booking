import { Feather, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Map from "../../components/map";

const hostel = {
  id: 1,
  name: "MOHAN SOLUTIONS",
  location: "Balkumari, Lalitpur",
  images: [
    {
      uri: "https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      uri: "https://images.pexels.com/photos/1379627/pexels-photo-1379627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ],
  description:
    "Mohan Solutions offers comfortable hostel accommodations in the tranquil neighborhood of Balkumari, Lalitpur. Each room is designed with modern amenities to ensure a pleasant stay. The hostel is conveniently located near public transport links and local attractions, making it an ideal choice for students and working professionals alike.",
  facilities: [
    "Free Wi-Fi",
    "24/7 Security",
    "Laundry Services",
    "Shared Kitchen Facilities",
    "Daily Housekeeping",
  ],
};

const Hostel = () => {
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
        <div className="w-11/12 mx-auto">
          <h2 className="underline">{hostel.name}</h2>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> <span>{hostel.location}</span>
          </div>

          <p className="mt-4">{hostel.description}</p>

          {/* FACILITIES */}
          <div className="mt-4">
            <h3 className="font-bold">Features</h3>
            <ul className="grid grid-cols-2 gap-4 mt-2">
              {hostel.facilities.map((facility, index) => (
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

        {/* MAP */}
        <Map />
      </div>
    </div>
  );
};

export default Hostel;
