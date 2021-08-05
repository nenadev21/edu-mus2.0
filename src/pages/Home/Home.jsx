import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import UnitCard from '../../components/cards/UnitCard';
import HomeHeader from '../../components/headers/HomeHeader';

import { LevelAndUnitContext } from '../../context/LevelAndUnitContext';


export default function Home() {
    const { getAllLevels, getAllUnits, levels, units } = useContext(LevelAndUnitContext);
    const [filteredUnits, setFilteredUnits] = useState(units)

    useEffect(() => {
      getAllLevels();
      getAllUnits();
      // eslint-disable-next-line
  }, []);

const filterUnits = (level) => {
    let selectedUnits = units.filter((type) => type.level_id === level);
    // console.log(selectedUnits)
    setFilteredUnits(selectedUnits);
}

const renderUnits = (units) => {
    return filteredUnits.map((unit, index) => {
      return <UnitCard unit={unit} key={index} />
    })
  } 

const handleSelection = (e) => {
  let selectedLevel = parseInt(e.target.value);
  // console.log(selectedLevel)
  filterUnits(selectedLevel)
  //how can I display correct units based on this filter?
} 

  //this function maps over the array of levels. The index intends to assign an unique id to each element. This is using an "arrow function"
  const renderLevels = (levels) => {
    return levels.map((level, index) => {
      return (
        <li value={level.id} key={index} onClick={handleSelection}>{level.level_name}</li>
      );
    });
    };
  return (
    <div className="Level">
      <section className="is-large">
        <div className="container">
          <HomeHeader />
          <div className="columns">
            <div className="column is-2">
              <ul>{renderLevels(levels)}</ul>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {renderUnits(units)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
