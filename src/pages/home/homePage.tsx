import { Header, Footer, ProductCollection } from '../../components'
import { Typography, Row, Col } from 'antd'
export const HomePage = () => {
  return (
    <div className="home-page">
      <Header></Header>
      <div className="page-body" style={{ height: 200, backgroundColor: '#ccc', marginTop: 20 }}>
        <Row>
          <Col span={12}>
            左边区域
          <Typography.Title level={3}>homepage 页面</Typography.Title>
          </Col>
          <Col span={12}>
            <ProductCollection
              title={<Typography.Title level={3} type="warning">爆款推荐</Typography.Title>} >
              sideImage={'wwwwwwwww'}
              products={[]}

            </ProductCollection>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div >
  )
};