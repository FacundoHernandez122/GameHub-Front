import React, { useState, useEffect } from "react";

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = -scrollY * 0.5;

  return (
    <div className="totalHeaderContent">
      <div className="tittleHeader d-flex justify-content-center align-items-end">
        <img className="logo_icon_header" src="/img/GameHub.jpg.png" alt />
      </div>
      <div className="headerEffect">
        <video
          src="/img/Home_vid_def.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
          poster="\Home_vid_def.mp4"
          className="vidEffect "
          style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
        ></video>
      </div>
    </div>
  );
}

export default Header;
