import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import API from "./utils/API"
import axios from "axios"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Signup from "./components/Signup"

import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <h1>ConNectFlix</h1>
      <Router>
        {/* <Switch> */}
          <Navbar />
          {/* <Wrapper> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/genres" component={Genres} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
          {/* </Wrapper> */}
          {/* <Footer /> */}
        {/* </Switch>   */}
          </Router>


    </div>
  );
}

export default App;
