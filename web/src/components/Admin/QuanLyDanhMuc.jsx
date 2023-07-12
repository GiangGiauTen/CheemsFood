import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { LikeTwoTone } from '@ant-design/icons';
import AddForm from './AddForm.tsx';
const QuanLyDanhMuc = () => {
  let [editMode, setEditMode] = useState(-1);
  let danhMuc = [
    {
      categoryId: 1,
      foodId: 1,
      foodName: "Hambager",
      categogy_name: 'FastFood',
      categogy_type: 'Food',
    },
    {
        category_id: 2,
        foodId: 2,
        foodName: "Volka",
        categogy_name: 'Sake',
        categogy_type: 'Drink',
    },
    {
        category_id: 3,
        foodId: 3,
        foodName: "Miso",
        categogy_name: 'TinhBot',
        categogy_type: 'Food',
    },
    // Add more food items here...
    {
        category_id: 4,
        foodId: 4,
        foodName: "Salad",
        categogy_name: 'Vegetable',
        categogy_type: 'Food',
    },
    // Add more food items here...
    {
        category_id: 5,
        foodId: 5,
        foodName: "PizzaItaly",
        categogy_name: 'Pizza',
        categogy_type: 'Food',
    },
  ];
  let [data, setData] = useState(danhMuc);
  danhMuc = data;
  let Delete = (i) => {
    const newData = [...danhMuc];
    newData.splice(i,1);
    setData(newData);
  }
  let Edit = (i) => {
    setEditMode(i);
    setData(data);
  }
  let Huy = () =>{
    setEditMode(-1);
    console.log("oke");
  }
  // Define the columns for the table
  const columns = [
    {
      title: 'ID',
      render: (text, record, index) => index + 1,
    },    
    {
      title: 'FoodName',
      dataIndex: 'foodName',
      key: 'foodName',
    },   
    {
      title: 'Categogy Name',
      dataIndex: 'categogy_name',
      key: 'categogy_name',
    },
    {
      title: 'Categogy_type',
      dataIndex: 'categogy_type',
      key: 'categogy_type',
    },
    
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => (
        <Space size="middle">
          
          <a onClick={() => Edit(index)}>Edit</a>
          <a onClick={() => Delete(index)}>Delete</a>
        </Space>
      ),
    },
  ];
  
  return (
    <div>
      {(editMode != -1) && <AddForm index = {editMode} destroy = {Huy}></AddForm>}
      {(editMode == -1) && ( <div>
      <h1>Category List</h1>
      <Table columns={columns} dataSource={danhMuc}/>
      </div>)}
    </div>
  );
};

export default QuanLyDanhMuc;