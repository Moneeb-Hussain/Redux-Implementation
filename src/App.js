import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchtodo } from './Components/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo)
  console.log(todos);
  return (
    <div className="App">
      <h2> Counter using React Redux </h2>
      <Counter />
      <h2 className='button'> Fetching todo API Redux Async Thunk </h2>
      <button className='button' onClick={() => dispatch(fetchtodo())}> Fetch Todos </button>
      {todos.isLoading && <h1> Loading ...  </h1>} 
      {todos.data && todos.data.map((element) => {
          return (
          <li>{element.title}</li>)
        })
      }
    </div>
  );
}

export default App;
