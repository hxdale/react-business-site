import { memo } from 'react'

interface ChildPropsType {
  // name?: string;
  // name: { name: string; color: string, number?: number };
  // color?: string
  // number1?: number;
  handleSubmit: () => void;
}

 const ChildPage2 = ({ handleSubmit:handelClick }: ChildPropsType): JSX.Element => {
  console.log('children2 渲染===============')
  return (
    <>
    <p>children2 组件===========</p>
    <button onClick={handelClick}>children2</button>
    </>
  )
};
export default memo(ChildPage2)
// export default ChildPage2;