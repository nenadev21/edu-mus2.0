import React, { useContext, useEffect } from "react"
import UnitHeader from "./UnitHeader"
import SessionCard from "./SessionCard"
import MainActivity from "./activities/MainActivity"
import { ClassContext } from '../context/ClassContext'

export default function SessionsOverview (props) {
  const { getAllClasses, classes } = useContext(ClassContext)

  useEffect(() => {
    getAllClasses(props.unitId)
    // eslint-disable-next-line
  }, [])

  const renderSessions = (sessions) => {
    return sessions.map((session, index) => {
      return <SessionCard sessionInfo={ session } classes={classes} />
    })
  }

  return (
    <div className="UnitOverview">
      <UnitHeader />
      {renderSessions(classes)}
    </div>
  )
}
