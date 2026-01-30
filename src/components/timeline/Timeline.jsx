import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "./Timeline.css";
import TimelineActivity from "./TimelineActivity";
import Modal from "../common/Modal";
import TimelineForm from "./TimelineForm";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const STORAGE_KEY = "weekly_timeline";

const Timeline = forwardRef(({
  isModalOpen,
  editingActivity,
  onEditActivity,
  onCloseModal,
}, ref) => {

  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Sesiones", activities: [] },
          { id: 2, title: "Importantes", activities: [] },
        ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
  }, [sections]);


  const addActivity = (activity) => {
    setSections((prevSections) => {
      const existingSection = prevSections.find(
        (section) =>
          section.title.toLowerCase() === activity.category.toLowerCase()
      );

      const newActivity = { ...activity, id: Date.now() };

      if (existingSection) {
        return prevSections.map((section) =>
          section.id === existingSection.id
            ? {
                ...section,
                activities: [...section.activities, newActivity],
              }
            : section
        );
      }

      return [
        ...prevSections,
        {
          id: Date.now(),
          title: activity.category,
          activities: [newActivity],
        },
      ];
    });
  };

  const updateActivity = (updated) => {
    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        activities: section.activities.map((activity) =>
          activity.id === updated.id ? updated : activity
        ),
      }))
    );
  };

  const clearTimeline = () => {
    const confirm = window.confirm(
      "¿Seguro que quieres limpiar el reporte? Esta acción no se puede deshacer."
    );

    if (!confirm) return;

    setSections([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  useImperativeHandle(ref, () => ({
    clearTimeline,
  }));



  return (
    <>
      {isModalOpen && (
        <Modal onClose={onCloseModal}>
          <TimelineForm
            sections={sections}
            editingActivity={editingActivity}
            onAddActivity={(data) => {
              if (editingActivity) {
                updateActivity(data);
              } else {
                addActivity(data);
              }
              onCloseModal();
            }}
          />
        </Modal>
      )}

      <div className="timeline" id="timeline-export">
        <div className="timeline-header">
          <div className="timeline-label" />
          {days.map((day) => (
            <div key={day} className="timeline-day">
              {day}
            </div>
          ))}
        </div>

        <div className="timeline-body">
          {sections.map((section) => (
            <div key={section.id} className="timeline-section-group">
              <div className="timeline-section-title">{section.title}</div>

              {section.activities.map((activity) => (
                <div key={activity.id} className="timeline-row">
                  <div className="timeline-activity-label">{activity.name}</div>

                  <div className="timeline-activities">
                    {days.map((_, i) => (
                      <div key={i} className="timeline-cell" />
                    ))}

                    <TimelineActivity
                      title={activity.name}
                      start={activity.start}
                      end={activity.end}
                      color={activity.color}
                      onClick={() => onEditActivity(activity)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default Timeline;
