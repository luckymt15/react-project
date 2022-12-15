import "/node_modules/primeflex/primeflex.css";
import "./App.css";
import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from "./feature/counterSlice";

export default function App () {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [counter, setCounter] = useState(count)

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  useEffect(()=>
  {
    setCounter(count)
  },[count])
  
  return (
    <>
      <div>counter</div>
      <div>{counter}</div>
      <button onClick={handleClick}>click</button>
      <button onClick={()=>dispatch(increment(5))}>Add</button>
    </>
  );
}
