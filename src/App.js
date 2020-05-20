import React from "react";
import store from "./redux/store/store";
import "./App.css";
import { Provider } from "react-redux";
import ShoppingList from "./screens/ShoppingList";
import Header from "./components/Header/Header";
import Cart from "./screens/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FeatureToggleComponent from "./components/FeatureToggleComponent/FeatureToggleComponent";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <ShoppingList />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <FeatureToggleComponent featureName="ShoppingCartFooter">
            <Footer/>
          </FeatureToggleComponent>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

