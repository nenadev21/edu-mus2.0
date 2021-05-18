import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SessionsOverview from "./components/SessionsOverview";
import ResourcePicker from "./pages/ResourcePicker";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    
      <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resource-picker">
            <ResourcePicker />
          </Route>
        <Route path="/sessions-overview">
            <SessionsOverview />
          </Route>
          </Switch>
      </div>
    </BrowserRouter>

  );
}
export default App;
