import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faComments, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./SessionCard.css";

export default function SessionCard({ sessionInfo, cardIsOpen }) {
  const [isOpen, setIsOpen] = useState(cardIsOpen);
  const [setShape, setShapeState] = useState("is-info"); //trying to change shape when closed but I can't yet
  const [setIcon, setIconState] = useState(faPlus); //how can I set an exception for the first item?

  function toggleAccordion() {
    setIsOpen(isOpen ? false : true);
    setShapeState(isOpen === true ? "is-info" : "is-success")
    setIconState(isOpen === true ? faPlus : faChevronUp)
  }
 
  return (
    <div className="SessionCard">
      <article className={`panel is-info ${setShape}`}>
        <button className="button-heading" onClick={toggleAccordion}>
          <p className="panel-heading">{sessionInfo.session_name}
            <span>
              <FontAwesomeIcon icon={setIcon} style={{marginLeft: "1030px", transition: "transform 0.6s ease" }} />
            </span>
          </p>
        </button>
        {isOpen && (
          <div>
            <a href="/" className="panel-block is-active">
              <span className="panel-icon">
                <FontAwesomeIcon className="icon-resource" icon={faComments}/>
              </span>
              {sessionInfo.start_instruction}
              <button
                className="button is-primary is-rounded is-small button-resource">
                {' '}
                Ver{' '}
              </button>
            </a>
            <a href="/" className="panel-block is-active">
              <span className="panel-icon">
                <FontAwesomeIcon className="icon-resource" icon={faPlay}/>
              </span>
              {sessionInfo.initial_activity}
              <button
                className="button is-primary is-rounded is-small button-resource"
              >
                {' '}
                Video{' '}
              </button>
            </a>
            <a href="/" className="panel-block">
              <span className="panel-icon">
                <FontAwesomeIcon className="icon-resource" icon={faPlay}/>
              </span>
              {sessionInfo.main_activity}
            </a>
            <a href="/" className="panel-block">
              <span className="panel-icon">
                <FontAwesomeIcon className="icon-resource" icon={faComments}/>
              </span>
              {sessionInfo.closure_instruction}
            </a>
          </div>
        )}
      </article>
    </div>
  );
}
