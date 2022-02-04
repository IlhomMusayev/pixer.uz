import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";import Home from './pages/Home/Home'
import Navbar from './components/navbar'
import Work from './pages/Work/work'

function App() {
  return (
      <>
        <Router>
          <Navbar />
            <Switch>
                <Route path = "/" exact>
                    <Home />
                </Route>
                <Route path = "/works" exact>
                    <Work />
                </Route>
            </Switch>
        </Router>
      </>
  );
}

export default App;
