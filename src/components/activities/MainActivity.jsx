import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./AllActivities.css";
import MainDescription from "./MainDescription";
import {Link } from "react-router-dom";


function MainActivity({ data, classes }) {
  console.log(classes)
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
        <Link className="panel-block" onClick={toggleAccordion}>
          <p className="accordion-title">
            {data.main_activity} {`(${data.main_activity_resource.duration.toString()} minutes)`}
          </p>
            <FontAwesomeIcon className="accordion-icon" icon={iconSubtitle} color="#3E8ED0" />
        </Link>
        {data.main_activity_resource && <MainDescription activityHeight={activityHeight} isClosed={isClosed} content={content} data={data.main_activity_resource} />}
      </div>
  );
}

export default MainActivity;