//feature 1
import React from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <div className="drid-container">
            <header>
            <ul>
              <strong>
                <NavLink to="/">Decathlon Shopping Cart</NavLink>
                <NavLink className="about-router" to="/about">About</NavLink>
                </strong>
            </ul>
            </header>
            <main>
            <div className="content">
                <Route path="/about" component={About}/>
            </div>
              <div className="content">
                <div className="main">
                  <Filter></Filter>
                  <Products></Products>
                </div>
                <div className="sidebar">
                  <Cart></Cart>
                </div>
              </div>
            </main>
            <footer>
              All right is reserved.
            </footer>
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
