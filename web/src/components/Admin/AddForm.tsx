import { Button, Form, Input, Select, message } from "antd";
import Item from "antd/es/list/Item";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/apiUrl";

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
let DataDanhMuc = [
    {
        categoryId: 1,
        foodId: 1,
        foodName: "Hambager",
        categogy_name: "FastFood",
        categogy_type: "Food",
    },
    {
        category_id: 2,
        foodId: 2,
        foodName: "Volka",
        categogy_name: "Sake",
        categogy_type: "Drink",
    },
    {
        category_id: 3,
        foodId: 3,
        foodName: "Miso",
        categogy_name: "TinhBot",
        categogy_type: "Food",
    },
    // Add more food items here...
    {
        category_id: 4,
        foodId: 4,
        foodName: "Salad",
        categogy_name: "Vegetable",
        categogy_type: "Food",
    },
    // Add more food items here...
    {
        category_id: 5,
        foodId: 5,
        foodName: "PizzaItaly",
        categogy_name: "Pizza",
        categogy_type: "Food",
    },
];

interface MyComponentProps {
    index: number;
    destroy: () => void;
    foodName: string;
}
const AddForm: React.FC<MyComponentProps> = (props) => {
    const [form] = Form.useForm();
    let [data, setData] = useState<any>(DataDanhMuc);
    console.log(props.foodName);
    console.log(props.index);
    let ft = async () => {
        if (props.index != -1) {
            const response = await fetch(`${API_URL}/category`);
            let js = await response.json();
            //console.log(js[props.index]);
            console.log(js.length);
            if (response.ok) {
                setData(js);
            }
        }
    };

    let updata = async (values) => {
        console.log(`${API_URL}/category/${values.categoryId}/addFood`);
        console.log(props.index);
        const response = await fetch(`${API_URL}/category/${values.categoryId}/addFood`, {
            method: "PATCH",
            body: JSON.stringify({ foodId: props.index }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);
        if (response.status == 400) message.error("Đã có Category!", () => props.destroy());
        else if (response.ok) {
            message.success("Gán Category thành công!", () => props.destroy());
        }
    };
    useEffect(() => {
        ft();
    }, []);
    console.log(data);
    const onFinish = (values: any) => {
        console.log(values);
        updata(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
            <Form.Item name="foodId" label="Food Name" rules={[{ required: false }]}>
                <Input value={props.index} placeholder={props.foodName} readOnly />
            </Form.Item>
            <Form.Item name="categoryId" label="Type" rules={[{ required: true }]}>
                <Select allowClear>
                    {data.map((item) => (
                        <Option value={item.categoryId}>{item.categoryName}</Option>
                    ))}

                    {/* {(() => {
							for(let i = 0; data != null && i < data.length ;i++) {
								 return(<Option value={data[i].categoryId}>{data[i].categoryName}</Option>);
							}
						}
					)()} */}
                </Select>
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            ></Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                {props.destroy != null && (
                    <Button htmlType="button" onClick={props.destroy}>
                        Hủy
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
};

export default AddForm;
