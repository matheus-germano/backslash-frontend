// importing dependencies
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importing pages
import { Home } from './pages/Home';

// importing global style
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
