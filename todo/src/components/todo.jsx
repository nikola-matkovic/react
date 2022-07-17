import style from './style.module.css';
import { useState } from 'react';

const Todo = () => {
    const handleInputChange = (e)  => {
        setValue(e.target.value);
        console.log(e);
    }
    const addTask = (e) => {
        e.preventDefault();
        if (value) {
            let newTasks = [...tasks, value];
            setTasks(newTasks);
            setValue('');
            let forStorage = JSON.stringify(newTasks);
            localStorage.setItem('reactAppTasksToDo', forStorage);
        }
    }
    const finish = (e, index) => {
        e.preventDefault();
        setFinished([...finished, tasks[index]]);
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks([...newTasks]);
        let forStorage = JSON.stringify(newTasks);
        localStorage.setItem('reactAppTasksToDo', forStorage);
    }
    const finishAll =() =>{
        setFinished([...finished, ...tasks]);
        setTasks([]);
        let forStorage = JSON.stringify([]);
        localStorage.setItem('reactAppTasksToDo', forStorage);
    }
    let stored = localStorage.getItem('reactAppTasksToDo');
    let storedArray = stored ? JSON.parse(stored) : [];
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState(storedArray);
    const [finished, setFinished] = useState([]);
    return (
        <div className={style.wrapper}>
            <header><span>Todo App</span><button type="button" className="btn btn-secondary" onClick={console.log(finished)}>Finished</button></header>
            <div className={style.inputField}>
                <input
                    type="text"
                    placeholder="Add your new todo"
                    value={value} 
                    onChange={(e) => handleInputChange(e)}
                    onKeyPress={(e) => { if (e.key === 'Enter') addTask(e) }}
                />
                <button style={{pointerEvents: `${value ? "all": "none"}`}} onClick={(e)=>addTask(e)}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <ul className={style.todoList}>
                {
                    tasks.map( (task, index) => {
                        return <li key={index}>{task}<span onClick={(e) => finish(e, index)} className={style.icon} ><i className="fas fa-check"></i></span></li>
                    })
                }
            </ul>
            <div className={style.footer}>
            <span>You have <span className="pendingTasks">{tasks.length}</span> pending tasks</span>
            <button style={{pointerEvents: `${tasks.length ? "all": "none"}`}}  onClick={()=>finishAll()}>Finished All</button>
            </div>
        </div>
    );
}
export default Todo;