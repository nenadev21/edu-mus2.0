
import './App.css';
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import Level from "./components/Level";


function App() {
    return (
    <div className="App">
        <div className="container">
          
          <Navbar />
          <div>
            <a href="./components/Units" alt="link">link</a>  
            
          </div>
          
        <Level />
        </div>
    </div>
  );

  }

export default App;
