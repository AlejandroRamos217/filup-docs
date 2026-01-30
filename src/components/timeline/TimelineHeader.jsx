import React from "react";

const getWeekRange = () => {
  const today = new Date();

  const day = today.getDay(); // 0=domingo, 1=lunes...
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);

  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);

  const formatDate = (date) =>
    date.toLocaleDateString("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return `Semana del ${formatDate(monday)} al ${formatDate(friday)}`;
};

const TimelineHeader = ({ onAddClick, onExportClick, onClearClick }) => {
  return (
    <div className="timeline-page-header">
      <div>
        <h2>Reporte Semanal de Actividades</h2>
        <span>{getWeekRange()}</span>
      </div>

      <div className="no-export">
        <button className="add-btn" onClick={onAddClick}>
          Agregar datos
        </button>
        <button className="export-btn" onClick={onExportClick}>
          Exportar PDF
        </button>
        {onClearClick && (
          <button
            className="clear-btn"
            onClick={onClearClick}
            style={{ marginLeft: 12 }}
          >
            Limpiar reporte
          </button>
        )}
      </div>
    </div>
  );
};

export default TimelineHeader;
