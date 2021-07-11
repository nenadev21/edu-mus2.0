import React from 'react'
import StartInstruction from '../activities/StartInstruction'
import InitialActivity from '../activities/InitialActivity'
import MainActivity from '../activities/MainActivity'
import ClosureInstruction from '../activities/ClosureInstruction'

export default function SessionCard({ session }) {
  return (
    <div className="SessionCard" style={ { margin: "30px" } }>
      <article className="panel is-info">
        <p className="panel-heading">
          {session.session_name}
        </p>
        <StartInstruction data={session} />
        <InitialActivity data={session} />
        <MainActivity data={session} />
        <ClosureInstruction data={session} />
      </article>
    </div>
  )
}
