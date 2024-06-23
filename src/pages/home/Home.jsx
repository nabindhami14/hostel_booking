import Hero from "../../components/Hero";
import HostelCarousel from "../../components/carousel/hostel-carousel";

const hostels = [
  {
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
  },
  {
    id: 2,
    name: "BIRAJ HYDROPOWER",
    location: "Kalanki, Kathmandu",
    images: [
      {
        uri: "https://images.pexels.com/photos/3064079/pexels-photo-3064079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        uri: "https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      },
      {
        uri: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 3,
    name: "AAYUSH SUPPLIERS",
    location: "Kalanki, Kathmandu",
    images: [
      {
        uri: "https://images.pexels.com/photos/1000653/pexels-photo-1000653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        uri: "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        uri: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: 4,
    name: "RAMAN SUPPLIERS",
    location: "Surkhet",
    images: [
      {
        uri: "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        uri: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        uri: "https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
];

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
