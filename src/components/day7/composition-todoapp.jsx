import * as React from 'react';
import { compose } from 'redux'

const TODOS = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
];

const fetchData = () => {
    return { data: [], isLoading: false };
};

const withLoadingFeedback = (feedback) => (Component) => (props) => {
    if (props.isLoading) return <div>{feedback}</div>;
    return <Component {...props} />;
  };
  
  const withNoDataFeedback = (feedback) => (Component) => (props) => {
    if (!props.data) return <div>{feedback}</div>;
    return <Component {...props} />;
  };
  
  const withDataEmptyFeedback = (feedback) => (Component) => (props) => {
    if (!props.data.length) return <div>{feedback}</div>;
    return <Component {...props} />;
  };



const Todo2 = () => {
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

// const EnhancedTodoList = withLoadingFeedback(
//     withNoDataFeedback(
//         withDataEmptyFeedback(BaseTodoList)
//     )
// );
const EnhancedTodoList = compose(
    withLoadingFeedback('Loading Todos.'),
    withNoDataFeedback('No Todos loaded yet.'),
    withDataEmptyFeedback('Todos are empty.'),
  )(BaseTodoList);
    

export default Todo2;