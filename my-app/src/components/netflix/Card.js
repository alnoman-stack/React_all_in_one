import React from "react";
import Heading from "./Heading";

import "./netflix.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="poster" />
          <div className="card-info">
            <span>{props.sname}</span>
            {/* <h3>{props.title}</h3> */}
            <Heading title={props.title} />
            <button>
              <a target={"_blank"} href={props.link}>
                Watch Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
