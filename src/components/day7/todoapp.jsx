import * as React from 'react';

const TODOS = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
];

const fetchData = () => {
    return { data: TODOS, isLoading: false };
};

const withHigherOrderComponent = (Component) => {
    // props here are the props of the EnhancedTodoList
    // we want to pass the props of the EnhancedTodoList to the BaseTodoList
    // so we are returning a function that takes the props of the EnhancedTodoList
    // and returns the BaseTodoList with the props of the EnhancedTodoList
    // and also checking the props for edge cases
    return (props) => {
        if (props.isLoading) return <div>Loading data.</div>;
        if (!props.data) return <div>No data loaded yet.</div>;
        if (!props.data.length) return <div>Data is empty.</div>;

        return <Component {...props} />;
    }
}
const Todo = () => {
    const { data, isLoading } = fetchData();

    // any prop we pass here will be passed to the BaseTodoList component through the withHigherOrderComponent
    return <EnhancedTodoList data={data} isLoading={isLoading}  />;
};

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

// so here we are passing the BaseTodoList to the withHigherOrderComponent
// and then we are passing the props (of EnhancedTodoList) to the BaseTodoList
//         return <Component {...props} />;
const EnhancedTodoList = withHigherOrderComponent(BaseTodoList);

export default Todo;