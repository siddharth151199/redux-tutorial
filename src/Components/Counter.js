import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment }
  from '../state/counter/CounterSlice'

export function Counter() {
  const count = useSelector((state) =>
    state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          onClick={() =>
            dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() =>
            dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}