import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AllActivities.css";
import ClosureDescription from "./ClosureDescription";


function ClosureInstruction({ data }) {
  const [isClosed, setIsClose] = useState("");
  const [iconSubtitle, setIconSubtitle] = useState(faPlus);
  const [activityHeight, setActivityHeight] = useState("0px");
  
  const content = useRef(null);

  function toggleAccordion({data}) {
    setIsClose(isClosed ? "": "is-active");
    setIconSubtitle(isClosed ? faPlus : faChevronUp);
   
    setActivityHeight(isClosed ? "0px" : 'fit-content')
  }

    return (
        <div className="accordion-section">
        <a className="panel-block" onClick={toggleAccordion}>
          <p className="accordion-title">
            {data.closure_instruction}  {`(${data.closure_instruction_resource.duration.toString()} minutes)`}
          </p>
            <FontAwesomeIcon className="accordion-icon" icon={iconSubtitle} color="#3E8ED0" />
        </a>
        <ClosureDescription activityHeight={activityHeight} isClosed={isClosed} content={content} data={data.closure_instruction_resource} />
      </div>
    );
}

export default ClosureInstruction;