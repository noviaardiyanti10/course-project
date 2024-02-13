import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClassesPage from "./pages/ClassesPage";
import TestimonialPage from "./pages/TestimonialPage";
import PrivacyPolice from "./pages/PrivacyPolice";
import FaqPage from "./pages/FaqPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";


function App() {
  return (
  <div>
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/class" Component={ClassesPage}/>
      <Route path="/testimonial" Component={TestimonialPage}/>
      <Route path="/privacy-police" Component={PrivacyPolice}/>
      <Route path="/faq" Component={FaqPage}/>
    </Routes>

    <FooterComponent/>
  </div>
  )
}

export default App
