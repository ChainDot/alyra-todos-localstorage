import { useEffect, useState } from "react";
import TodosList from "./TodosList";
import SelectTodos from "./SelectTodos";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";

const initialTodos = [
  {
    text: "Forkez et cloner ce repo",
    isCompleted: false,
    id: "1b688c51-e990-4ce3-95a5-9018cf81d23d",
  },
  {
    text: "Jouer avec le <title></title> 🤩",
    isCompleted: false,
    id: "efc6331d-7ca2-49a6-b014-378b8280b33d",
  },
  {
    text: "Enregistrer les tâches dans localStorage 🤓",
    isCompleted: false,
    id: "9e60d353-cd72-40bb-97e6-5841e51635c0",
  },
  {
    text: "Mettre en place dark mode 😎",
    isCompleted: false,
    id: "df0ce18c-b4fa-4651-82c0-72fad6b486e4",
  },
  {
    text: "Enregistrer dark mode dans localStorage 🥳",
    isCompleted: false,
    id: "206e8742-02b1-4ce9-92d2-d6184588f4c3",
  },
];

const Todos = ({ darkMode, setDarkMode }) => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("myToDoList")) || initialTodos
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title =
      completedCount === todos.length
        ? "Que devez vous faire aujourd'hui ?"
        : `Vous avez encore ${
            todos.length - completedCount
          } tâches à accomplir !`;
  });

  useEffect(() => {
    localStorage.setItem("myToDoList", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (task) => {
    setTodos(todos.filter((el) => el.id !== task.id));
  };

  const toggleCompleteTodo = (task) => {
    setTodos(
      todos.map((el) => {
        if (el.id === task.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        }
        return el;
      })
    );
  };

  const filteredTodos = todos.filter((el) => {
    if (filter === "completed") {
      return el.isCompleted;
    }
    if (filter === "notcompleted") {
      return !el.isCompleted;
    }
    return true;
  });

  const handlebuttonClick = () => {
    setDarkMode(!darkMode);
  };
  const changeButton = darkMode
    ? "bi bi-lightbulb-fill"
    : "bi bi-lightbulb border-white";

  const borderButtonChange = darkMode
    ? "border-white text-white"
    : "border-dark";

  const completedCount = todos.filter((el) => el.isCompleted).length;
  console.log(completedCount);
  return (
    <main className>
      <div className="d-flex justify-content-center gap-5">
        <h2 className="text-center">
          Ma liste de tâches ({completedCount} / {todos.length})
        </h2>
        <button
          type="button"
          className={`btn btn-white mb-3 ${borderButtonChange}`}
          onClick={handlebuttonClick}
        >
          <i className={changeButton}></i>
        </button>
      </div>
      <SelectTodos
        filter={filter}
        setFilter={setFilter}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <TodosList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleCompleteTodo={toggleCompleteTodo}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <AddTodoForm
        addTodo={addTodo}
        setFilter={setFilter}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </main>
  );
};

export default Todos;
