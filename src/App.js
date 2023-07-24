import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import SingleProoductDetails from "./components/SingleProoductDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" Component={Products} />
          <Route exact path="/products/:productId" Component={SingleProoductDetails} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
