import style from './style.module.css';
import { useState } from 'react';
const Todo = () => {

    const handleInputChange = (e)  => {
        setValue(e.target.value);
    }
    
    const addTask = (e) => {
        e.preventDefault();
        if (value) {
            let newTasks = [...tasks, value];
            setTasks(newTasks);
            setValue('');
            let forStorageTask = JSON.stringify(newTasks);
            localStorage.setItem('reactAppTasksToDo', forStorageTask);
        }
    }

    const finish = (e, index) => {
        e.preventDefault();
        const newTasks = [...tasks];
        const newFinished = [...finished, tasks[index]];
        newTasks.splice(index, 1);
        setTasks([...newTasks]);
        setFinished(newFinished);
        let forStorageTask = JSON.stringify(newTasks);
        let forStorageFinished = JSON.stringify(newFinished);
        localStorage.setItem('reactAppTasksToDo', forStorageTask);
        localStorage.setItem('reactAppTasksFinished', forStorageFinished);
    }

    const finishAll =() =>{
        let newFinished = [...finished, ...tasks];
        setFinished(newFinished);
        setTasks([]);
        let forStorageTask = JSON.stringify([]);
        let forStorageFinished = JSON.stringify(newFinished);
        localStorage.setItem('reactAppTasksToDo', forStorageTask);
        localStorage.setItem('reactAppTasksFinished', forStorageFinished);
    }

    const restoreAll =() =>{
        setTasks([...tasks, ...finished]);
        setFinished([]);
        let forStorageTask = JSON.stringify([...tasks, ...finished]);
        let forStorageFinished = JSON.stringify([]);
        localStorage.setItem('reactAppTasksToDo', forStorageTask);
        localStorage.setItem('reactAppTasksFinished', forStorageFinished);
    }

    const deleteAll =() =>{
        setFinished([]);
        let forStorageFinished = JSON.stringify([]);
        localStorage.setItem('reactAppTasksFinished', forStorageFinished);
    }

    const deleteFinishedTask = (e, index) => {
        e.preventDefault();
        const newFinished = [...finished];
        newFinished.splice(index, 1);
        setFinished(newFinished);
        let forStorageFinished = JSON.stringify(newFinished);
        localStorage.setItem('reactAppTasksFinished', forStorageFinished);
    }

    const restoreFinishedTask = (e, index) => {
        e.preventDefault();
        const newFinished = [...finished];
        const newTasks = [...tasks];
        newTasks.push(newFinished[index]);
        newFinished.splice(index, 1);
        setTasks(newTasks);
        setFinished(newFinished);
        let forStorageTask = JSON.stringify(newTasks);
        let forStorageFinished = JSON.stringify(newFinished);
        localStorage.setItem('reactAppTasksToDo', forStorageTask);
        localStorage.setItem('reactAppTasksFinished', forStorageFinished);
    }

    let stored = localStorage.getItem('reactAppTasksToDo');
    let storedArray = stored ? JSON.parse(stored) : [];
    let storedFinished = localStorage.getItem('reactAppTasksFinished');
    let storedFinishedArray = storedFinished ? JSON.parse(storedFinished) : [];

    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState(storedArray);
    const [finished, setFinished] = useState(storedFinishedArray);
    const [showFinished, setShowFinished] = useState(false);

    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div>
                    <header>
                        <span>Todo App</span>
                        <button style={{pointerEvents: `${(finished.length || showFinished) ? "all": "none"}`}} type="button" className="btn btn-secondary" onClick={() => setShowFinished(!showFinished)}>{ `${showFinished? "Close" : "Finished" }`}</button>
                    </header>
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
                    <span>You have <span className="pendingTasks">{tasks.length}</span> pending {`${(tasks.length===1) ? "task":"tasks"}`}</span>
                    <button style={{pointerEvents: `${tasks.length ? "all": "none"}`}}  onClick={()=>finishAll()}>Finish All</button>
                    </div>
                </div>
            </div>
            <div className={style.right} style={{display: `${showFinished ? "block": "none"}`}}>
                <ul className={style.todoList}>
                    {
                        finished.map( (task, index) => {
                            return (
                                <li key={index}>
                                    <span style={{background: "#007bff"}} onClick={(e) => restoreFinishedTask(e, index)} className={`${style.icon} ${style.restore} `} >
                                    <i className="fa fa-undo"></i>
                                    </span>
                                    {task}
                                    <span style={{background: "#e74c3c"}} onClick={(e) => deleteFinishedTask(e, index)} className={style.icon} >
                                        <i className="fas fa-trash"></i>
                                    </span>
                                </li>)
                        })
                    }
                </ul>
                <div className={style.footer}>
                    <button style={{pointerEvents: `${finished.length ? "all": "none"}`}}  onClick={()=>restoreAll()}>Restore All</button>
                        <span>You have <span className="pendingTasks">{finished.length}</span> finished {`${(finished.length===1) ? "task":"tasks"}`}</span>
                    <button style={{pointerEvents: `${finished.length ? "all": "none"}`}}  onClick={()=>deleteAll()}>Delete All</button>
                </div>
            </div>
        </div>
    );
}
export default Todo;