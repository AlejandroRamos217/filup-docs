const TimelineActivity = ({ title, start, end, color, onClick }) => {
  return (
    <div
      className={`timeline-activity ${color}`}
      onClick={onClick}
      style={{
        left: `${start * 20}%`,
        width: `${(end - start + 1) * 20}%`,
        cursor: "pointer",
      }}
    >
      {title}
    </div>
  );
};

export default TimelineActivity;
