import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCoordinates = create(
  persist(
    (set) => ({
      coordinates: [27.7172, 85.324],
      setCoordinates: (coordinates) => set({ coordinates }),
      initializeCoordinates: () => {
        set((state) => {
          if (state?.coordinates === null) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                set({ coordinates: [latitude, longitude] });
              },
              (error) => {
                console.error("Error getting location: ", error);
              }
            );
          }
        });
      },
    }),
    {
      name: "coordinates",
    }
  )
);
