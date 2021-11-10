
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import PurchasePage from './Pages/Purchase/Purchasepage/PurchasePage';
import Navigation from './Pages/shared/Navigaton/Navigation';
import Notfoundpage from './Pages/Notfoundpage/Notfoundpage';

import Booking from './Pages/Book/Booking';
import DashBoard from './Pages/DashBoard/Dashboard/DashBoard';
import Ratings from './Pages/Ratings/Ratings/Ratings';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './hooks/Context/AuthProvider/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/explore">
          <PurchasePage></PurchasePage>
          </Route>
          <Route path="/purchase/:carId"> 
            <Booking></Booking>
          </Route>
          <Route path="/dashBoard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/rating">
            <Ratings></Ratings>
         </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <Notfoundpage></Notfoundpage>
          </Route>
        </Switch>
        
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
