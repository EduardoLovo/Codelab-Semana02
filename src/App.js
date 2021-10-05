import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home/Home'
import './App.css';
import CreateProduct from "./pages/CreateProduct/CreateProduct";


function App() {
  return (
    <div className="App">
      <header className="App-header">Lista de Produtos</header>
      
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/product/create"  component={CreateProduct}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
