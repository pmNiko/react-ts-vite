import * as React from "react"
import { Form, Input, Button, Checkbox, FormInstance } from "antd"
import { useCustomForm } from "../hooks/useCustomForm"
import { createRef } from "react"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

interface FormData {
  email: string
  password: string
}

/** Componente de Login */
const CustomForm = () => {
  const formRef = createRef<FormInstance>()
  const { email, password, handlerChange, resetCustomForm } =
    useCustomForm<FormData>({
      email: "email@email.com",
      password: "your password",
    })

  const onFinish = (values: any) => {
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  const onReset = () => {
    formRef.current!.resetFields()
    resetCustomForm()
  }

  return (
    <div style={{ margin: "50px", width: "80%", textAlign: "center" }}>
      <Form
        {...layout}
        ref={formRef}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            name="email"
            onChange={handlerChange}
            value={email}
            placeholder={email}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            onChange={handlerChange}
            placeholder={password}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="dashed" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      <pre>
        {email} - {password}
      </pre>
    </div>
  )
}

export default CustomForm
