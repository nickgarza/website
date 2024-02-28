import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function StateMap() {
  return (
    <ComposableMap>
      <Geographies geography="/states.json">
        {({ geographies }) =>
          geographies.map((geo) => {
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={geo.properties.visited ? "#50daa799" : "#ffffff50"}
                stroke="#808080"
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
}
