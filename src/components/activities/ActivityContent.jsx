import React from 'react'
import Video from "../video/Video";
import { addLineBreaks } from "../../helpers/addLineBreaks";

export default function ActivityContent(props) {
  const { resource, guide, start_instruction, end_instruction } = props.activity

  const renderResource = (resource) => {
    if (resource.resource_type ==='video') {
      return (
        <Video
          isOpen={props.isOpen}
          url={resource.link}
          resourceName={resource.resource_name}
        />
      )
    }
    else {
      return (
        <p className={`accordion-text ${props.contentClass} content`}>
          {addLineBreaks(resource.resource_details)}
        </p>
      )
    }
  }

  return (
    <div className="accordion-context" style={{ maxHeight: props.contentHeight }}>
      {start_instruction &&
        <div className={`accordion-text ${props.contentClass}start-instruction`}>
            {addLineBreaks(start_instruction)}
        </div>}
      {resource.resource_id && renderResource(resource)}
      {guide.content &&
        <div className='accordion-text guide'>
          {addLineBreaks(guide.content)}
        </div>} 
      {end_instruction &&
        <div
          className={`accordion-text ${props.contentClass} end-instruction`}
        >
            {addLineBreaks(end_instruction)}
        </div>}    
    </div>
  )
}

