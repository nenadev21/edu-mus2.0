import Video from "../video/Video";
import React, { useRef } from "react";
import { addLineBreaks } from "../../helpers/addLineBreaks";

function MainDescription({activityHeight, isClosed, data }) {

    const content = useRef(0);
    return (
        <div className="accordion-context" style={{ maxHeight: `${activityHeight}` }}>
      
            <div className={`accordion-text ${isClosed} start-instruction`}>{data && addLineBreaks(data.start_instructions)}</div>
            
            <Video isClosed={isClosed} content={content} url={data.link} resourceName={data.resource_name} />
            {data.guide && <div className='accordion-text guide'>
                <p>{addLineBreaks(data.guide.content)}</p>
                </div>}
             
        </div>
    );
}

export default MainDescription;