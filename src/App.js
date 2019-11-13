import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavBar from './components/NavBar';


function App() {


  return (
    
    
    <div className="App">

    <NavBar />
    <Switch>

      <Route exact path={'/'} render={renderProps => <HomeContainer renderProps={renderProps}/>} />
      <Route exact path ={"/signup"} render={renderProps => <HomeContainer renderProps={renderProps}/>}/>
      
    </Switch>
    </div>
  );
}

export default App;
