import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AllActivities.css";
import StartActivityDescription from "./StartActivityDescription";


function StartInstruction({data}) {
  const [isClosed, setIsClose] = useState("");
  const [iconSubtitle, setIconSubtitle] = useState(faPlus);
  const [vidHeight, setVidHeight] = useState("0px");
  const [activityHeight, setActivityHeight] = useState("0px");
  // const [forceStop, forceStopState] = useState(false);
  const [playing, setPlaying] = useState(true);
  
  const content = useRef(0);
 
  function toggleAccordion({ data }) {
    setIsClose(isClosed ? "": "is-active");
    setIconSubtitle(isClosed ? faPlus : faChevronUp);
    setVidHeight(isClosed ? "0px" : "500px");
    setActivityHeight(isClosed ? "0px": "fit-content")
  }
  
    return (
        <div className="accordion-section">
        <a className="panel-block" onClick={toggleAccordion}>
          <p className="accordion-title">
            {data.start_instruction} {`(${data.start_instruction_resource.duration.toString()} minutes)`}
          </p>
            <FontAwesomeIcon className="accordion-icon" icon={iconSubtitle} color="#3E8ED0" />
        </a>
        <StartActivityDescription activityHeight={activityHeight} vidHeight={vidHeight} isClosed={isClosed} content={content} data={data.start_instruction_resource}/>
      </div>
    );
}

export default StartInstruction;