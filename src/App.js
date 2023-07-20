import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Products/>
      <SingleProduct/>
        <Routes>
          <Route exact path="/" Component={Products} />
          <Route exact path="/products/:id" Component={SingleProduct} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
