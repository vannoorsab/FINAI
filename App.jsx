import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import LoanAnalysis from './pages/LoanAnalysis';
import NanoEntrepreneur from "./pages/NanoEntrepreneur";
import { Footer } from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes without Navbar and Footer */}
          <Route
            path="/login"
            element={
              <div id="root">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div id="root">
                <Register />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div id="root">
                <Dashboard />
              </div>
            }
          />

          <Route path="/LoanAnalysis" element={<div id="root">
              <LoanAnalysis />
            </div>} />

          <Route
            path="/NanoEntrepreneur"
            element={<div id="root"><NanoEntrepreneur /></div>}
          />

          {/* Routes with Navbar and Footer */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/howitworks" element={<HowItWorks />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
