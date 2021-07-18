import React, { useState } from 'react'
import { REACT_APP_API_ENDPOINT } from "../config/config.js"
import { callApi } from '../helpers/callApi'

const LevelAndUnitContext = React.createContext()

const LevelAndUnitContextProvider = (props) => {
  // declare state variables
  const [levels, setLevels] = useState([])
  const [levelsError, setLevelsError] = useState('')
  const [units, setUnits] = useState([])
  const [unitsError, setUnitsError] = useState('')

  const getAllLevels = () => {
    callApi(`${REACT_APP_API_ENDPOINT}/levels`,
      setLevels,
      setLevelsError)
  }

  const getAllUnits = () => {
    callApi(`${REACT_APP_API_ENDPOINT}/units`,
      setUnits,
      setUnitsError)
  }

  return (
    <LevelAndUnitContext.Provider
      value={ {
        levels,
        units,
        getAllLevels,
        getAllUnits,
        levelsError,
        unitsError,
      } }
    >
      {props.children }
    </LevelAndUnitContext.Provider>
  )
}
export { LevelAndUnitContextProvider, LevelAndUnitContext }

