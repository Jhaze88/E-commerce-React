import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Login from './components/navBar/login';
import Shop from './components/navBar/shop';
import Contact from './components/navBar/contact';
import data from './data.json';
import Registerform from './components/navBar/registerform';

export const TitleContext = createContext(data.products);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TitleContext.Provider value={TitleContext}>
        <NavBar />
      </TitleContext.Provider>

      <Switch>
        <Route exact path='/' component={App}>

        </Route>

        <Route exact path='/login-register' component={Login} >

        </Route>

        <Route exact path='/shop' component={Shop} >

        </Route>

        <Route exact path='/contacts' component={Contact} >

        </Route>

        <Route exact path='/register' component={Registerform} >

        </Route>
      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);


