import React, {FC} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { RootState } from 'store/index'
import {add, decrement, increment} from 'actions/counter'
import CounterComponent, {CounterProps} from 'components/Counter'

const Counter: FC<{}> = () => {
  const dispatch = useDispatch();
  const props: CounterProps = {
    count: useSelector((state: RootState) => state.counter.count),
    add: amount => dispatch(add(amount)),
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  };
  return (
    <CounterComponent {...props}/>
  )
}

export default Counter
