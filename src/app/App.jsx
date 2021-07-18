import Navbar from "../components/nav/Navbar"
import Home from "../pages/Home/Home"
import SessionsOverview from "../pages/SessionOverview/SessionsOverview"
import ResourcePicker from "../pages/ResourcePicker/ResourcePicker"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { SessionContextProvider } from "../context/SessionContext"
import SignUpForm from "../components/forms/SignUp/SignUpForm"
import SignInForm from "../components/forms/LoginIn/SignInForm"
import Video from "../components/video/Video";

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
        <SessionContextProvider>
          <Route path="/sessions-overview/:id"
            render={ ({ match }) => <SessionsOverview unitId={ match.params.id } /> }
          />
        </SessionContextProvider>
      </Switch>
    </BrowserRouter >
  )
}
export default App
