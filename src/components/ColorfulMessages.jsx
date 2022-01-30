import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contantStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contantStyle}>{children}</p>;
};

export default ColorfulMessage;
