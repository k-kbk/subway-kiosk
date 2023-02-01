import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Index';
import Cart from './components/cart/Index';
import Menu from './components/menu/Index';
import Bread from './components/bread/Index';
import Cheese from './components/cheese/Index';
import Vegetable from './components/vegetable/Index';
import Sauce from './components/sauce/Index';
import Topping from './components/topping/Index';
import Combo from './components/combo/Index';
import Payment from './components/payment/Index';
import Result from './components/result/Index';

export default function App() {
  return (
    //<Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/cheese" element={<Cheese />} />
        <Route path="/vegetable" element={<Vegetable />} />
        <Route path="/sauce" element={<Sauce />} />
        <Route path="/topping" element={<Topping />} />
        <Route path="/combo" element={<Combo />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    //</Layout>
  );
}
