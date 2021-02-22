import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API"
import axios from "axios"
import Login from "./components/Login"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
     <h1>ConnectFlix</h1>
     <Router>
      <div>
        <Navbar />
        {/* <Wrapper> */}
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/genres" component={Genres} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>


    </div>
  );
}

export default App;
