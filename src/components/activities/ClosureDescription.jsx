import { addLineBreaks } from "../../helpers/addLineBreaks";

function ClosureDescription({ setHeight, isClose, content, data }) {

    return (
        <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion-context">
            <div className={`accordion-text ${isClose} start-instruction`}>Instrucciones de inicio: {data && data.start_instructions}</div>
            <p className={`accordion-text ${isClose} content`}> {data && addLineBreaks(data.resource_details)}</p>

              <div className={`accordion-text ${isClose} end-instruction`}>Instrucciones finales: {data && data.end_instructions}</div>
        </div>
        
    );
}

export default ClosureDescription;