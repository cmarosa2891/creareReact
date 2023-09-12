import React, { Component } from "react";

class ScheduleCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTurns: [], // Array para almacenar los turnos seleccionados
      availableTurns: [
        { id: 1, time: "9:00 AM - 10:00 AM", available: true },
        { id: 2, time: "10:30 AM - 11:30 AM", available: true },
        { id: 3, time: "12:00 PM - 1:00 PM", available: false }, // Ejemplo de turno no disponible
      ],
    };
  }

  // Función para manejar la selección de turnos
  handleSelectTurn = (turn) => {
    const { selectedTurns } = this.state;

    // Verifica si el turno ya está seleccionado
    if (!selectedTurns.includes(turn)) {
      // Agrega el turno seleccionado al estado
      this.setState({ selectedTurns: [...selectedTurns, turn] });
    }
  };

  // Función para manejar la eliminación de un turno
  handleRemoveTurn = (turnToRemove) => {
    const { selectedTurns } = this.state;

    // Filtra los turnos para mantener solo los que no coinciden con el turno a eliminar
    const updatedSelectedTurns = selectedTurns.filter(
      (turn) => turn !== turnToRemove
    );

    // Actualiza el estado con los turnos restantes
    this.setState({ selectedTurns: updatedSelectedTurns });
  };

  // Función para mostrar los detalles del carrito
  renderCartDetails = () => {
    const { selectedTurns } = this.state;

    if (selectedTurns.length === 0) {
      return <p>El carrito está vacío.</p>;
    }

    return (
      <div>
        <h2>Horarios Seleccionados:</h2>
        <ul>
          {selectedTurns.map((turn) => (
            <li key={turn.id}>
              {turn.time}{" "}
              <button onClick={() => this.handleRemoveTurn(turn)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { availableTurns } = this.state;

    return (
      <div>
        <h1>Horarios Disponibles</h1>
        <ul>
          {availableTurns.map((turn) => (
            <li key={turn.id}>
              {turn.time}{" "}
              {turn.available ? (
                <button onClick={() => this.handleSelectTurn(turn)}>
                  Agregar al Carrito
                </button>
              ) : (
                <span>No Disponible</span>
              )}
            </li>
          ))}
        </ul>

        {/* Mostrar el carrito */}
        {this.renderCartDetails()}
      </div>
    );
  }
}

export default ScheduleCart;
