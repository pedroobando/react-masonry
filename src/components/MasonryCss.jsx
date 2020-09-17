import React from "react";
import Masonry from "react-masonry-css";
import "../styles/masonrycss.scss";

import { gedata } from "../helper/getdata";

export const MasonryCss = () => {
  const breakpointColumnsObj = {
    default: 6,
    1400: 5,
    1200: 4,
    900: 3,
    700: 2,
    500: 1,
  };

  const data = gedata(20);
  return (
    <div>
      <h2>Masonry</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((img) => {
          return (
            <div key={img.uuid} className="my-masonry-grid_column">
              <img src={img.image} alt={img.name} style={{ width: "100%" }} />
              <h4 style={{ textAlign: "center" }}>{img.name}</h4>
              <p style={{ textAlign: "justify" }}>{img.coments}</p>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};
