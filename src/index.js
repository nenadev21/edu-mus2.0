import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app/App"
import { LevelAndUnitContextProvider } from "./context/LevelAndUnitContext"
import reportWebVitals from "./performance/reportWebVitals"
import "bulma/css/bulma.css"
import "./icons/fontawesome"
// test
ReactDOM.render(
  <React.StrictMode>

    <LevelAndUnitContextProvider>
      <App />
    </LevelAndUnitContextProvider>

  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
