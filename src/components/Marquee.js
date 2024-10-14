import React, { useState, useEffect } from "react";
import alpha from "../images/alpha.png";
import tech from "../images/tech.png";
import kasper from "../images/kasper.png";
import lasco from "../images/lasaco.png";
import Smart from "../images/smart.png";
import lirs from "../images/lirs.png";
import icsl from "../images/icsl.png";
import micro from "../images/micro.png";
import nibss from "../images/nibss.png";
import erg from "../images/erg.png";
import jira from "../images/jira.png"
function Marquee() {
  const imgarray = [
    { src: alpha },
    { src: tech },
    { src: kasper },
    { src: lasco },
    { src: Smart },
    { src: lirs },
    { src: icsl },
    { src: micro },
    { src: nibss },
    { src: erg },
    { src: jira },
  ];
  const [imgArray, setImgArray] = useState(imgarray);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgArray((prevArray) => [...prevArray, ...imgarray]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [imgarray]);

  return (
    <>
      <marquee behavior="scroll" direction="left" scrollamount="4">
        {imgArray.map((item) => {
          return (
            <>
              <img src={item.src} alt="Alphabeta" className="mx-4" />
              <span className="mx-4"> </span>
            </>
          );
        })}
      </marquee>
    </>
  );
}

export default Marquee;
