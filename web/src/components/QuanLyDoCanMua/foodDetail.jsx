import React, { useState, useEffect } from 'react';
import { Table, Input, Form, Button, message, Image } from 'antd';

import axios from 'axios';
// import foodList from './foodList';
import { API_URL } from '../../utils/apiUrl';
const { Search } = Input;
const FoodDetail = ({ selectedRowData }) => {
  const [detailData, setDetailData] = useState(null);
  const [selectedfoodList, setSelectedfoodList] = useState(null);
  const [filteredfoodList, setFilteredfoodList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //Lấy chi tiết đồ ăn
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${API_URL}/to-buy-list/${selectedRowData.toBuyListId}`)
          .then(res => {
            if (res.status == 200) setDetailData(res.data);
            else message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
          });
      } catch (error) {
        message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
      }
    };
    fetchData();
  }, [selectedRowData.toBuyListId]);
  //Lấy danh sách đồ ăn có thể thêm
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(`${API_URL}/food`).then(res => {
          if (res.status == 200) {
            const data = res.data;

            setSelectedfoodList(data);
            setFilteredfoodList(data);
          } else message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
        });
      } catch (error) {
        message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
      }
    };
    fetchData();
  }, []);

  const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] =
    useState(false);

  // Hàm thêm food
  const addParticipant = () => {
    setIsAddParticipantFormVisible(!isAddParticipantFormVisible);
  };
  // Hàm tìm food
  const handleSearchfoodList = value => {
    setSearchValue(value);

    const filteredList = selectedfoodList.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredfoodList(filteredList);
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
          imageUrl: user.imageUrl,
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
      title: 'Ảnh',
      dataIndex: ['food', 'imageUrl'],
      key: 'imageUrl',
      render: imageUrl => <img width={150} src={imageUrl} />,
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
        <strong>Ngày:</strong>{' '}
        {new Date(detailData.date).toLocaleDateString('vi-vn')}
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
            onChange={e => handleSearchfoodList(e.target.value)}
            value={searchValue}
            style={{ marginBottom: 10 }}
          />
          <Table
            size="small"
            bordered
            dataSource={filteredfoodList}
            pagination={{ pageSize: 5 }}
            columns={[
              {
                title: 'Tên',
                dataIndex: 'name',
                key: 'name',
                render: (_, record) => <p>{record.name}</p>,
              },
              {
                title: 'Ảnh',
                dataIndex: 'imageUrl',
                key: 'imageUrl',
                render: (_, record) => (
                  <img width={150} src={record.imageUrl} />
                ),
              },
              {
                title: 'Số Lượng',
                dataIndex: 'quantity',
                key: 'quantity',
                render: (_, record) => (
                  <Input
                    style={{ width: 60 }}
                    type="number"
                    defaultValue={0}
                    min={0}
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
        </Form.Item>
      )}
    </div>
  );
};

export default FoodDetail;
