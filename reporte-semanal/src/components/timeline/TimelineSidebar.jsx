const sections = [
  {
    title: "Sesiones",
    items: [
      "Sesión con Jesús para revisión del error en QR",
      "Simulación solicitud crédito Credilider"
    ]
  },
  {
    title: "Importantes",
    items: [
      "Ligado de timbres asimilados",
      "Corrección masiva de salarios"
    ]
  }
];

const TimelineSidebar = () => {
  return (
    <aside className="timeline-sidebar">
      {sections.map(section => (
        <div key={section.title} className="timeline-section">
          <h4>{section.title}</h4>
          <ul>
            {section.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default TimelineSidebar;
