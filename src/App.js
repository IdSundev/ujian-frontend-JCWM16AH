import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TransactionPage from "./pages/TransactionPage";
import WishlistPage from "./pages/WishlistPage";
import DetailProductPage from "./pages/DetailProdcutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/product/:productId">
            <DetailProductPage />
          </Route>
          <Route path="/carts">
            <CartPage />
          </Route>
          <Route path="/transactions">
            <TransactionPage />
          </Route>
          <Route path="/wishlist">
            <WishlistPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
