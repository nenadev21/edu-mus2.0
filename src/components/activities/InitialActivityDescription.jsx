import Video from "../video/Video";
import React, { useRef } from 'react';
import { addLineBreaks } from "../../helpers/addLineBreaks";

function InitialActivityDescription({activityHeight, isClosed, data }) {
    const content = useRef(0);
    return (
        <div className="accordion-context" style={{ maxHeight: `${activityHeight}` }}>
            <div className={`accordion-text ${isClosed} start-instruction`}>{addLineBreaks(data.start_instructions)}</div>
            <div className='video-container' style={{height: '500px'}}>
                <Video isClosed={isClosed} content={content} url={data.link} resourceName={data.resource_name} />
                </div>
              {data.guide && <div className='accordion-text guide'>
                <p>{addLineBreaks(data.guide.content)}</p>
                </div>}
        </div>
    );
}

export default InitialActivityDescription;