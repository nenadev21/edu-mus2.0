import React from 'react'
import Activity from '../activities/Activity'

export default function SessionCard({ session }) {
  const { session_name, session_activities } = session

  const renderActivities = (activities) => {
    return activities.map((activity) => {
      return <Activity activity={ activity} />
    })
  }

  return (
    <div className="SessionCard" style={ { margin: "30px" } }>
      <article className="panel is-info">
        <p className="panel-heading">
          {session_name}
        </p>
        { renderActivities(session_activities)}
      </article>
    </div>
  )
}
