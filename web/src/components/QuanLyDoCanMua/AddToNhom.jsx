import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Table, message, DatePicker, Select } from 'antd';
import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';
const { Search } = Input;
const { RangePicker } = DatePicker;
const { Option } = Select;

const AddToNhom = ({ setIsCreateModalOpen, selectedGroup }) => {
  const [form] = Form.useForm();
  const [foodList, setFoodList] = useState([]);
  const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] =
    useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFoodList, setSelectedFoodList] = useState(null);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGroupOption, setSelectedGroupOption] = useState(null);

  // Hàm thêm food
  const addParticipant = () => {
    setIsAddParticipantFormVisible(!isAddParticipantFormVisible);
  };

  // Hàm chọn số lượng food cần mua
  const handleQuantityChange = (record, value) => {
    record.quantity = value;
  };

  const handleSelectUser = user => {
    const newToBuyListDetails = [
      ...detailData,
      {
        food: {
          foodId: user.foodId,
          name: user.name,
        },
        quantity: user.quantity,
      },
    ];

    setDetailData(newToBuyListDetails);
  };

  // Hàm tìm food
  const handleSearchFoodList = value => {
    setSearchValue(value);

    const filteredList = selectedFoodList.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredFoodList(filteredList);
  };

  // Lấy danh sách đồ ăn có thể thêm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/food`);
        if (response.status === 200) {
          const data = response.data;
          setSelectedFoodList(data);
          setFilteredFoodList(data);
        } else {
          message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
        }
      } catch (error) {
        message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const toBuyListDetails = detailData.map(food => ({
        foodId: food.food.foodId,
        quantity: parseInt(food.quantity),
      }));

      const response = await axios.post(`${API_URL}/to-buy-list`, {
        groupOwnerId: selectedGroupOption,
        date: selectedDate,
        toBuyListDetail: toBuyListDetails,
      });

      if (response.status === 201) {
        message.success('Tạo danh sách thành công!', [1], () => {
          setIsCreateModalOpen(false);
        });
      } else {
        message.error('Tạo danh sách thất bại, vui lòng thử lại sau');
      }
    } catch (error) {
      message.error('Tạo danh sách thất bại, vui lòng thử lại sau');
    }
  };

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
  ];

  return (
    <div>
      <h1>Thêm Nhóm</h1>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Nhóm"
          name="group"
          rules={[{ required: true, message: 'Vui lòng chọn nhóm' }]}>
          <Select
            style={{ width: '100%' }}
            onChange={value => setSelectedGroupOption(value)}
            placeholder="Chọn nhóm">
            {selectedGroup &&
              selectedGroup.map(group => (
                <Option key={group.groupId} value={group.groupId}>
                  {group.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Ngày"
          name="date"
          rules={[{ required: true, message: 'Vui lòng chọn ngày' }]}>
          <DatePicker
            style={{ width: '100%' }}
            format="DD-MM-YYYY"
            onChange={date => setSelectedDate(date)}
          />
        </Form.Item>
        <p>
          <strong>Chi tiết Đơn Hàng:</strong>
        </p>
        <Table
          size="small"
          bordered
          dataSource={detailData}
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
              onSearch={handleSearchFoodList}
              onChange={e => handleSearchFoodList(e.target.value)}
              value={searchValue}
              style={{ marginBottom: 10 }}
            />
            <Table
              size="small"
              bordered
              dataSource={filteredFoodList}
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
                      defaultValue={0}
                      onChange={e =>
                        handleQuantityChange(record, e.target.value)
                      }
                    />
                  ),
                },
                {
                  title: 'Hành động',
                  dataIndex: 'action',
                  key: 'action',
                  render: (_, record) => (
                    <Button
                      type="link"
                      onClick={() => handleSelectUser(record)}>
                      Chọn
                    </Button>
                  ),
                },
              ]}
            />
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddToNhom;
