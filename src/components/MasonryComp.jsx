import React from "react";
import Masonry from "react-masonry-component";
import { gedata } from "../helper/getdata";

import "../styles/masonrycomp.scss";

const imagesLoadedOptions = {
  backgroundColor: "tomato",
  background: ".my-bg-image-el",
};
const masonryOptions = {
  transitionDuration: 0,
};

export const MasonryComp = () => {
  const dataArray = gedata(50);
  const childElements = ({ image, name, uuid, coments }) => {
    return (
      <li className="image-element-class" key={uuid}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{coments}</p>
      </li>
    );
  };

  return (
    <Masonry
      className={"my-gallery-class"} // default ''
      elementType={"ul"} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {dataArray.map((item) => childElements(item))}
    </Masonry>
  );
};
