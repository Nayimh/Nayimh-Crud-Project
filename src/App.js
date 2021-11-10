
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import PurchasePage from './Pages/Purchase/Purchasepage/PurchasePage';
import Navigation from './Pages/shared/Navigaton/Navigation';
import Notfoundpage from './Pages/Notfoundpage/Notfoundpage';
import Footter from './Pages/Footer/Footter';
import Booking from './Pages/Book/Booking';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/explore">
          <PurchasePage></PurchasePage>
          </Route>
          <Route path="/purchase">
            <Booking></Booking>
          </Route>
          
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <Notfoundpage></Notfoundpage>
          </Route>
        </Switch>
        <Footter></Footter>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
