import * as React from 'react';
import './DashBoard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
  
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCars from '../AddCars/AddCars';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import Addreview from '../Addreview/Addreview';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';



const drawerWidth = 240;

function DashBoard(props) {

  const { logout } = useAuth();
  const { admin } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ height: "100vh" }} sx={{ mt: 5, py: 5 }}>
     
      <Toolbar />
      <h2 className="header" style={{ letterSpacing: "2px", fontWeight: "700" }}>Control Pannel</h2> 
      <Link to="/home"><button className="btn-warning border-0">Home</button></Link>
      
      <br /> <br />
      <Divider />
      
      <Divider></Divider>

      <br />
      {/* <Link to={`${url}/myOrder`}><button className="btn">My Order</button></Link> <br /> <br /> */}
      { admin ?
        <div>
      <Link to={`${url}/manageCars`}><button className="btn">Manage Cars</button></Link> <br /> <br />
      <Link to={`${url}/manageOrder`}><button className="btn">Manage Order</button></Link> <br /> <br />
        
      <Link to={`${url}/makeAdmin`}><button className="btn">Make Admin</button></Link> <br /> <br />
          <Link to={`${url}/addCars`}><button className="btn">Add Car</button></Link> <br /> <br />
          
        </div>
        :
        <div>
          <Link to={`${url}/myOrder`}><button className="btn">My Order</button></Link> <br /> <br />
          <NavLink to={`${url}/review`}><button className="btn">Review</button></NavLink> <br /> <br />
          <NavLink to={`${url}/payment`}><button className="btn">Payment</button></NavLink> <br /> <br />

        </div>
      }
      <button onClick={logout} className="btn">logout</button> <br /> <br />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          {admin ? <div>Admin DashBorar</div> : <div>User DashBoard</div>}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
        
        <Switch>
        <Route exact path={`${path}/myOrder`}>
          <MyOrder></MyOrder>
        </Route>
        <Route exact path={`${path}/manageCars`}>
          <ManageAllProducts></ManageAllProducts>
        </Route>
        <Route exact path={`${path}/manageOrder`}>
         <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route exact path={`${path}/review`}>
         <Addreview></Addreview>
        </Route>
        <Route path={`${path}/addCars`}>
          <AddCars></AddCars>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
        
        
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;

