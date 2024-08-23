/* .js

import React, { useState } from 'react';
import './App.css'; // Assurez-vous que le chemin est correct

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("low");
  const [search, setSearch] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  let id = 1;

  function handleNewTaskChange(ev) {
    setNewTask(ev.target.value);
  }

  function handlePriorityChange(ev) {
    setPriority(ev.target.value);
  }

  function handleAddTask() {
    const toAdd = {
      id: id++,
      title: newTask,
      priority: priority,
    };
    setTasks([...tasks, toAdd]);
    setNewTask("");
    setPriority("low");
  }

  function handleDeleteTask(id) {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  }

  function handleUpdateTask(id, newTitle, newPriority) {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, title: newTitle, priority: newPriority } : task
    );
    setTasks(newTasks);
  }

  function handleSearchChange(ev) {
    setSearch(ev.target.value);
  }

  function handleFilterPriorityChange(ev) {
    setFilterPriority(ev.target.value);
  }

  function handleSortOrderChange(ev) {
    setSortOrder(ev.target.value);
  }

  const filteredTasks = tasks
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(task =>
      filterPriority ? task.priority === filterPriority : true
    )
    .sort((a, b) =>
      sortOrder === "ASC"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form-group">
        <input
          onChange={handleNewTaskChange}
          value={newTask}
          placeholder="New task"
        />
        <select onChange={handlePriorityChange} value={priority}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="form-group">
        <input
          onChange={handleSearchChange}
          value={search}
          placeholder="Search"
        />
        <select onChange={handleFilterPriorityChange} value={filterPriority}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select onChange={handleSortOrderChange} value={sortOrder}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input
              value={task.title}
              onChange={(ev) => handleUpdateTask(task.id, ev.target.value, task.priority)}
            />
            <select
              value={task.priority}
              onChange={(ev) => handleUpdateTask(task.id, task.title, ev.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

*/

import React, { useState } from 'react';
import './App.css';

interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [search, setSearch] = useState<string>("");
  const [filterPriority, setFilterPriority] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC');

  let id = 1;

  function handleNewTaskChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(ev.target.value);
  }

  function handlePriorityChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    setPriority(ev.target.value as 'low' | 'medium' | 'high');
  }

  function handleAddTask() {
    const toAdd: Task = {
      id: id++,
      title: newTask,
      priority: priority,
    };
    setTasks([...tasks, toAdd]);
    setNewTask("");
    setPriority('low');
  }

  function handleDeleteTask(id: number) {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  }

  function handleUpdateTask(id: number, newTitle: string, newPriority: 'low' | 'medium' | 'high') {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, title: newTitle, priority: newPriority } : task
    );
    setTasks(newTasks);
  }

  function handleSearchChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearch(ev.target.value);
  }

  function handleFilterPriorityChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    setFilterPriority(ev.target.value);
  }

  function handleSortOrderChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(ev.target.value as 'ASC' | 'DESC');
  }

  const filteredTasks = tasks
    .filter(task =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(task =>
      filterPriority ? task.priority === filterPriority : true
    )
    .sort((a, b) =>
      sortOrder === "ASC"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form-group">
        <input
          onChange={handleNewTaskChange}
          value={newTask}
          placeholder="New task"
        />
        <select onChange={handlePriorityChange} value={priority}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div className="form-group">
        <input
          onChange={handleSearchChange}
          value={search}
          placeholder="Search"
        />
        <select onChange={handleFilterPriorityChange} value={filterPriority}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select onChange={handleSortOrderChange} value={sortOrder}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id}>
            <input
              value={task.title}
              onChange={(ev) => handleUpdateTask(task.id, ev.target.value, task.priority)}
            />
            <select
              value={task.priority}
              onChange={(ev) => handleUpdateTask(task.id, task.title, ev.target.value as 'low' | 'medium' | 'high')}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
