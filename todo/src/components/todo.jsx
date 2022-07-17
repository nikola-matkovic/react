import style from './style.module.css';

const Todo = () => {
    return (
        <div className={style.wrapper}>
            <header>Todo App</header>
            <div className={style.inputField}>
                <input type="text" placeholder="Add your new todo" />
                <button><i class="fas fa-plus"></i></button>
            </div>
            <ul className={style.todoList}>
            </ul>
            <div className={style.footer}>
            <span>You have <span class="pendingTasks"></span> pending tasks</span>
            <button>Clear All</button>
            </div>
        </div>
    );
}

export default Todo;