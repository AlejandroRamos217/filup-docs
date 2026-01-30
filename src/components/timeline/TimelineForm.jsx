import { useState, useEffect } from "react";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const TimelineForm = ({ sections, onAddActivity, editingActivity }) => {
  const [form, setForm] = useState(
    editingActivity || {
      name: "",
      category: "",
      start: 0,
      end: 0,
      color: "green",
    }
  );

  useEffect(() => {
    if (editingActivity) {
      setForm(editingActivity);
    } else {
      setForm({
        name: "",
        category: "",
        start: 0,
        end: 0,
        color: "green",
      });
    }
  }, [editingActivity]);

  const categoryOptions = Array.from(
    new Set(sections.map((s) => s.title.trim()))
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert("El nombre es obligatorio");
      return;
    }

    if (!form.category.trim()) {
      alert("La categoría es obligatoria");
      return;
    }

    if (form.end < form.start) {
      alert("El día fin no puede ser menor al día inicio");
      return;
    }

    onAddActivity(form);
  };

  return (
    <form className="timeline-form" onSubmit={handleSubmit}>
      <h3>{editingActivity ? "Editar actividad" : "Agregar actividad"}</h3>

      <label>
        Nombre
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label>
        Categoría
        <input
          list="category-options"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          placeholder="Ej. Sesiones, Modificaciones..."
        />
        <datalist id="category-options">
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat} />
          ))}
        </datalist>
      </label>

      <label>
        Día inicio
        <select
          value={form.start}
          onChange={(e) => setForm({ ...form, start: Number(e.target.value) })}
        >
          {days.map((d, i) => (
            <option key={i} value={i}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <label>
        Día fin
        <select
          value={form.end}
          onChange={(e) => setForm({ ...form, end: Number(e.target.value) })}
        >
          {days.map((d, i) => (
            <option key={i} value={i}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <label>
        Color
        <select
          value={form.color}
          onChange={(e) => setForm({ ...form, color: e.target.value })}
        >
          <option value="green">Verde</option>
          <option value="black">Negro</option>
          <option value="gray">Gris</option>
        </select>
      </label>

      <button type="submit">Guardar</button>
    </form>
  );
};

export default TimelineForm;
