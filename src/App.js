import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Newsletter from "./pages/Newsletter";
import SuccessStories from "./pages/SuccessStories";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Units from "./pages/Units";


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
          <Route path="/successstories">
            <SuccessStories />
          </Route>
        
        <Route path="/team">
            <Team />
        </Route>
        
        <Route path="/newsletter">
            <Newsletter />
      </Route>
      
        <Route path="/contactus">
            <ContactUs />
        </Route>
        </Switch>
        <Route path="/units">
            <Units />
        </Route>
        </div>
    </BrowserRouter>

    
    
  );
}
export default App;
