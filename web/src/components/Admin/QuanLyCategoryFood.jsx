import React, { useState, useEffect } from 'react';
import { Table, Space } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
import AddForm from './AddForm.tsx';
const QuanLyCategoryFood = () => {
  let [editMode, setEditMode] = useState(-1);
  let [data, setData] = useState(null);
  let [foodName, setName] = useState("");
  let ft = async() => {
    const response = await fetch('http://localhost:4001/food');
    let js = await response.json();
    if(response.ok){
      console.log(js);
      setData(js)
    }
  }
  useEffect(() => {
    ft();
  },[]
  )
  
  // let danhMuc = [
  //   {
  //     categoryId: 1,
  //     foodId: 1,
  //     foodName: "Hambager",
  //     categogy_name: 'FastFood',
  //     categogy_type: 'Food',
  //   },
  //   {
  //       category_id: 2,
  //       foodId: 2,
  //       foodName: "Volka",
  //       categogy_name: 'Sake',
  //       categogy_type: 'Drink',
  //   },
  //   {
  //       category_id: 3,
  //       foodId: 3,
  //       foodName: "Miso",
  //       categogy_name: 'TinhBot',
  //       categogy_type: 'Food',
  //   },
  //   // Add more food items here...
  //   {
  //       category_id: 4,
  //       foodId: 4,
  //       foodName: "Salad",
  //       categogy_name: 'Vegetable',
  //       categogy_type: 'Food',
  //   },
  //   // Add more food items here...
  //   {
  //       category_id: 5,
  //       foodId: 5,
  //       foodName: "PizzaItaly",
  //       categogy_name: 'Pizza',
  //       categogy_type: 'Food',
  //   },
  // ];
 
  let danhMuc = data;
  let Delete = (i) => {
    const newData = [...danhMuc];
    newData.splice(i,1);
    setData(newData);
  }
  let Edit = (i, foodName) => {
    console.log(i)
    setEditMode(i);
    setName(foodName);
    setData(data);
    
  }
  let Huy = () =>{
    ft();
		console.log(data);
		setEditMode(-1);
		console.log('oke')
  }
  // Define the columns for the table
  const columns = [
    {
      title: 'ID',
      render: (text, record, index) => index + 1,
    },    
     {
      title: 'Food ID',
      dataIndex: 'foodId',
      key: 'foodId',
     },
    {
      title: 'FoodName',
      dataIndex: 'name',
      key: 'name',
    },   
    {
      
      title: 'Categogy Name',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (category !== null)? category.categoryName:"" ,
    },
    {
      title: 'Categogy_type',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (category !== null)? category.categoryType:"",
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          
          <a onClick={() => Edit(record.foodId, record.name)}>Edit</a>
          <a onClick={() => Delete(index)}>Delete</a>
        </Space>
      ),
    },
  ];
  
  return (
    <div>
      {(editMode != -1) && <AddForm foodName={foodName} index = {editMode} destroy = {Huy}></AddForm>}
      {(editMode == -1) && ( <div>
      <h1>Category List</h1>
      <Table columns={columns} dataSource={data}/>
      </div>)}
    </div>
  );
};

export default QuanLyCategoryFood;