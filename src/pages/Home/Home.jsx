import React, { useEffect, useContext } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import UnitCard from '../../components/cards/UnitCard';
import HomeHeader from '../../components/headers/HomeHeader';

import { LevelAndUnitContext } from '../../context/LevelAndUnitContext';

export default function Home() {
    const { getAllLevels, getAllUnits, levels, units } = useContext(LevelAndUnitContext);

    useEffect(() => {
      getAllLevels();
      getAllUnits();
      // eslint-disable-next-line
  }, []);

  const renderUnits = (units) => {
    return units.map((unit, index) => {
      return <UnitCard unit={unit} key={index} />;
    });
  };
  //this function maps over the array of levels. The index intends to assign an unique id to each element. This is using an "arrow function"
  const renderLevels = (levels) => {
    return levels.map((level, index) => {
      return (
        <li key={index}>
          {' '}
          <Link to="/"> {level.level_name} </Link>{' '}
        </li>
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
