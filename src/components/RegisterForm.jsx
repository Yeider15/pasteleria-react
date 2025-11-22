import React, { useState, useEffect } from 'react';


const comunasPorRegion = {
  Metropolitana: ["Santiago", "Puente Alto", "Ñuñoa"],
  Biobio: ["Concepción", "Talcahuano", "Chiguayante"],
  Araucania: ["Temuco", "Villarrica", "Padre Las Casas"],
  'Ñuble': ["Chillán", "San Carlos", "Bulnes"]
};

function RegistroForm() {
  
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmPassword: '',
    telefono: '',
    direccion: '',
    region: '',
    comuna: ''
  });

  
  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [id]: value
    }));
   
    setErrors(prevErrors => ({
        ...prevErrors,
        [id]: ''
    }));
  };

  useEffect(() => {
   
    setForm(prevForm => ({
      ...prevForm,
      comuna: ''
    }));
  }, [form.region]);

  
  const validate = () => {
    let newErrors = {};
    let valido = true;

   
    if (form.nombre === "" || !/^[a-zA-Z\s]+$/.test(form.nombre)) {
      newErrors.nombre = "Ingrese un nombre válido (solo letras y espacios).";
      valido = false;
    }

   
    if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(form.correo)) {
      newErrors.correo = "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
      valido = false;
    }

    
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
    if (!regexPass.test(form.password)) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres, incluir mayúscula, minúscula, número y un símbolo (@#$%).";
      valido = false;
    }

   
    if (form.password !== form.confirmPassword || form.confirmPassword === "") {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
      valido = false;
    }

    
    if (form.telefono !== "" && !/^\d{9}$/.test(form.telefono)) {
      newErrors.telefono = "Ingrese un teléfono válido de 9 dígitos.";
      valido = false;
    }

   
    if (form.direccion === "") {
      newErrors.direccion = "La dirección es obligatoria.";
      valido = false;
    }

  
    if (form.region === "") {
      newErrors.region = "Debe seleccionar una región.";
      valido = false;
    }

   
    if (form.comuna === "") {
      newErrors.comuna = "Debe seleccionar una comuna.";
      valido = false;
    }

    setErrors(newErrors);
    return valido;
  };

 
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (validate()) {

    const dataBackend = {
      nombre: form.nombre,
      correo: form.correo,
      contrasena: form.password,
      telefono: form.telefono,
      direccion: form.direccion,
      region: form.region,
      comuna: form.comuna
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataBackend)
      });

      if (!response.ok) {
        alert("Error al registrar. El correo ya existe o los datos son inválidos.");
        return;
      }

      const data = await response.json();

      
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.rol);

      alert("Registro exitoso ✅");

     
      setForm({
        nombre: '',
        correo: '',
        password: '',
        confirmPassword: '',
        telefono: '',
        direccion: '',
        region: '',
        comuna: ''
      });
      setErrors({});

    } catch (error) {
      console.log(error);
      alert("Error de conexión con el servidor.");
    }
  }
};


  return (
    <form id="registro" onSubmit={handleSubmit}>
      
      <label htmlFor="nombre">Nombre Completo:</label>
      <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} maxLength="50" required />
      <span className="error" id="errorNombre">{errors.nombre}</span>

      <label htmlFor="correo">Correo Electrónico:</label>
      <input type="email" id="correo" name="correo" value={form.correo} onChange={handleChange} required />
      <span className="error" id="errorCorreo">{errors.correo}</span>

      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
      <span className="error" id="errorPassword">{errors.password}</span>

      <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
      <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
      <span className="error" id="errorConfirmPassword">{errors.confirmPassword}</span>

      <label htmlFor="telefono">Teléfono (opcional):</label>
      <input type="tel" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} pattern="[0-9]{9}" />
      <span className="error" id="errorTelefono">{errors.telefono}</span>

      <label htmlFor="direccion">Dirección:</label>
      <input type="text" id="direccion" name="direccion" value={form.direccion} onChange={handleChange} required />
      <span className="error" id="errorDireccion">{errors.direccion}</span>
      
   
      <div id="regionContainer">
        <div className="region">
          <label htmlFor="region">Región:</label>
          <select id="region" value={form.region} onChange={handleChange} required>
            <option value="" disabled>Seleccione</option>
            {Object.keys(comunasPorRegion).map(regionKey => (
              <option key={regionKey} value={regionKey}>{regionKey}</option>
            ))}
          </select>
          <span className="error" id="errorRegion">{errors.region}</span>
        </div>
      </div>

      
      <div id="comunaContainer">
        <div className="comuna">
          <label htmlFor="comuna">Comuna:</label>
          <select id="comuna" value={form.comuna} onChange={handleChange} required disabled={!form.region}>
            <option value="" disabled>Seleccione</option>
            {form.region && comunasPorRegion[form.region]?.map(comunaName => (
              <option key={comunaName} value={comunaName}>{comunaName}</option>
            ))}
          </select>
          <span className="error" id="errorComuna">{errors.comuna}</span>
        </div>
      </div>

  
      <br/><br/>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegistroForm;