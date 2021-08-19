import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage'
import Sidebar from './components/MainPage/Sidebar'
import Bookmark from './components/Bookmark'
import Pantry from './components/Pantry'
import RecipeDetails from './components/MainPage/RecipeDetails'


function App() {
  return (
    <div className="App">

      <Router>
      <Sidebar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/bookmark" exact component={Bookmark} />
          <Route path="/recipe/:id" exact component={RecipeDetails} />
          <Route path="/pantry" exact component={Pantry} />
          <Route path="/shopping" exact component={Bookmark} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
