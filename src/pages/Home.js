import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import UnitCard from "../components/UnitCard";
import HomeHeader from "./HomeHeader";
import Search from "../components/Search";

export default function Level() {
     const levels = ["1ro Basico", "2do Basico", "3ro Basico", "4to Basico"]
    
    return (
        <div className="Level">
            <section className="is-large">
                <div className="container">
                    <HomeHeader />
                    <div className="columns">
                        
                    <div className="column is-2">
                        <ul>
                                <li>
                                    <Link>
                                        {levels[0]}
                                    </Link>
                                    </li>
                                    <li>
                                    <Link>
                                        {levels[1]}
                                    </Link>
                                    </li>
                                    <li>
                                    <Link>
                                        {levels[2]}
                                    </Link>
                                    </li>
                                    <li>
                                    <Link>
                                        {levels[3]}
                                    </Link>
                                </li>
                        </ul>
                        </div>
                        <div className="column is-3">
                            <UnitCard />
                        </div>
                        <div className="column is-3">
                            <UnitCard />
                        
                        </div>
                        <div className="column is-3">
                            <UnitCard />
                        
                        </div>
                        </div>
                    </div>
        </section>
        <section className="is-large">
            <div className="container">
                    <div className="columns">
                        
                    <div className="column is-2">
                        
                    </div>
                        <div className="column is-3">
                           <UnitCard />
                        </div>
                    
                    </div>
                    </div>
            </section>
            <Search />
        </div>        
    );
}