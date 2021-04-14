import { useHistory, useLocation, useParams, useRouteMatch, Link } from 'react-router-dom'
import { Button } from 'antd'

export const Header: React.FC = (props) => {

  console.log('props', props)
  const history = useHistory(); // 导航操作
  const location = useLocation(); // 当前路径的信息
  const params = useParams(); // url中的参数
  const match = useRouteMatch(); // 路径匹配的数据
  return (
    <>
      <h1>头部区域</h1>
      <Link to={'detail/8462825'}>产品详情</Link>
      <Button.Group >
        <Button onClick={() => history.push('/signIn')}>登录</Button>
        <Button onClick={() => history.push('/register')}>注册</Button>
      </Button.Group>
    </>
  )

}