import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UnitCard({ unit }) {

    return (
        <div style={{flexBasis: "33.333333%"}} className="UnitCard">
            <div className="card" style={{height: "240px", margin: "15px"}}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <FontAwesomeIcon icon={unit.icon} color="#00C4A7" />
                            </figure>
                        </div>
                            <p className="title is-4">{unit.unit_name}</p>
                    </div>
                        <div className="content">
                            {unit.subtitle} 
                        </div>
                        <Link className="button is-info is-outlined is-small" to="/sessions-overview">{unit.class_count} clases </Link>
                </div>
            </div>
        </div>
                                    
    );
}


