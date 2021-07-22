// importing dependencies
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importing pages
import { Home } from './pages/Home';
import { Feed } from './pages/Feed';

// importing global style
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/feed' component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
