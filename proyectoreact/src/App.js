import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {NavbarComponent} from './components/Navbar';
import {ItemListContainer} from './Container/ItemListContainer';
import {ItemDetailContainer} from './Container/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    
    <NavbarComponent />

      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/detalle" component={ItemDetailContainer} />
      </Switch>

  </BrowserRouter>
  );
}

export default App;
