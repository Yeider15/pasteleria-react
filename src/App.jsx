import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RegistroPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NosotrosPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

// ⭐ IMPORTANTE — Importar el panel de admin
import AdminProductosPage from "./pages/AdminProductosPage";

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />

        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/productos" element={<ProductPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detalle_producto/:idProducto" element={<ProductDetailPage />} />
            <Route path="/carrito" element={<CartPage />} />

            {/* ⭐ AGREGADO: ruta para Administrador */}
            <Route path="/admin" element={<AdminProductosPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
