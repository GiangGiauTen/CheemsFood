import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utils/apiUrl'
const LoginForm = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            console.log(values)
            await axios
                .post(`${API_URL}/auth/login`, {
                    username: values.username,
                    password: values.password,
                }, {
                    'Content-Type': 'text/plain',
                    "Access-Control-Allow-Origin": null
                })
                .then((response) => {
                    if (response.status == 201) {
                        message.success('Đăng nhập thành công!', [2], () => {
                            localStorage.setItem('userId', response.data.userId)
                            localStorage.setItem('role', response.data.role)
                            localStorage.setItem('name', response.data.name)
                            localStorage.setItem('username', response.data.username)
                            console.log(response)
                            navigate('/')
                        })
                    } else message.error('Đăng nhập không thành công!', [2], () => { })
                })
        } catch (error) {
            message.error('Đăng nhập không thành công!', [2], () => { })
        }
    }

    return (
        <Form
            form={form}
            name='login'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ maxWidth: '300px', margin: '0 auto' }}>
            <Form.Item name='username' rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}>
                <Input prefix={<UserOutlined />} placeholder='Tên đăng nhập' />
            </Form.Item>
            <Form.Item name='password' rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                <Input.Password prefix={<LockOutlined />} placeholder='Mật khẩu' />
            </Form.Item>
            <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Ghi nhớ</Checkbox>
                </Form.Item>
                <a href='/'>Quên mật khẩu</a>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
                    Đăng nhập
                </Button>
                Hoặc <Link to='/register'>Đăng ký ngay</Link>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
