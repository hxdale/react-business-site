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
              title={<Typography.Title level={3} type="warning">爆款推荐==</Typography.Title>}
              sideImage={'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'}
              products={[{ id: 1, name: 'apple', number: 100 }, { id: 2, name: 'orange', number: 50 }]}
            />
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div >
  )
};