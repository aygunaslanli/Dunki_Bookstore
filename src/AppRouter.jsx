import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx"
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function AppRouter() {
  return (
   <BrowserRouter>
   <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default AppRouter;
