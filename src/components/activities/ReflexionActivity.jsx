import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AllActivities.css";
import StartActivityDescription from "./StartActivityDescription";

function ReflexionActivity({data}) {
  const [isClose, setIsClose] = useState("");
  const [iconSubtitle, setIconSubtitle] = useState(faPlus);
  const [setHeight, setHeightState] = useState("0px");
  // const [forceStop, forceStopState] = useState(false);
  const [playing, setPlaying] = useState(true);
  
  const content = useRef(0);
  console.log(data)
  function toggleAccordion({ data }) {
    setIsClose(isClose ? "": "is-active");
    setIconSubtitle(isClose ? faPlus : faChevronUp);
    setHeightState(isClose ? "0px" : "500px");
  }

    return (
        <div className="accordion-section">
        <a className="panel-block" onClick={toggleAccordion}>
          <p className="accordion-title">
            {data.reflexion}  {`(${data.reflexion_resource.duration.toString()} minutes)`}
          </p>
            <FontAwesomeIcon className="accordion-icon" icon={iconSubtitle} color="#3E8ED0" />
        </a>
        <StartActivityDescription setHeight={setHeight} isClose={isClose} content={content} data={data.reflexion_resource}/>
      </div>
    );
}

export default ReflexionActivity