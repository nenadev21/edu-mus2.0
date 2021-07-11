import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import Video from "../video/Video";
import InitialActivityDescription from "./InitialActivityDescription";
import "./AllActivities.css";

function InitialActivity({ data, classes }) {

  const [isClose, setIsClose] = useState("");
  const [iconSubtitle, setIconSubtitle] = useState(faPlus);
  const [setHeight, setHeightState] = useState("0px");
  // const [forceStop, forceStopState] = useState(false);
  const [playing, setPlaying] = useState(true);
  
  const content = useRef(0);

  function toggleAccordion({ data }) {
    setIsClose(isClose ? "": "is-active");
    setIconSubtitle(isClose ? faPlus : faChevronUp);
    setHeightState(isClose ? "0px" : "500px");
  }

    return (
        <div className="accordion-section">
        <a className="panel-block" onClick={toggleAccordion}>
          <p className="accordion-title">
            {data.initial_activity}  {`(${data.main_activity_resource.duration.toString()} minutes)`}
          </p>
            <FontAwesomeIcon className="accordion-icon" icon={iconSubtitle} color="#3E8ED0" />
        </a><Video videoSize={setHeight} isClose={isClose} content={content} url={data.initial_activity_resource.link} resourceName={data.initial_activity_resource.resource_name} /> 
        {/* {data.initial_activity_resource && <InitialActivityDescription setHeight={setHeight} isClose={isClose} content={content} data={data.initial_activity_resource} />} */}
      </div>
    );
}

export default InitialActivity;