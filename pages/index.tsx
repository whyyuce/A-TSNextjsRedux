import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../slices/count'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const  {value} = useSelector((s:any)=>s.counter)
  return (
    <div className={styles.container}>
      test
      {value}
      <button onClick={()=>dispatch(increment())}>INC Button</button>
    </div>
  )
}

export default Home
