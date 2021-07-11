import React, { useState } from 'react'
import { API_BASE_URL } from "../config/config"
import { callApi } from '../helpers/callApi'

const ClassContext = React.createContext()

const ClassContextProvider = (props) => {

    const [classes, setClasses] = useState([])
    const [classError, setClassError] = useState('')

    const getAllClasses = (unitId) => {
        callApi(`${API_BASE_URL}/api/class/${unitId}`,
            setClasses,
            setClassError)
    }

    return (
        <ClassContext.Provider
            value={ {
                classes,
                getAllClasses,
                classError
            } }
        >
            {props.children }
        </ClassContext.Provider>
    )
}

export { ClassContextProvider, ClassContext }

