import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import NotFound from './component/NotFound';
import Header from './component/Header';
import User from './component/User';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
