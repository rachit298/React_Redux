import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import SingleItem from "./Components/SingleItem/SingleItem";

import { connect } from "react-redux";

function App({ currentItem }) {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route
              exact
              path="/product/:id"
              element={!currentItem ? <Navigate to="/" /> : <SingleItem />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
