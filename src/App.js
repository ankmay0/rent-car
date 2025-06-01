import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import About from "./Pages/About";
import ProductDialog from "./UI/ProductDialog";
import CategoryShop from "./Pages/CategoryShop";
import ProfilePage from "./Pages/ProfilePage";
import TopOfferBar from "./components/TopOffer";

function App() {
  return (
    <>
    <TopOfferBar />
    <Navbar />
    
    <main className="pt-24 lg:pt-19">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDialog />} />
          <Route path="/category-shop" element={<CategoryShop />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Routes>
        
      </Router>
    </main>

      <Footer />
    </>

  );
}

export default App;
