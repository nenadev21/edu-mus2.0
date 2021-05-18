import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <form>
                    <input className="input is-rounded is-focused is-medium" type="text" placeholder="Busca por curso, unidad o tema" />
            </form>
        </div>
    );
}