import { Switch, Route } from "react-router-dom";

import { Home } from './components/Home/Home'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">Lista de Produtos</header>
      
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
