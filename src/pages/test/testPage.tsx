import { useState, useEffect } from 'react'
export const TestPage = () => {
    const [number,setNumber] = useState(0);
    useEffect(() => {
      console.log('===============')
      document.title = `你点击了${number}次`;
    }, [number]);
  return (
    <>
      <p>{number}</p>
       <button onClick={()=>setNumber(number+1)}>+</button>
    </>
  )
};