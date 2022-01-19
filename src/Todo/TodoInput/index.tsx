import React, { FormEvent } from 'react';
import styles from './styles.module.css';
import { useStore } from '../../stores';

const TodoInput = () => {
    const { todos } = useStore();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        const value = String(formData.get('todo-input') || '');
        todos.add(value);
        formElement.reset();
    }

    return (
        <form onSubmit={handleSubmit} className={styles['todo-input-group']}>
            <input type="text" name="todo-input" placeholder="Add todo..." />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoInput;