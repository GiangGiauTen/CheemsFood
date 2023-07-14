import React, { useState } from 'react';
import { Table, Input, Form, Button } from 'antd';
import Detail from './Detail';
import foodList from './foodList';
const { Search } = Input;
const FoodDetail = ({ selectedRowData }) => {
  const [detailData, setDetailData] = useState(
    Detail.find(data => data.toBuyListId === selectedRowData.toBuyListId),
  );
  const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] =
    useState(false);
  const [selectedfoodList, setSelectedfoodList] = useState(foodList);
  // Hàm thêm food
  const addParticipant = () => {
    setIsAddParticipantFormVisible(!isAddParticipantFormVisible);
  };
  // Hàm tìm food
  const handleSearchfoodList = value => {
    const filteredfoodList = foodList.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()),
    );
    setSelectedfoodList(filteredfoodList);
  };

  //Hàm chọn số lượng food cần mua
  const handleQuantityChange = (record, value) => {
    record.quantity = value;
  };
  // Hàm
  const handleDeleteFood = foodId => {
    const updatedToBuyListDetails = detailData.toBuyListDetails.filter(
      detail => detail.food.foodId !== foodId,
    );
    const updatedDetailData = {
      ...detailData,
      toBuyListDetails: updatedToBuyListDetails,
    };
    setDetailData(updatedDetailData);
  };
  const handleSelectUser = user => {
    const newToBuyListDetails = [
      ...detailData.toBuyListDetails,
      {
        food: {
          foodId: user.foodId,
          name: user.name,
        },
        quantity: user.quantity,
      },
    ];

    const updatedDetailData = {
      ...detailData,
      toBuyListDetails: newToBuyListDetails,
    };

    setDetailData(updatedDetailData);
  };
  if (!detailData) {
    return <p>Không tìm thấy dữ liệu chi tiết cho đơn hàng này.</p>;
  }

  const columns = [
    {
      title: 'Tên',
      dataIndex: ['food', 'name'],
      key: 'name',
    },
    {
      title: 'Số Lượng',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Button
          type="link"
          onClick={() => handleDeleteFood(record.food.foodId)}>
          Xác nhận đã mua
        </Button>
      ),
    },
  ];

  return (
    <div>
      <p>
        <strong>Mã Đơn Hàng:</strong> {detailData.toBuyListId}
      </p>
      <p>
        <strong>Ngày:</strong> {detailData.date}
      </p>
      <p>
        <strong>Chi tiết Đơn Hàng:</strong>
      </p>
      <Table
        size="small"
        bordered
        dataSource={detailData.toBuyListDetails}
        pagination={false}
        columns={columns}
      />
      <Button type="primary" onClick={addParticipant}>
        Thêm đồ ăn
      </Button>
      {isAddParticipantFormVisible && (
        <Form.Item>
          <Search
            placeholder="Tìm kiếm đồ ăn"
            onSearch={handleSearchfoodList}
            style={{ marginBottom: 10 }}
          />
          <Table
            size="small"
            bordered
            dataSource={selectedfoodList}
            pagination={{ pageSize: 5 }}
            columns={[
              {
                title: 'Tên',
                dataIndex: 'name',
                key: 'name',
                render: (_, record) => <p>{record.name}</p>,
              },
              {
                title: 'Số Lượng',
                dataIndex: 'quantity',
                key: 'quantity',
                render: (_, record) => (
                  <Input
                    style={{ width: 60 }}
                    type="number"
                    defaultValue={1}
                    onChange={e => handleQuantityChange(record, e.target.value)}
                  />
                ),
              },
              {
                title: 'Hành động',
                dataIndex: 'action',
                key: 'action',
                render: (_, record) => (
                  <Button type="link" onClick={() => handleSelectUser(record)}>
                    Chọn
                  </Button>
                ),
              },
            ]}
          />
          {/* ... */}
        </Form.Item>
      )}
    </div>
  );
};

export default FoodDetail;
