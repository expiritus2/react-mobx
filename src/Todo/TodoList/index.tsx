import React from 'react';
import { Todo } from '../../stores/TodoStore';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.css';
import { useStore } from '../../stores';

const TodoList = () => {
    const { todos } = useStore();

    const handleToggleTodo = (t: Todo) => () => {
        todos.toggle(t)
    }

    const handleRemoveTodo = (t: Todo) => () => {
        todos.remove(t);
    }

    return (
        <ul className={styles['todo-list']}>
            {todos.list.map((t) => (
                <li key={t.id}>
                    <label htmlFor={String(t.id)} className={t.isDone ? styles.done : ''}>
                        {t.title}
                    </label>

                    <button onClick={handleRemoveTodo(t)} className={[styles.remove, t.isDone && styles.done].join(' ')}>remove</button>

                    <button onClick={handleToggleTodo(t)}>
                        <input type="checkbox" id={String(t.id)} readOnly tabIndex={-1} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default observer(TodoList);