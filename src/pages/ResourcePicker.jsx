import React from "react";
import Search from "../components/Search";
import ResourceCard from "../components/ResourceCard";
import { categories, resources } from "../components/Data";

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
            <Search />
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {renderResources(resources)}
            </div>
            
        </div>
    );
}