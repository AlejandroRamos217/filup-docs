import html2pdf from "html2pdf.js";
import TimelineHeader from "../timeline/TimelineHeader";
import Timeline from "../timeline/Timeline";
import { useState, useRef } from "react";


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);

  const [clearFn, setClearFn] = useState(null);
  const timelineRef = useRef(null);


  const handleClear = () => {
  timelineRef.current?.clearTimeline();
};

  const exportPDF = () => {
    const element = document.getElementById("timeline-export");
    const noExportElements = element.querySelectorAll(".no-export");
    noExportElements.forEach((el) => {
      el.style.display = "none";
    });

    const options = {
      margin: 10,
      filename: "reporte-semanal.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 3,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "landscape",
      },
    };

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        // 🔄 volver a mostrar botones
        noExportElements.forEach((el) => {
          el.style.display = "";
        });
      });
  };

  return (
    <>
      <div id="timeline-export">
        <TimelineHeader
          onAddClick={() => {
            setEditingActivity(null);
            setIsModalOpen(true);
          }}
          onExportClick={exportPDF}
          onClearClick={handleClear}
        />

        <Timeline
          ref={timelineRef}
          isModalOpen={isModalOpen}
          editingActivity={editingActivity}
          onEditActivity={(activity) => {
            setEditingActivity(activity); 
            setIsModalOpen(true);
          }}
          onCloseModal={() => {
            setIsModalOpen(false);
            setEditingActivity(null); 
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;
