import React from "react";
import store from "./redux/store/store";
import "./App.css";
import { Provider } from "react-redux";
import ShoppingList from "./screens/ShoppingList";
import Header from "./components/Header/Header";
import Cart from "./screens/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <ShoppingList />
            </Route>
            <Route exact path="/cart">
              <Header />
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
