
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Notfoundpage from './Pages/Notfoundpage/Notfoundpage';

import Booking from './Pages/Book/Booking';
import DashBoard from './Pages/DashBoard/Dashboard/DashBoard';
import Ratings from './Pages/Ratings/Ratings/Ratings';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './hooks/Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ExploreCars from './Pages/ExploreCars/ExploreCars';
import Navigation from './Pages/shared/Navigaton/Navigation';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
       
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/explore">
          <ExploreCars></ExploreCars>
          </Route>
            <PrivateRoute path="/purchase/:carId">
              <Navigation></Navigation>
              <Booking></Booking>
             
          </PrivateRoute>
          <PrivateRoute path="/dashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          
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
