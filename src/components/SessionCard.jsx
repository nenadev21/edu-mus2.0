import React from 'react'
import StartInstruction from './activities/StartInstruction'
import InitialActivity from './activities/InitialActivity'
import MainActivity from './activities/MainActivity'
import ClosureInstruction from './activities/ClosureInstruction'

export default function SessionCard({ sessionInfo, classes }) {
  return (
    <div className="SessionCard" style={ { margin: "30px" } }>
      <article className="panel is-info">
        <p className="panel-heading">
          {sessionInfo.class_name}
        </p>
        <StartInstruction data={sessionInfo} classes={classes}/>
        <InitialActivity data={sessionInfo} classes={classes}/>
        <MainActivity data={sessionInfo } classes={classes}/>
        <ClosureInstruction data={sessionInfo } classes={classes}/>
      </article>
    </div>
  )
}
