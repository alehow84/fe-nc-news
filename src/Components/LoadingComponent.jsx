import React from "react";
import ReactLoading from "react-loading";

// Default values shown

export default function LoadingComponent() {
  return (
    <div className="loading-container">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#40a8c4"}
        height={667}
        width={375}
        delay={2}
      />
    </div>
  );
}
