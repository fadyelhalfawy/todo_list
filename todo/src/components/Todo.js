import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, updateTodo, deleteTodo }) =>  {

    return (
        <div className={`todo ${task.completed ? 'completed' : ""}`}>
            <p onClick={() => toggleComplete(task.id)}>
                {task.task}
            </p>

            <div>
                <FontAwesomeIcon icon={faPenToSquare}
                                 onClick={() => updateTodo(task.id)}
                />

                <FontAwesomeIcon icon={faTrash}
                                 onClick={() => deleteTodo(task.id)}
                />

            </div>
        </div>
    );
}
export default Todo;
