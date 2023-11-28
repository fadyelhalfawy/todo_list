import React, {useState} from 'react';

const UpdateTodo = ({updateTask, task}) =>  {
    const [value, setValue] = useState(task.task);

    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        updateTask(value, task.id);

        setValue("");
    }

    return (
        <form className={'TodoForm'} onSubmit={handleSubmit}>
            <input type={"text"} className={'todo-input'} value={value} placeholder={'Update Your Task'}
                   onChange={ handleChange }/>

            <button type={'submit'} className={`todo-update-btn`}>
                Update Task
            </button>
        </form>
    );
}
export default UpdateTodo;
