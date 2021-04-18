import { Divider, Typography } from 'antd'
// import { SmileOutlined, SmileFilled } from '@ant-design/icons';
import React from 'react'
// const { Paragraph } = Typography;
interface PropsType {
  title: JSX.Element,
  sideImage: string,
  products: any[]
}
export const ProductCollection: React.FC<PropsType> = ({ title, sideImage, products }) => {
  return (
    <>
      <div>
        <Divider orientation='center'> {title} </Divider>
        <img src={sideImage} alt="图片" />
        <ul>
          {
            products.map((v, i) => {
              return <Typography.Text key={v.id}> 姓名: {v.name} , 数量: {v.number} </Typography.Text>
            })
          }
        </ul>

      </div>
    </>
  )
}