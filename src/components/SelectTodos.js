const SelectTodos = (props) => {
  const { filter, setFilter, darkMode } = props;
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };
  const onChange = darkMode ? "bg-dark text-white" : "bg-light";
  return (
    <div className="input-group mb-3">
      <label className={`input-group-text ${onChange}`} htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        className={`form-select ${onChange}`}
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        {/* eslint-disable-next-line */}
        <option value="all">Toutes 🌈</option>
        {/* eslint-disable-next-line */}
        <option value="completed">Terminées 💪</option>
        {/* eslint-disable-next-line */}
        <option value="notcompleted">pas Terminées 🌪</option>
      </select>
    </div>
  );
};

export default SelectTodos;
