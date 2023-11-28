import React, {useState} from 'react';

const TodoForm = ({addTodo}) =>  {
    const [value, setValue] = useState("");

    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        if(value === "") return;

        addTodo(value);

        setValue("");
    }

    return (
        <form className={'todoForm'} onSubmit={handleSubmit}>
            <input type={"text"} className={'todo-input'} value={value} placeholder={'What will we do today?'}
                   onChange={ handleChange }/>

            <button type={'submit'} className={'todo-btn'}>
                Add Task
            </button>
        </form>
    );
}
export default TodoForm;
