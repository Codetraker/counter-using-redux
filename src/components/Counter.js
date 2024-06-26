import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../store/index';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter)

  const dispatch = useDispatch();
  const incrementHandler = () =>{
      // dispatch({type:'increment'});
      dispatch(counterAction.increment());
  };
  const decrementHandler = () =>{
    // dispatch({type:'decrement'});
    dispatch(counterAction.decrement());
  };
  const increaseHandler = () =>{
    // dispatch({type:'increase',amount:5});
    dispatch(counterAction.increase(5));
  };
  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
