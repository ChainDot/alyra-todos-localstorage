const AddTodoForm = (props) => {
  const { addTodo, setFilter, darkMode } = props;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTodoText = event.target.elements.todo.value;
    addTodo(newTodoText);
    event.target.reset();
    setFilter((filter) => (filter === "completed" ? "all" : filter));
  };

  const onChange = darkMode ? "bg-dark text-white" : "bg-light";
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className={`input-group-text ${onChange}`} htmlFor="todo">
          Ajouter une tâche
        </label>
        <input className={`form-control ${onChange}`} id="todo" required />
      </div>
      <button type="submit" className="btn btn-primary">
        allons-y !
      </button>
    </form>
  );
};

export default AddTodoForm;
