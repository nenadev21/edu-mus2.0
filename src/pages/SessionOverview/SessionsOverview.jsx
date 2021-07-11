import React, { useContext, useEffect } from "react"
import UnitHeader from "../../components/headers/UnitHeader"
import SessionCard from "../../components/cards/SessionCard"
import { sessions } from '../../data/sessions'
import MainActivity from "../../components/activities/MainActivity"
import { ClassContext } from '../../context/ClassContext'

export default function SessionsOverview (props) {
  // const { getAllClasses, classes } = useContext(ClassContext)

  // useEffect(() => {
  //   getAllClasses(props.unitId)
  //   // eslint-disable-next-line
  // }, [])

  const renderSessions = (sessions) => {
    return sessions.map((session, index) => {
      return <SessionCard session={ session }/>
    })
  }
   console.log(sessions)
  return (
    <div className="UnitOverview">
      <UnitHeader />
      {renderSessions(sessions)}
    </div>
  )
}
