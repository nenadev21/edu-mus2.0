import Video from "../video/Video";
import React, { useRef } from "react";
function MainDescription({ setHeight, isClose, data }) {

    const content = useRef(0);
    return (
        <div className="accordion-context">
            <div style={{ maxHeight: `${setHeight}` }}>
            <div className={`accordion-text ${isClose} start-instruction`}>Instrucciones de inicio: {data && data.start_instructions}</div>
            {data.guide && <div className='accordion-text guide'>
                <h4>{data.guide.name}</h4>
                <p>{data.guide.description}</p>
                <p>{data.guide.content}</p>
                </div>}
                </div>
            <Video style={{ maxHeight: `${setHeight}` }} videoSize={setHeight} isClose={isClose} content={content} url={data.link} resourceName={data.resource_name} />    
        </div>
    );
}

export default MainDescription;