
interface PropsType {
  title: JSX.Element,
  sideImage: string,
  products: any[]
}
export const ProductCollection: React.FC<PropsType> = ({ title, sideImage, products }) => {
  return (
    <>
      <div>
        <h3>产品推荐列表</h3>
      </div>
    </>
  )
}