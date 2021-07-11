import React from "react";
import ResourceCard from "../../components/cards/ResourceCard";
import './ResourcePicker.css'
import { categories, resources } from "../../data/resources";

export default function ResourcePicker() {

    const renderCategories = (categories) => {
        return categories.map((category, index) => {
            return <li key={index} style={{ padding: "10px", display: "inline-flex", margin: "40px" }}> {category} </li>;
        });
    }

        const renderResources = (resources) => {
            return resources.map((resource) => {
                return <ResourceCard data={resource} />;
            });
     }   

    return (
        <div>
            <div className="ResourcePicker" style={{padding: "20px", fontSize: "36px", margin: "20px", textAlign: "center"}}>
                Explora los mejores recursos de la web y combinalos como quieras. 
            </div>
            <ul>
                {renderCategories(categories)}
            </ul>
            <div className="Search">
                <form>
                    <input className="input is-rounded is-focused is-medium" type="text" placeholder="Busca por curso, unidad o tema" />
                </form>
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {renderResources(resources)}
            </div>
            
        </div>
    );
}