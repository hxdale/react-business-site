// @ts-ignore
// eslint-disable-next-line 
import axios from 'axios'
import { signIn } from '../../redux/user/slice';
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/hooks'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export const RegisterForm = () => {
  // eslint-disable-next-line
  const loading = useSelector(s => s.user.loading);
  const jwt = useSelector(s => s.user.token);
  // eslint-disable-next-line
  const error = useSelector(s => s.user.error);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (jwt !== null) history.push('/')
  }, [jwt, history])  // eslint-disable-next-line react-hooks/exhaustive-deps

  const onFinish = async (values: any) => {
    console.log('Success:', values);

    dispatch(signIn({
      email: values.username,
      password: values.password
    }))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirm"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your confirm password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('密码确认不一致！')
            }
          })
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};