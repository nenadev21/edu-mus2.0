import React from "react";
import UnitHeader from "./UnitHeader";
import SessionCard from "./SessionCard";
import {sessionResources } from "./Data";

export default function SessionsOverview() {
  
  const renderSessions = (sessions) => {
    return sessions.map((session, index) => {
      return index === 0
        ? <SessionCard sessionInfo={session} cardIsOpen={true} key={index}/>
        : <SessionCard sessionInfo={session} cardIsOpen={false} key={index}/>
    })
  }
    return (
      <div className="UnitOverview">
        <UnitHeader />
        {renderSessions(sessionResources)}
        </div>
    );
}