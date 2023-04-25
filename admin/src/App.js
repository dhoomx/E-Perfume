import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {currentUser ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/">
          {currentUser ? (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Home />
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        {currentUser?.isAdmin && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/users">
                <UserList />
              </Route>
              <Route exact path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
