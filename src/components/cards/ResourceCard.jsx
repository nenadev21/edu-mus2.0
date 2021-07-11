import React from "react";
import { Link } from "react-router-dom";


export default function ResourceCard({data}) {

    return (
        <div className="ResourceCard" style={{flexBasis: "25%"}}>
            <div className="card" style={{margin: "10px"}}>
        <div className="card-image">
            <figure className="image is-4by3">
                    <img src={data.resource_img} alt={data.resource_title}/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            </div>
            <div className="media-content">
                    <p className="title is-4">{data.resource_title}</p>
            </div>

            <div className="content">
                {data.resource_description}
            <br/>
            <Link className="button is-info is-outlined is-small" style={{margin: "10px"}} > Ver Recurso </Link>
            </div>
        </div>
    </div>
    </div>
                                    
    );
}