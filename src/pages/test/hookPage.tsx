import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
// import ChildPage from './childPage'
import ChildPage2 from './page1'

export const TestPage = () => {
    const textRef = useRef(0);
    const [number,setNumber] = useState(0);
    const [name, setName] = useState<string>('测试hooks');

    // useCallback、useMemo 需要配合memo使用才起作用
    useEffect(() => {
      document.title = `你点击了${number}次`;
      textRef.current = number;
    }, [number]);
    
   const handelClick = () => {
    //  setNumber(number + 1);
     setNumber(preState => {
        return preState + 1
     });
    }
    const handleSubmit = useCallback(() => {
      console.log('textRef', textRef.current);
    }, [textRef]);

  return (
      <div style={{width: '100%', textAlign: 'center'}}>
        <p>{number}-{name}</p>
        <button onClick={()=>setNumber(number+1)}>+</button>
        <button onClick={handelClick}>+加</button>
        <br />

        <ChildPage2 handleSubmit={handleSubmit}></ChildPage2>

        
        {/* 子组件不会渲染, memo包裹子组件*/}
        {/* <ChildPage name={useMemo(() => ({ name, color: name.indexOf('name') !== -1 ? 'red' : 'green' }), [name])}></ChildPage> */}
        
        {/* 子组件不会渲染, memo包裹子组件*/}
        {/* <ChildPage name={name}></ChildPage> */}

        {/* 子组件不会渲染(useMemo, useCallback), memo包裹子组件*/}
        {/* <ChildPage name={useMemo(() => ({ name, color: name.indexOf('name') !== -1 ? 'red' : 'green' }), [name])} onClick={useCallback((newName: string) => setName(newName), [])}></ChildPage> */}
       
        {/* 子组件不会渲染, memo包裹子组件*/}
        {/* <ChildPage name={name} onClick={useCallback((newName: string) => setName(newName), [])}></ChildPage> */}

        {/* 子组件会渲染, 即使memo包裹子组件*/}
        {/* <ChildPage number1={number}></ChildPage> */}

        {/* 子组件会渲染, 即使memo包裹子组件*/}
        {/* <ChildPage name={{ name, color: name.indexOf('name') !== -1 ? 'red' : 'green' }}></ChildPage>  */}

        {/* 子组件会渲染, 即使memo包裹子组件*/}
        {/* <ChildPage name={name} onClick={(newName: string) => setName(newName)}></ChildPage> */}

        {/* 子组件会渲染(传入对象要用useMemo包裹一下, 才不会重新渲染), memo包裹子组件*/}
        {/* <ChildPage name={{ name, color: name.indexOf('name') !== -1 ? 'red' : 'green' }} onClick={useCallback((newName: string) => setName(newName), [])}></ChildPage> */}
      </div>
  )
};