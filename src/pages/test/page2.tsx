import { memo } from 'react'

interface ChildPropsType {
  // name?: string;
  name: { name: string; color: string, number?: number };
  color?: string
  number1?: number;
  onClick?: Function;
}
 const ChildPage = ({ name, onClick }: ChildPropsType): JSX.Element => {
  console.log('children 触发重新渲染===============')
  return (
    <>
    <p>children 组件===========</p>
    </>
  )
};
export default memo(ChildPage)
// export default ChildPage;