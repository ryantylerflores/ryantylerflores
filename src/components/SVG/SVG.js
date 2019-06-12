import React from 'react';

const SVG =( {
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 32 32",
  path = ""
}) => (
  <svg
    width='100%'
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d={path}
    />
  </svg>
);

export default SVG;