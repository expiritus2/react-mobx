import { action, makeAutoObservable, observable } from 'mobx';

export interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}

// const TodoStore = () => makeAutoObservable({
//    list: [] as Todo[],
//     add(title: string) {
//         if(title.length < 3) { return; }
//
//         this.list.push({
//             id: Date.now(),
//             title,
//             isDone: false,
//         });
//     },
//
//     toggle(todo: Todo) {
//         todo.isDone = !todo.isDone;
//     },
//
//     remove(todo: Todo) {
//         this.list = this.list.filter((t) => t.id !== todo.id);
//     }
// });

class TodoStore {
    @observable
    list: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    // constructor() {
    //     makeAutoObservable(this, {
    //         list: observable,
    //         add: action,
    //         toggle: action,
    //         remove: action,
    //     });
    // }

    @action
    add(title: string) {
        if(title.length < 3) { return; }

        this.list.push({
            id: Date.now(),
            title,
            isDone: false,
        });
    }

    @action
    toggle(todo: Todo) {
        todo.isDone = !todo.isDone;
    }

    @action
    remove(todo: Todo) {
        this.list = this.list.filter((t) => t.id !== todo.id);
    }
}

export default TodoStore;