import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Guides from "./pages/Guides";
import Campus from "./pages/Campus";
import Community from "./pages/Community";
import ResidencePermit from "./pages/guides/ResidencePermit";
import SimCards from "./pages/guides/SimCards";
import Transportation from "./pages/guides/Transportation";
import Accommodation from "./pages/guides/Accommodation";
import Banking from "./pages/guides/Banking";
import FoodGrocery from "./pages/guides/FoodGrocery";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-sand-25 dark:bg-sand-950">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/community" element={<Community />} />

          <Route
            path="/guides/residence-permit"
            element={<ResidencePermit />}
          />
          <Route path="/guides/sim-cards" element={<SimCards />} />
          <Route path="/guides/transportation" element={<Transportation />} />
          <Route path="/guides/accommodation" element={<Accommodation />} />
          <Route path="/guides/banking" element={<Banking />} />
          <Route path="/guides/food-grocery" element={<FoodGrocery />} />

          {/* Catches any URL that doesn't match a route above */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
