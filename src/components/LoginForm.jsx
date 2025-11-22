import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function LoginForm() {

  const [form, setForm] = useState({ correo: '', contrasena: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "loginCorreo") {
      setForm({ ...form, correo: value });
      setErrors({ ...errors, loginCorreo: "" });
    }

    if (id === "loginPassword") {
      setForm({ ...form, contrasena: value });
      setErrors({ ...errors, loginPassword: "" });
    }
  };

  const validate = () => {
    let newErrors = {};
    let valido = true;

    if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(form.correo)) {
      newErrors.loginCorreo = "Correo inválido.";
      valido = false;
    }

    if (form.contrasena.length < 8) {
      newErrors.loginPassword = "Contraseña mínima 8 caracteres.";
      valido = false;
    }

    setErrors(newErrors);
    return valido;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const resp = await axios.post("http://localhost:8080/auth/login", form);

    
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("rol", resp.data.rol);
      localStorage.setItem("idUsuario", resp.data.idUsuario);

      alert("Inicio de sesión exitoso 🎉");

      navigate('/productos');

    } catch (error) {
      alert("Credenciales incorrectas ❌");
      console.log(error);
      const resp = await axios.post("http://localhost:8080/auth/login", form);
      console.log("RESPUESTA DEL LOGIN:", resp.data);


    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <label htmlFor="loginCorreo">Correo:</label>
      <input
        type="email"
        id="loginCorreo"
        value={form.correo}
        onChange={handleChange}
        required
      />
      <span className="error">{errors.loginCorreo}</span>

      <label htmlFor="loginPassword">Contraseña:</label>
      <input
        type="password"
        id="loginPassword"
        value={form.contrasena}
        onChange={handleChange}
        required
      />
      <span className="error">{errors.loginPassword}</span>

      <br /><br />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
