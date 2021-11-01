import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Header from './Components/Pages/Shared/Navbar/Header';
import Services from './Components/Pages/Home/Services/Services';
import Login from './Components/Pages/Home/Login/Login/Login';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';
import AuthProvider from './Components/Context/AuthProvider';
import AdminDashboard from './Components/Pages/Home/Admin/Admin/AdminDashboard';
import MyOrders from './Components/Pages/Home/Admin/MyOrders/MyOrders';
import PlaceOrder from './Components/Pages/Home/PlaceOrder/PlaceOrder';
import ManageOrders from './Components/Pages/Home/Admin/ManageOrders/ManageOrders';
import AddService from './Components/Pages/Home/Admin/AddService/AddService';
import Contact from './Components/Pages/Home/Contact/Contact';
import AboutUs from './Components/Pages/Home/AboutUs/AboutUs';
import PrivateRoute from './Components/Pages/Home/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admindashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            {/* <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute> */}
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/contactus">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;



//  <Home></Home>
//   <Footer></Footer>