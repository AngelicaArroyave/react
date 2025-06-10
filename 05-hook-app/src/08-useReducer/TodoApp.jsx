import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {
    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount, pendingTodosCount } = useTodo()

    return (
        <>
            <h1> Todo App: { todosCount }, <small> Pending: { pendingTodosCount } </small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
                </div>
                <div className="col-5">
                    <h4> Add TODO </h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}