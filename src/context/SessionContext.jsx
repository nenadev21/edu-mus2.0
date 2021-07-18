import React, { useState } from 'react'
import { API_BASE_URL} from "../config/config.js"
import { callApi } from '../helpers/callApi'

const SessionContext = React.createContext()

const SessionContextProvider = (props) => {

    const [sessions, setSessions] = useState([])
    const [sessionError, setSessionError] = useState('')

    const getAllSessions = (unitId) => {
        callApi(`${API_BASE_URL}/units/${unitId}/sessions`,
            setSessions,
            setSessionError)
    }

    return (
        <SessionContext.Provider
            value={{
                sessions,
                getAllSessions,
                sessionError
            }}
        >
            {props.children }
        </SessionContext.Provider>
    )
}

export { SessionContextProvider, SessionContext }

