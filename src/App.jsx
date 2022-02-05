import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Work from './pages/Work/work'
import WorkItem from './pages/Work_item/work'
import Contact from './pages/Contact/contact'
import Team from './pages/Team/Team'


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

                <Route path = "/works/:project_slug" exact>
                    <WorkItem />
                </Route>

                <Route path = "/contact" exact>
                    <Contact />
                </Route>

                <Route path = "/team" exact>
                    <Team />
                </Route>
            </Switch>
          <Footer/>
        </Router>
      </>
  );
}

export default App;
