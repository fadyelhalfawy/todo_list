import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';
import UpdateTodo from "./UpdateTodo";
uuidv4();
const TodoWrapper = () =>  {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => (
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        )))
    }

    const updateTodo = id => {
        setTodos(todos.map(todo => (
            todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
        )))
    }

    const updateTask = (task, id) => {
        setTodos(todos.map(todo => (
            todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
        )))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(
            todo => todo.id !== id
        ))
    }

    return (
        <div className={'todoWrapper'}>
            <h1>Get Things Done!</h1>

            <TodoForm addTodo={addTodo}/>

            { todos.map((todo, index) => (
                todo.isEditing ? (
                    <UpdateTodo
                        updateTask={updateTask}
                        task={todo}
                    />
                    ) :
                    (
                        <Todo task={todo}
                              key={index}
                              toggleComplete={toggleComplete}
                              updateTodo={updateTodo}
                              deleteTodo={deleteTodo}
                        />
                    )
            )) }

        </div>
    );
}
export default TodoWrapper;
