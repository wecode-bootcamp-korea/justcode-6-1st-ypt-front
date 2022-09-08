import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Account from './Account/Account';
import Contact from './Contact/Contact';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Detail from './Detail/Detail';
import Shop from './Shop/Shop';
import Location from './Location/Location';
import CartDetail from './CartDetail/CartDetail';
import Chatting from '../components/Chatting/Chatting';
import About from './About/About';

function Router() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `ROECY' Chocolate`;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/detail/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/location" element={<Location />} />
        <Route path="/cart" element={<CartDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Chatting />
    </BrowserRouter>
  );
}

export default Router;
