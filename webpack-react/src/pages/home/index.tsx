import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks';
import { increment, decrement, incrementAsync, counterSelector } from "@/store/reducers/counter";

const HomePage: React.FC = () => {
  const count = useAppSelector(counterSelector) // 读取 count 值
  const dispatch = useAppDispatch() // 获得 dispatch，结合 action 就可更新 state

  return (<div className="counter-page">
    <div className="counter">
      {/* 同步 - */}
      <div className="btn" onClick={() => dispatch(decrement())}>
        -
      </div>
      <div className="val">{`${count}`}</div>
      <div className="btn" onClick={() => dispatch(increment())}>
        +
      </div>
      {/* TODO: 异步 thunk 结合 ts 使用需解决问题 */}
      {/* 异步 + */}
      {/* <div className="btn" onClick={() => dispatch(incrementAsync(5))}>
        +
      </div> */}
    </div>
  </div>
  )
}

export default HomePage
