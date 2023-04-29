import Image from "next/image";
import React from "react";
import ReactLoading from "react-loading";

function Loading({ type, color }) {
  return (
    <center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="whatsapp-logo"
          style={{ marginBottom: 10 }}
          height={200}
          width={200}
        />
        <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
      </div>
    </center>
  );
}

export default Loading;
