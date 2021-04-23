import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";



export default function Level() {
    return (
        <div className="Level">
            <div className="columns">
                <div className="title is-size-1">Crea clases inolvidables en un par de clicks</div>
        </div>
        <div className="columns">
            
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://images.pexels.com/photos/1490844/pexels-photo-1490844.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="child" />
                        </figure>
                    </div>
                        <footer class="card-footer">
                            <NavLink className="navbar-item" activeClassName="is-active" to="/units">
                                1ro Basico
                            </NavLink>
                            {/* <a href="/" class="card-footer-item">1ro Basico</a>     */}
                        </footer>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://images.pexels.com/photos/7574209/pexels-photo-7574209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="child" />
                        </figure>
                    </div>
                    <footer class="card-footer">
                <a href="/" class="card-footer-item">2do Basico</a>
            </footer>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://images.pexels.com/photos/4473409/pexels-photo-4473409.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="child" />
                        </figure>
                    </div>
                    <footer class="card-footer">
                <a href="/" class="card-footer-item">3ro Basico</a>
            </footer>
                </div>
            </div>
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://images.pexels.com/photos/7521359/pexels-photo-7521359.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="child" />
                        </figure>
                    </div>
                    <footer class="card-footer">
                <a href="/" class="card-footer-item">4to Basico</a>
            </footer>
                </div>
            </div>     
        </div>
            
        </div>

        
    );
}