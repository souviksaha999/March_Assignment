// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails';
import Category from './Pages/category';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Product/>} />
        <Route path='/category/:names' element={<Category/>} />
        <Route path='/productdetails/:id' element={<ProductDetails/>} />
      </Routes>
    </Router>
    
    </>
  );
} 

export default App;
