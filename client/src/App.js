import './App.css';
import { Route, useLocation } from "react-router-dom";
import { Home, Landing , Form ,Detailsc, Activity } from './views';
import NavBar from './Component/NavBar/NavBar';


function App() {

  const location =useLocation();
  
  console.log(location.pathname);
  return (
    <div className="App">
      <h1>Countries</h1>
      {location.pathname !== "/" && <NavBar />  }
      <Route exact path='/' render={()=> <Landing /> }  />
      <Route exact path='/home' render={()=> <Home /> } />
      <Route exact path='/activities' render={()=> <Form/> } />
      <Route exact path='/detailsc/:id' render={()=> <Detailsc /> } />
      <Route path= '/allactivity' render={()=> <Activity /> } />
    </div>
  );
}

export default App;
