import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/home'
import { SignInPage } from './pages/signIn'
import { RegisterPage } from './pages/register'
import { DetailPage } from './pages/detail'
// import { ProjectListPage } from 'pages/project-list'
import './App.css';
// import 'antd/dist/antd.css'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/signIn' component={SignInPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/detail/:touristRouterId' component={DetailPage} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
