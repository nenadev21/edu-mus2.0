
function StartActivityDescription({ setHeight, isClose, content, data }) {
 
    return (
        <div ref={content} style={{maxHeight: `${setHeight}`}}className="accordion-context">
            <div className={`accordion-text ${isClose} start-instruction`}>Instrucciones de inicio: {data && data.start_instructions}</div>
        </div>
        
    );
}

export default StartActivityDescription;