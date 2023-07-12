import { Button, Form, Input, Select } from 'antd';
import React from 'react';


const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddForm: React.FC = () => {
  const [form] = Form.useForm();

  

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

 

  return (
    <Form 
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="categogy_name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="category_type" label="Type" rules={[{ required: true }]}>
        <Select
          placeholder="Select Category type"
         
          allowClear
        >
          <Option value="Food">Food</Option>
          <Option value="Drink">Drink</Option>
          <Option value="NguyenLieu">NguyenLieu</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
      
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
       
      </Form.Item>
    </Form>
  );
};

export default AddForm;