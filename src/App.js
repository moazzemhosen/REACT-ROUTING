
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import Navbar from './components/Navbar'
import Error from "./components/Error";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/nodata" element={<Error />}></Route>
        {/* <Route path="/products/:id" element={<Product/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
