import './App.css';
import { Route, useLocation } from "react-router-dom";
import { Home, Landing , Form , Details } from './views';
import NavBar from './Component/NavBar/NavBar';



function App() {
  const location =useLocation();

  return (
    <div className="App">
      <h1>Henry Countries</h1>
      {location.pathname !== "/" && <NavBar />  }
      <Route exact path='/' render={()=> <Landing /> }  />
      <Route exact path='/home' render={()=> <Home /> } />
      <Route exact path='/create' render={()=> <Form/> } />
      <Route exact path='/details' render={()=> <Details /> } />
    </div>
  );
}

export default App;
