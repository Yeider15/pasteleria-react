import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [rol, setRol] = useState(localStorage.getItem("rol"));

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(localStorage.getItem("token"));
      setRol(localStorage.getItem("rol"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const isCurrent = (path) => location.pathname === path;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    localStorage.removeItem("idUsuario");

    setToken(null);
    setRol(null);

    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Registrarse", path: "/registro" },
    { name: "Iniciar Sesión", path: "/login" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contact" },
  ];

  const isAdmin = rol && rol.toLowerCase().includes("admin");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🧁🧁Pastelería Mil Sabores
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link) => {
              if (
                token &&
                (link.path === "/login" || link.path === "/registro")
              ) {
                return null;
              }

              if (isCurrent(link.path)) return null;

              return (
                <li className="nav-item" key={link.name}>
                  <Link className="nav-link" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {token && isAdmin && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  ⚙️ Admin
                </Link>
              </li>
            )}

            {!isCurrent("/admin") && (
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  🛒
                </Link>
              </li>
            )}

            {token && (
              <li className="nav-item">
                <button className="btn btn-danger btn-sm ms-2" onClick={logout}>
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
