import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  //console.log(props);
  const contentStyle = {
    color: color,
    //JavaScript: font-size React: fontSize
    fontSize: "18px"
  };

  //return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
