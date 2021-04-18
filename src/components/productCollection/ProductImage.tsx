import { Image, Typography } from 'antd'
interface PropsType {
  id: number | string,
  size: 'large' | 'small',
  imageSrc: string,
  price: number | string
  title: string
}
export const ProductImage: React.FC<PropsType> = ({ title, size, imageSrc, price }) => {
  return (
    <>
      {
        size === 'large' ? (
          <Image src={imageSrc} height={285} width={490}></Image>
        ) : (<Image src={imageSrc} height={120} width={240}></Image>)

      }

      <p>
        <Typography.Text type='secondary'> {title} </Typography.Text>
        <Typography.Text type='danger' strong> ￥ {price} 起 </Typography.Text>
      </p>
    </>
  )
}