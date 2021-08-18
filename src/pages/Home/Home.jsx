import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import UnitCard from '../../components/cards/UnitCard';
import HomeHeader from '../../components/headers/HomeHeader';

import { LevelAndUnitContext } from '../../context/LevelAndUnitContext';


export default function Home() {
    const { getAllLevels, getAllUnits, levels, units } = useContext(LevelAndUnitContext);
    const [currentLevel, setCurrentLevel] = useState(1)

    useEffect(() => {
      getAllLevels();
      getAllUnits();
      // eslint-disable-next-line
  }, []);

const renderUnits = (units) => {
  let filteredUnits = units.filter((unit) => unit.level_id === currentLevel);
    return filteredUnits.map((unit, index) => {
      return <UnitCard unit={unit} key={index} />
    })
  } 

  const renderLevels = (levels) => {
    return levels.map((level, index) => {
      return (
        <li key={index} onClick={() => setCurrentLevel(level.id)} >{level.level_name}</li>
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
