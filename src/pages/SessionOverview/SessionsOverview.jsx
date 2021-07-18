import React, { useContext, useEffect } from "react"
import UnitHeader from "../../components/headers/UnitHeader"
import SessionCard from "../../components/cards/SessionCard"
import { sessions } from '../../data/sessions'
import MainActivity from "../../components/activities/MainActivity"
import { SessionContext } from '../../context/SessionContext'

export default function SessionsOverview (props) {
  // const { getAllSessions, sessions } = useContext(SessionContext)

  // useEffect(() => {
  //   getAllSessions(props.unitId)
  //   // eslint-disable-next-line
  // }, [])

  const renderSessions = (sessions) => {
    console.log(sessions)
    return sessions.map((session, index) => {
      return <SessionCard session={ session }/>
    })
  }
 
  return (
    <div className="UnitOverview">
      <UnitHeader />
      {renderSessions(sessions)}
    </div>
  )
}
