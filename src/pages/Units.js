import React from "react";

export default function Units() {
    const unitDetails = [
        { name: "Unidad 1", src: "https://images.pexels.com/photos/236149/pexels-photo-236149.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", description: "Cantar es entretenido y todos estamos equipados para poder cantar. Solo requiere un poco de practica!" },
        { name: "Unidad 2", src: "https://images.pexels.com/photos/7574203/pexels-photo-7574203.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", description: "Cantar es entretenido y todos estamos equipados para poder cantar. Solo requiere un poco de practica!" },
        { name: "Unidad 3", src: "https://images.pexels.com/photos/6437553/pexels-photo-6437553.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", description: "Cantar es entretenido y todos estamos equipados para poder cantar. Solo requiere un poco de practica!"},
        { name: "Unidad 4", src: "https://images.pexels.com/photos/7577238/pexels-photo-7577238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", description: "Cantar es entretenido y todos estamos equipados para poder cantar. Solo requiere un poco de practica!"},
        
    ]
    return (
        <div className="columns">
            <div className="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={unitDetails[0].src} alt="test" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{unitDetails[0].name}</p>
                            </div>
                        </div>
                        <div class="content">
                            {unitDetails[0].description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={unitDetails[1].src} alt="test" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{unitDetails[1].name}</p>
                            </div>
                        </div>
                        <div class="content">
                            {unitDetails[1].description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={unitDetails[2].src} alt="test" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{unitDetails[2].name}</p>
                            </div>
                        </div>
                        <div class="content">
                            {unitDetails[2].description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={unitDetails[3].src} alt="test" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{unitDetails[3].name}</p>
                            </div>
                        </div>
                        <div class="content">
                            {unitDetails[3].description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    