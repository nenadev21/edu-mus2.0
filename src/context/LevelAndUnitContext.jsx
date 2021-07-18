import React, { useState } from 'react'
import { API_BASE_URL } from "../config/config.js"
import { callApi } from '../helpers/callApi'

const LevelAndUnitContext = React.createContext()

const LevelAndUnitContextProvider = (props) => {
  // declare state variables
  const [levels, setLevels] = useState([])
  const [levelsError, setLevelsError] = useState('')
  const [units, setUnits] = useState([])
  const [unitsError, setUnitsError] = useState('')

  const getAllLevels = () => {
    callApi(`${API_BASE_URL}/levels`,
      setLevels,
      setLevelsError)
  }

  const getAllUnits = () => {
    callApi(`${API_BASE_URL}/units`,
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

