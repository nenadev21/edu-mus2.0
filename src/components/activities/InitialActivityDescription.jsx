import Video from "../video/Video";

function InitialActivityDescription({ setHeight, isClose, content, data }) {

    return (
         <div style={{ maxHeight: `${setHeight}` }} className="accordion-context">
            <div className={`accordion-text ${isClose} start-instruction`}>Instrucciones de inicio: {data && data.start_instructions}</div>
            {data.guide && <div className='accordion-text guide'>
                <h4>{data.guide.name}</h4>
                <p>{data.guide.description}</p>
                <p>{data.guide.content}</p>
            </div>}
            <Video videoSize={setHeight} isClose={isClose} content={content} url={data.link} resourceName={data.resource_name} />    
        </div>
    );
}

export default InitialActivityDescription;