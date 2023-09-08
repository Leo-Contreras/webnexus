// FormularioServicio.jsx
import React, { useState } from 'react';

export default function FormularioServicio() {
  const [formData, setFormData] = useState({
    tipoDeSitio: '',
    numeroDePaginas: 0,
    necesitaTienda: false,
  });
  const [estimado, setEstimado] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simula el cálculo del costo aquí.
    // Por supuesto, puedes hacer esto mucho más complejo.
    let costo = 0;
    if (formData.tipoDeSitio === 'personal') {
      costo += 500;
    } else if (formData.tipoDeSitio === 'negocio') {
      costo += 1000;
    }
    costo += formData.numeroDePaginas * 100;

    if (formData.necesitaTienda) {
      costo += 300;
    }

    setEstimado(`El costo estimado es de $${costo}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de sitio web:
          <select name="tipoDeSitio" onChange={handleChange}>
            <option value="">--Selecciona--</option>
            <option value="personal">Personal</option>
            <option value="negocio">Negocio</option>
          </select>
        </label>

        <label>
          Número de páginas:
          <input type="number" name="numeroDePaginas" onChange={handleChange} />
        </label>

        <label>
          ¿Necesita una tienda en línea?
          <input type="checkbox" name="necesitaTienda" onChange={handleChange} />
        </label>

        <button type="submit">Obtener estimado</button>
      </form>

      {estimado && <p>{estimado}</p>}
      <h1>Costo estimado: {estimado}</h1>
    </div>
  );
}
