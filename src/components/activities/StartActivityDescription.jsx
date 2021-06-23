
function StartActivityDescription({setHeight, isClose, content, data, resourceName }) {
console.log(resourceName)
    return (
        <div ref={content} style={{maxHeight: `${setHeight}`}}className="accordion-context">
        <div className={`accordion-text ${isClose}`}>{resourceName}</div>
        </div>
    );
}

export default StartActivityDescription;