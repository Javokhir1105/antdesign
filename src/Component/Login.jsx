import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('access_token')){
      Navigate('/addpage')
    }
  })
  const onFinish = (values) => {
    axios({
      url: 'https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin',
      method: 'POST',
      data: values,
    }).then(res => {
      if (res.data.success) {
        localStorage.setItem('access_token', res.data.data.tokens.accessToken)
        message.success('Muvafaqiyatli kirildi')
        navigate('/addpage')
      }
    }).catch(err => {
      message.error("Login yoki parol noto'g'ri")
    })
  }
return (
  <div className='loginhon'>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      layout='vertical'
      wrapperCol={{
        span: 16,
      }}
      style={{
        width: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"

    >
      <Form.Item
        label="Telefon raqam"
        name="phone_number"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
)
};
