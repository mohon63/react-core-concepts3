import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [commetns, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);
  return (
    <div>
      <h3>Load Comments</h3>
      {
        commetns.map(comment => <Comment title={comment.title} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props) {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: '15px', border: '3px solid yellow', borderRadius: '10px'
    }}>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
