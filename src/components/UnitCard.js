import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faDrum, faGuitar, faHeadphones } from '@fortawesome/free-solid-svg-icons'


export default function UnitCard() {

    const unitDetails = [
        { title: "Unidad 1", icon: faMusic, subtitle: "Tradición folclórica de Chile y otros países. Sentido de identidad y respeto por la diversidad.", description: "Énfasis en la tradición folclórica de Chile y otros países. Sentido de identidad y respeto por la diversidad. Cantar, realizar percusión corporal y experimentar tocando un instrumento melódico.", clases: 10 },
        { title: "Unidad 2", icon: faDrum, subtitle: "La música en la vida diaria. Canto, representaciones de festividades y ceremonias.", description: "Participación de la música en la vida diaria: observación y participación por medio del canto y en representaciones de festividades y ceremonias. Reflexión de las emociones y sensaciones que transmite y sugiere la música.", clases: 10 },
        { title: "Unidad 3", icon: faGuitar, subtitle: "Interpretación y creación. Música integrada a otras expresiones artística.", description: "Énfasis en la interpretación y en la creación. Música integrada a otras expresiones artísticas: teatro, cine, etcétera. Aumento del repertorio musical y mayor variedad. Práctica de repertorio del folclor chileno incorporando técnicas vocales e instrumentales adquiridas.", clases: 10 },
        { title: "Unidad 4", icon: faHeadphones, subtitle: "Cuentos musicales y villancicos; mitos y tradiciones mapuches. Revisión final de progreso.", description: "Preparar cuentos musicales, incursionar en villancicos, y representación de mitos y tradiciones mapuches Revisión final de los progresos en los alumnos y presentación del trabajo del año.", clases: 10 },
        
    ]
    return (
        <div className="UnitCard">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <FontAwesomeIcon icon={unitDetails[0].icon} color="red" />
                            </figure>
                        </div>
                    <div class="media-content">
                            <p class="title is-4">{unitDetails[0].title}</p>
                    </div>
                    </div>
                        <div class="content">
                            {unitDetails[0].subtitle} 
                        </div>
                        <Link className="button is-info is-outlined is-small" to="/unit-overview"> {unitDetails[0].clases} clases </Link>
                </div>
            </div>
        </div>
                                    
    );
}


