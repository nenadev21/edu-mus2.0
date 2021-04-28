import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faComments } from '@fortawesome/free-solid-svg-icons';

export default function Session() {
    return (
        <div>
            <article className="panel is-info">
              <p className="panel-heading">
                  Clase 1
              </p>
                <a href="/" className="panel-block is-active">
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faComments} color="blue" />
                </span>
                Inicio: Tips para comenzar la clase
                <button className="button is-primary is-rounded is-small"> Ver </button>
                  </a>
                  <a href="/" className="panel-block is-active">
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faPlay} color="blue" />
                </span>
                Actividad Inicial: Video sobre los aymaras
                  <span>
                    Video
                  </span>       
                </a>
                <a href="/" className="panel-block">
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faPlay} color="blue" />
                </span>
                Actividad Principal: Video con cancion xxx. Invita a tus alumn@s a cantar juntos
                </a>
                <a href="/" className="panel-block">
                <span className="panel-icon">
                  <FontAwesomeIcon icon={faComments} color="blue" />
                </span>
                Cierre: Tips para el cierre de la clase
                </a>
          </article>
        </div>
    );

}