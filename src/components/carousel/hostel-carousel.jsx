/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

import { useCarousel } from "../../hooks/use-carousel";
import HostelCarouselItem from "./hostel-carousel-item";
import { Link } from "react-router-dom";

const HostelCarousel = ({ hostel }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarousel(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  return (
    <div>
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {hostel.images.map((h) => (
            <HostelCarouselItem key={h.uri} images={h} />
          ))}
        </div>
        <div className="w-full absolute top-1/2 text-fuchsia-50">
          <div className="w-full flex items-center justify-between">
            <div>
              <button
                onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                disabled={prevBtnDisabled}
                className="disabled:hidden"
              >
                <ChevronLeft />
              </button>
            </div>
            <div>
              <button
                onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                disabled={nextBtnDisabled}
                className="disabled:hidden"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/hostels/${hostel.id}`}>
        <h2 className="underline">{hostel.name}</h2>
      </Link>
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4" /> <span>{hostel.location}</span>
      </div>
    </div>
  );
};
export default HostelCarousel;
