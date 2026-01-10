import LocationIcon from "@/assets/comps/locationIcon";
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const REGIONS: Record<string, string[]> = {
  West: [
    "Washington",
    "Oregon",
    "California",
    "Nevada",
    "Idaho",
    "Utah",
    "Arizona",
    "Montana",
    "Wyoming",
    "Colorado",
    "New Mexico",
    "Alaska",
    "Hawaii",
  ],
  Midwest: [
    "North Dakota",
    "South Dakota",
    "Nebraska",
    "Kansas",
    "Minnesota",
    "Iowa",
    "Missouri",
    "Wisconsin",
    "Illinois",
    "Indiana",
    "Michigan",
    "Ohio",
  ],
  South: [
    "Texas",
    "Oklahoma",
    "Arkansas",
    "Louisiana",
    "Kentucky",
    "Tennessee",
    "Mississippi",
    "Alabama",
    "West Virginia",
    "Virginia",
    "North Carolina",
    "South Carolina",
    "Georgia",
    "Florida",
    "Maryland",
    "Delaware",
    "District of Columbia",
  ],
  Northeast: [
    "Maine",
    "New Hampshire",
    "Vermont",
    "Massachusetts",
    "Rhode Island",
    "Connecticut",
    "New York",
    "New Jersey",
    "Pennsylvania",
  ],
};

const REGION_COLORS: Record<string, string> = {
  West: "#60a5fa",
  Midwest: "#34d399",
  South: "#fbbf24",
  Northeast: "#a78bfa",
};

const partneredTowns = [
  "Arizona",
  "California",
  "Colorado",
  "Idaho",
  "Nevada",
  "New Mexico",
  "Oregon",
  "Utah",
  "Wyoming",
  "Arkansas",
  "Florida",
  "Louisiana",
  "Mississippi",
  "North Carolina",
  "Oklahoma",
  "South Carolina",
  "Texas",
  "Illinois",
  "Iowa",
  "Kansas",
  "Minnesota",
  "Nebraska",
  "North Dakota",
  "Wisconsin",
  "Delware",
  "Maine",
  "Massachusetts",
  "New Jersey",
  "New York",
  "Pennsylvania",
  "Vermont",
];

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

function getRegionByName(stateName: string) {
  return Object.keys(REGIONS).find((region) =>
    REGIONS[region].includes(stateName)
  );
}

type Props = {
  handleColorChange: (region: string | null) => void;
  regionColors: Record<string, string>;
};

export default function USRegionMap({
  handleColorChange,
  regionColors,
}: Props) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(
    "West"
  );
  const handleColor = (region: string | null) => {
    handleColorChange(region);
  };

  return (
    <section className="w-full flex gap-3 flex-col items-center">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name;
              const region = getRegionByName(stateName);
              const isHovered = hoveredRegion === region;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setHoveredRegion(region ?? null);
                    handleColor(region ?? null);
                  }}
                  // onMouseLeave={() => setHoveredRegion(null)}
                  style={{
                    default: {
                      fill: isHovered
                        ? REGION_COLORS[region ?? ""]
                        : "#adafb3",
                      outline: "none",
                      transitionDelay: "300",
                      // left: isHovered ? "10px" : "0px",
                    },
                    hover: {
                      fill: REGION_COLORS[region ?? ""],
                      outline: "none",
                      cursor: "pointer",
                      transitionDelay: "300",
                    },
                    pressed: {
                      fill: "#dc2626",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <section className="flex gap-2 items-center flex-col">
        <p className="text-2xl md:text-5xl font-medium text-gray-600">
          {hoveredRegion?.toUpperCase()}
        </p>
        <div
          className="grid grid-cols-2 gap-x-6 gap-y-2 opacity-0 translate-y-2 scale-[0.98] transition-all duration-500 ease-out
            data-[show=true]:opacity-100
            data-[show=true]:translate-y-0
            data-[show=true]:scale-100"
          data-show
        >
          {hoveredRegion &&
            partneredTowns.map(
              (town) =>
                REGIONS[hoveredRegion].includes(town) && (
                  <div className="flex items-center gap-2" key={town}>
                    <div className="w-4 aspect-square text-green-500 ">
                      <LocationIcon />
                    </div>
                    <p
                      className="text-xl font-medium text-gray-700"
                      style={{ color: REGION_COLORS[hoveredRegion] }}
                    >
                      {town}
                    </p>
                  </div>
                )
            )}
        </div>
      </section>
    </section>
  );
}
