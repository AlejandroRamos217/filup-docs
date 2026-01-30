const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const TimelineGrid = () => {
  return (
    <div className="timeline-grid">
      <div className="timeline-days">
        {days.map(day => (
          <div key={day} className="day">{day}</div>
        ))}
      </div>

      <div className="timeline-canvas">
        {/* Aquí van las barras después */}
      </div>
    </div>
  );
};

export default TimelineGrid;
