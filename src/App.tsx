import React from 'react';
import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';

const App = () => {
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        toggleTodoVisibility() {
            appUI.todosVisible = !appUI.todosVisible;
        }
    }));

    return (
        <div className="app">
            <TodoInput/>
            <div className={styles['todo-list-wrapper']}>
                <h2 onClick={appUI.toggleTodoVisibility}>
                    <span>{appUI.todosVisible ? '-' : '+'}</span>
                    Todos
                </h2>
                {appUI.todosVisible && <TodoList/>}
            </div>
        </div>
    );
}

export default observer(App);
