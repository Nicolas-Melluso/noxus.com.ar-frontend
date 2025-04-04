import "../Css/Noxu$.css";
import { useRef } from 'react';

const Noxu$ = () => {
  const calendarImageRef = useRef(null);
  const dateInputRef = useRef(null);

  const mostrarCalendario = () => {
    calendarImageRef.current.style.display = 'none';
    dateInputRef.current.style.display = 'inline-block';
    dateInputRef.current.focus();
  };

  const verificarFecha = () => {
    if (dateInputRef.current.value === '') {
      dateInputRef.current.style.display = 'none';
      calendarImageRef.current.style.display = 'inline-block';
    }
  };

  return (
    <div className="financial-container">
      <header>
        {/* Usamos ref y onClick sin paréntesis */}
        <img
          ref={calendarImageRef}
          src="/static/textures/calendar.png" // Corregir ruta (sin /public)
          alt="Calendario"
          onClick={mostrarCalendario} // Sin paréntesis
          style={{ cursor: 'pointer' }}
        />
        
        {/* Input oculto inicialmente */}
        <input
          ref={dateInputRef}
          type="date"
          style={{ display: 'none' }} // Usar style de React
          onBlur={verificarFecha} // Sin paréntesis
        />
        
        {/* Resto de componentes */}
        <input type="number" className="input-amount" placeholder="$ Amount"/>
        <select name="select" className="select-css">
          <option value="value1">Sueldo</option>
          <option value="value2" selected>Gas</option>
          <option value="value3">Alquiler Departamento</option>
        </select>
        <input type="text" className="" />
        <button>Enviar</button>
      </header>
      <div className="register">

      </div>
      <div className="bar-graphics">
        
      </div>
    </div>
  );
};

export default Noxu$;