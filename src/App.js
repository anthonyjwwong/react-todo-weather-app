import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Todo from './pages/Todo/Todo';
import Weather from './pages/Weather/Weather';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
// import Draggable, {DraggableCore} from 'react-draggable';


function App() {
  
  return (
     <div className="app">
      <Router>
        <Header />
        <Switch>

          <Route path="/weather">
            <Weather />  
          </Route>

          <Route path="/todo">
            <Todo />  
          </Route>

          <Route path="/">
            <Home />  
          </Route>
        
        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
