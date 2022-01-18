import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserComponent from './components/UserComponent';
import AddUser from './components/addUser';

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
            <Route exact path = "/" component = {UserComponent} />
            <Route path = "/users" component = {UserComponent} />
            <Route path = "/add-users" component = {AddUser} />
            <Route path = "/edit-users" component = {AddUser} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}