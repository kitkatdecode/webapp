const Todo = (props) => {
    const {todos, deleteTodo} = props;
    const todoList = (todos.length) ? (
        todos.map(todo => {
            return (
                <div className='todo collection-item  blue lighten-1 z-depth-5' key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                    <span className="text-black text-bold" >{todo.content}</span>
                </div>
            );
        })
    ) : (
        <p className="center">Nothing left for now, Enjoy !</p>
    );

    return (
        <div className="todoList collection center">
            {todoList}
        </div>
    );
}

export default Todo;