import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Activity.css';
import ActivityContent from './ActivityContent'

export default function Activity({ activity }) {
  const { activity_name, duration } = activity

  const [isOpen, setIsOpen] = useState(false);
  const activityIcon = isOpen ? 'chevron-up' : 'plus'
  const contentHeight = isOpen ? 'fit-content' : '0px'
  const contentClass = isOpen ? 'is-active' : ''

    return (
        <div className="accordion-section">
        <a className="panel-block" onClick={() => setIsOpen(!isOpen)}>
          <p className="accordion-title">
            {`${activity_name} (${duration} minutos)`}
          </p>
          <FontAwesomeIcon
            className="accordion-icon"
            icon={activityIcon}
            color="#3E8ED0"
          />
        </a>
          <ActivityContent
            isOpen={ isOpen}
            contentHeight={contentHeight}
            contentClass={contentClass}
            activity={activity}
          />
      </div>
  );
}

