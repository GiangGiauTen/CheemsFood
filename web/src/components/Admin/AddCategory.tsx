import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { useState, useEffect } from 'react'

const { Option } = Select

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
}
let DataDanhMuc = [
	{
		categoryId: 1,
		foodId: 1,
		foodName: 'Hambager',
		categogy_name: 'FastFood',
		categogy_type: 'Food',
	},
	{
		category_id: 2,
		foodId: 2,
		foodName: 'Volka',
		categogy_name: 'Sake',
		categogy_type: 'Drink',
	},
	{
		category_id: 3,
		foodId: 3,
		foodName: 'Miso',
		categogy_name: 'TinhBot',
		categogy_type: 'Food',
	},
	// Add more food items here...
	{
		category_id: 4,
		foodId: 4,
		foodName: 'Salad',
		categogy_name: 'Vegetable',
		categogy_type: 'Food',
	},
	// Add more food items here...
	{
		category_id: 5,
		foodId: 5,
		foodName: 'PizzaItaly',
		categogy_name: 'Pizza',
		categogy_type: 'Food',
	},
]
interface MyComponentProps {
	index: number
	destroy: () => void
}
const AddCategory: React.FC<MyComponentProps> = (props) => {
	const [form] = Form.useForm();
	let [data,setData] = useState<any>(null);
	console.log(props.index);
	let ft = async() => {
		if(props.index != -1){
			const response = await fetch('http://localhost:4001/category');
			let js = await response.json();
			//console.log(js[props.index]);
			if(response.ok){
				setData(js[props.index]);
			}
		}
		
	  }
	  console.log(data);
	useEffect(() => {
		ft();
	  },[]
	  )
	const onFinish = (values: any) => {
		console.log(values);
		Update(values);
		
	}

	const onReset = () => {
		form.resetFields()
	}
	const Update = async (values) => {
		console.log(values);
		if(props.index != -1){
			const response = await fetch('http://localhost:4001/category/'+categogy_id,{
				method: 'PATCH',
				body: JSON.stringify({
					name: values.CategoryName,
					type: values.CategoryType,
				})
			});
			const response2 = await fetch('http://localhost:4001/category');
			
			let js = response2.json();
			console.log(js);
			console.log(categogy_id);
			console.log(js[props.index]);
			console.log(response.status);
		}
	}
	const categogy_name = (data == null)? "": data.categoryName ; 
	const categogy_type = (data == null)? "": data.categoryType;
	const categogy_id =  (data == null)? -1: data.categoryId;
	return (
		<Form {...layout} form={form} name='control-hooks' onFinish={onFinish} style={{ maxWidth: 600 }}>
			<Form.Item name='CategoryName' label='Category Name' rules={[{ required: false }]}>
				<Input type='text' placeholder={categogy_name} 				
				/>
			</Form.Item>
			<Form.Item name='CategoryType' label='Type' rules={[{ required: true }]}>
			<Select
				
					allowClear>
					<Option value='Thực phẩm tươi'>Thực phẩm tươi</Option>
					<Option value='Rau-Củ-Quả'>Rau-Củ-Quả</Option>
					<Option value='Thực phẩm ăn liền'>Thực phẩm ăn liền</Option>
					<Option value='Sữa'>Sữa</Option>
					<Option value='Gia vị'>Gia vị</Option>
					<Option value='Thực phẩm khô'>Thực phẩm khô</Option>
					<Option value='Đồ hộp'>Đồ hộp</Option>
					<Option value='Bột'>Bột</Option>
					<Option value='Đồ uống'>Đồ uống</Option>
					<Option value='Trứng'>Trứng</Option>
					<Option value='Chả giò'>Chả giò</Option>
					<Option value='Khác'>Khác</Option>
				</Select>
			</Form.Item>
			<Form.Item
				noStyle
				shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}></Form.Item>
			<Form.Item {...tailLayout}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
				{props.destroy != null && (
					<Button htmlType='button' onClick={props.destroy}>
						Hủy
					</Button>
				)}
			</Form.Item>
		</Form>
	)
}

export default AddCategory
