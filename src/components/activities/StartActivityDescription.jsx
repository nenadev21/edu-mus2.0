import { addLineBreaks } from "../../helpers/addLineBreaks";
function StartActivityDescription({activityHeight, vidHeight, isClosed, content, data }) {
 
    return (
        <div ref={content} style={{maxHeight: `${activityHeight}`}}className="accordion-context">
            <div className={`accordion-text ${isClosed} start-instruction`}>{addLineBreaks(data.start_instructions)}</div>
        </div>
        
    );
}

export default StartActivityDescription;