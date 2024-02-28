import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function MapChart() {
  const handleClick = (geo) => () => {
    console.log(geo);
  };
  return (
    <ComposableMap>
      <Geographies geography="/countries.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={handleClick(geo.properties)}
                //           style={{
                //   default: {
                //     fill: "#EEE",
                //   },
                //   hover: {
                //     fill: "#F53",
                //   },
                //   pressed: {
                //     fill: "#E42",
                //   },
                // }}
                fill={geo.properties.visited ? "#50daa799" : "#eeeeee45"}
                stroke="#eeeeee40"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
