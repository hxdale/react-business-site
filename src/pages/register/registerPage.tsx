import { Row, Col } from 'antd'
import { RegisterForm } from './registerForm'
export const RegisterPage = () => {
  return (
    <Row>
      <Col span={12}>
        <RegisterForm></RegisterForm>

      </Col>
    </Row>
  )
};