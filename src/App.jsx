import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SessionsOverview from "./components/SessionsOverview"
import ResourcePicker from "./pages/ResourcePicker"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ClassContextProvider } from "./context/ClassContext"
import SignUpForm from "./components/forms/SignUpForm"
import SignInForm from "./components/forms/SignInForm"
import Video from "./components/video/Video";

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resource-picker">
          <ResourcePicker />
        </Route>
        <Route path="/sign-up">
          <SignUpForm />
        </Route>
        <Route path="/sign-in">
          <SignInForm />
        </Route>
        <ClassContextProvider>
          <Route path="/sessions-overview/:unit_id"
            render={ ({ match }) => <SessionsOverview unitId={ match.params.unit_id } /> }
          />
        </ClassContextProvider>
      </Switch>
    </BrowserRouter >
  )
}
export default App
