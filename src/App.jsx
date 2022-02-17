import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

import { AuthProvider } from './contexts/AuthContext'

import Home from './pages/Home/Home'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Work from './pages/Work/work'
import WorkItem from './pages/Work_item/work'
import Contact from './pages/Contact/contact'
import Team from './pages/Team/Team'
import NotFound from './pages/NotFound/notfound'
import Login from './pages/Login/login' 
import Admin from './pages/Admin'

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <PublicRoute path="/" component={Home} exact />

                <PublicRoute
                    path="/works"
                    component={Work}
                    exact
                />

                <PublicRoute
                    path="/team"
                    component={Team}
                    exact
                />

                <PublicRoute
                    path="/contacts"
                    component={Contact}
                    exact
                />

                 <PublicRoute
                    path="/works/:project_name"
                    component={WorkItem}
                    exact
                />

                <PublicRoute 
                    path="/login" 
                    component={Login} 
                    exact 
                />


                <PublicRoute 
                    path="/login" 
                    component={Login} 
                    exact 
                />

                <PrivateRoute
                    path="/admin"
                    component={Admin}
                    exact
                />

                <PublicRoute 
                    path="*" 
                    component={NotFound} 
                    exact 
                />



            </Switch>
            <Footer />
        </BrowserRouter>
	</AuthProvider>
  );
}

export default App;
