import React from "react";
import "./App.css";

import ProductList from "./components/ProductList";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <ProductList />
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
