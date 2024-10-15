import React, { useState } from 'react';
import './styles/ListarEstudiantes.css';

const ListarEstudiantes = ({ onBack }) => {
  // Simulación de una lista de estudiantes
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: "Juan Pérez", edad: 20, email: "juan.perez@example.com", telefono: "1234567890" },
    { id: 2, nombre: "Ana Gómez", edad: 22, email: "ana.gomez@example.com", telefono: "0987654321" },
  ]);

  const eliminarEstudiante = (id) => {
    const nuevosEstudiantes = estudiantes.filter(estudiante => estudiante.id !== id);
    setEstudiantes(nuevosEstudiantes);
  };

  const modificarEstudiante = (id) => {
    console.log(`Modificar estudiante con ID: ${id}`);
  };

  return (
    <div className="list-container">
      <h2>Lista de Estudiantes</h2>

      {estudiantes.length === 0 ? (
        <p>No hay estudiantes registrados.</p>
      ) : (
        <table className="estudiantes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Acciones</th> {/* Nueva columna para acciones */}
            </tr>
          </thead>
          <tbody>
            {estudiantes.map(estudiante => (
              <tr key={estudiante.id}>
                <td>{estudiante.id}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.edad}</td>
                <td>{estudiante.email}</td>
                <td>{estudiante.telefono}</td>
                <td>
                  <button onClick={() => modificarEstudiante(estudiante.id)} className="edit-button">Modificar</button>
                  <button onClick={() => eliminarEstudiante(estudiante.id)} className="delete-button">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Botón de volver a Inicio */}
      <button className="back-home-button" onClick={onBack}>Volver a Inicio</button>
    </div>
  );
};

export default ListarEstudiantes;
