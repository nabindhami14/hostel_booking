/* eslint-disable react/prop-types */
const HostelCarouselItem = ({ images }) => {
  return (
    <div className="relative flex-shrink-0 flex-grow-0 basis-full min-w-0">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <img src={images.uri} className="rounded-md" />
    </div>
  );
};

export default HostelCarouselItem;
