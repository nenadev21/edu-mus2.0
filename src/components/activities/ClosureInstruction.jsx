import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AllActivities.css";
import ClosureDescription from "./ClosureDescription";


function ClosureInstruction({ data }) {
  const [isClose, setIsClose] = useState("");
  const [iconSubtitle, setIconSubtitle] = useState(faPlus);
  const [setHeight, setHeightState] = useState("0px")
  
  const content = useRef(null);

  function toggleAccordion({data}) {
    setIsClose(isClose ? "": "is-active");
    setIconSubtitle(isClose ? faPlus : faChevronUp);
    setHeightState(isClose ? "0px" : `${content.current.scrollHeight}px`);
  }

    return (
        <div className="accordion-section">
        <a className="panel-block" onClick={toggleAccordion}>
          <p className="accordion-title">
            {data.closure_instruction}
          </p>
            <FontAwesomeIcon className="accordion-icon" icon={iconSubtitle} color="#3E8ED0" />
        </a>
        <ClosureDescription setHeight={setHeight} isClose={isClose} content={content} data={data} />
      </div>
    );
}

export default ClosureInstruction;