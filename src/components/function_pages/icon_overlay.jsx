import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const IconOverlay = ({ text }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-70 z-50">
      <LoadingOutlined className="text-3xl"/>
      {text && <div className="text-lg mt-2">{text}</div>}
    </div>
  );
};

export default IconOverlay;
