
// eslint-diabled-next-line
// import { useHistory, useLocation, useParams, useRouteMatch, Link } from 'react-router-dom'
import { useHistory, Link } from 'react-router-dom'
import { Layout, Typography, Button, Input } from 'antd'
import { useState, useEffect } from 'react'
import jwt_decode, { JwtPayload as defaultJwtPayload } from 'jwt-decode'
import { useSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../redux/user/slice'
// import styles from './header.moudle.css'

interface JwtPayload extends defaultJwtPayload {
  username: string | null
}


export const Header: React.FC = (props) => {
  const history = useHistory(); // 导航操作
  // const location = useLocation(); // 当前路径的信息
  // const params = useParams(); // url中的参数
  // const match = useRouteMatch(); // 路径匹配的数据

  const dispatch = useDispatch();
  const jwt = useSelector(s => s.user.token);
  // eslint-disable-next-line 
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (jwt) {
      // eslint-disable-next-line 
      const token = jwt_decode<JwtPayload>(jwt)
      // setUsername(token.username)
    }


  }, [jwt])

  // eslint-disable-next-line 
  const onLogout = () => {
    dispatch(userSlice.actions.logOut);
    history.push('/');
    window.location.reload(false);
  }

  return (
    <>
      <Layout.Header>
        <Typography.Title level={3}>React Bussiness</Typography.Title>
        <Input.Search placeholder="请输入搜索关键字" />
        <Link to={'detail/8462825'}>产品详情</Link>
        <Button.Group >
          <Button onClick={() => history.push('/signIn')}>登录</Button>
          <Button onClick={() => history.push('/register')}>注册</Button>
        </Button.Group>
      </Layout.Header>
    </>
  )

}