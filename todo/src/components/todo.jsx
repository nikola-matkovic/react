import style from './style.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Todo = () => {
    const handleInputChange = (e)  => {
        setValue(e.target.value);
    }
    const [value, setValue] = useState('');
    return (
        <div className={style.wrapper}>
            <header>Todo App</header>
            <div className={style.inputField}>
                <input
                    type="text"
                    placeholder="Add your new todo"
                    value={value} 
                    onChange={(e) => handleInputChange(e)}/>
                <button><FontAwesomeIcon icon="plus"></FontAwesomeIcon></button>
            </div>
            <ul className={style.todoList}>
            </ul>
            <div className={style.footer}>
            <span>You have <span className="pendingTasks"></span> pending tasks</span>
            <button>Clear All</button>
            </div>
        </div>
    );
}

export default Todo;