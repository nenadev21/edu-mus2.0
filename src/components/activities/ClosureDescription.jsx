import { addLineBreaks } from "../../helpers/addLineBreaks";

function ClosureDescription({ activityHeight, isClosed, content, data }) {

    return (
        <div ref={content} style={{ maxHeight: `${activityHeight}` }} className="accordion-context">
            <div className={`accordion-text ${isClosed} start-instruction`}>{data && data.start_instructions}</div>
            <p className={`accordion-text ${isClosed} content`}> {data && addLineBreaks(data.resource_details)}</p>

              <div className={`accordion-text ${isClosed} end-instruction`}>{data && data.end_instructions}</div>
        </div>
        
    );
}

export default ClosureDescription;