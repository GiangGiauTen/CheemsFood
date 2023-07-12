import React, { useState } from 'react';
import { Table, Input, Modal, Form, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const Nhom = () => {
  const [searchText, setSearchText] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const dataNhom = [
    {
      groupId: 'ABC123',
      name: 'Ngot Band',
      adminName: 'Giang',
      nguoiThamGia: [
        {
          userId: '1',
          username: 'Trước khi em tồn tại',
          name: 'Ngot',
          password: '123444',
          role: 'admin',
        },
        {
          userId: '2',
          username: 'Sau khi em đi qua',
          name: 'Bun',
          password: 'abc123',
          role: 'user',
        },
        {
          userId: '3',
          username: 'Anh chỉ là cơn gió',
          name: 'Mi',
          password: 'xyz789',
          role: 'user',
        },
      ],
      FoodsData: [
        {
          id: 1,
          name: 'Cheese',
          description: 'Type of cheese used in various dishes',
          storage_date: '2023-06-28',
          outdate: '2023-07-05',
          quantity: 5,
        },
        {
          id: 2,
          name: 'Tomato Sauce',
          description: 'Sauce made from tomatoes, used in pasta and pizza',
          storage_date: '2023-06-30',
          outdate: '2023-07-07',
          quantity: 3,
        },
        {
          id: 3,
          name: 'Pepperoni',
          description: 'Spicy Italian sausage used as a pizza topping',
          storage_date: '2023-07-01',
          outdate: '2023-07-03',
          quantity: 2,
        },
      ],
    },
    {
      groupId: 'DEF456',
      name: 'Bun Club',
      adminName: 'Hoa',
      nguoiThamGia: [
        {
          userId: '1',
          username: 'Trước khi em tồn tại',
          name: 'Ngot',
          password: '123444',
          role: 'admin',
        },
        {
          userId: '2',
          username: 'Sau khi em đi qua',
          name: 'Bun',
          password: 'abc123',
          role: 'user',
        },
        {
          userId: '3',
          username: 'Anh chỉ là cơn gió',
          name: 'Mi',
          password: 'xyz789',
          role: 'user',
        },
      ],
      FoodsData: [
        {
          id: 1,
          name: 'Cheese',
          description: 'Type of cheese used in various dishes',
          storage_date: '2023-06-28',
          outdate: '2023-07-05',
          quantity: 5,
        },
        {
          id: 2,
          name: 'Tomato Sauce',
          description: 'Sauce made from tomatoes, used in pasta and pizza',
          storage_date: '2023-06-30',
          outdate: '2023-07-07',
          quantity: 3,
        },
        {
          id: 3,
          name: 'Pepperoni',
          description: 'Spicy Italian sausage used as a pizza topping',
          storage_date: '2023-07-01',
          outdate: '2023-07-03',
          quantity: 2,
        },
      ],
    },
    {
      groupId: 'GHI789',
      name: 'Mi Orchestra',
      adminName: 'Anh',
      nguoiThamGia: [
        {
          userId: '1',
          username: 'Trước khi em tồn tại',
          name: 'Ngot',
          password: '123444',
          role: 'admin',
        },
        {
          userId: '2',
          username: 'Sau khi em đi qua',
          name: 'Bun',
          password: 'abc123',
          role: 'user',
        },
        {
          userId: '3',
          username: 'Anh chỉ là cơn gió',
          name: 'Mi',
          password: 'xyz789',
          role: 'user',
        },
      ],
      FoodsData: [
        {
          id: 1,
          name: 'Cheese',
          description: 'Type of cheese used in various dishes',
          storage_date: '2023-06-28',
          outdate: '2023-07-05',
          quantity: 5,
        },
        {
          id: 2,
          name: 'Tomato Sauce',
          description: 'Sauce made from tomatoes, used in pasta and pizza',
          storage_date: '2023-06-30',
          outdate: '2023-07-07',
          quantity: 3,
        },
        {
          id: 3,
          name: 'Pepperoni',
          description: 'Spicy Italian sausage used as a pizza topping',
          storage_date: '2023-07-01',
          outdate: '2023-07-03',
          quantity: 2,
        },
      ],
    },
    {
      groupId: 'JKL012',
      name: 'Xinh Ensemble',
      adminName: 'Lan',
      nguoiThamGia: [
        {
          userId: '1',
          username: 'Trước khi em tồn tại',
          name: 'Ngot',
          password: '123444',
          role: 'admin',
        },
        {
          userId: '2',
          username: 'Sau khi em đi qua',
          name: 'Bun',
          password: 'abc123',
          role: 'user',
        },
        {
          userId: '3',
          username: 'Anh chỉ là cơn gió',
          name: 'Mi',
          password: 'xyz789',
          role: 'user',
        },
      ],
      FoodsData: [
        {
          id: 1,
          name: 'Cheese',
          description: 'Type of cheese used in various dishes',
          storage_date: '2023-06-28',
          outdate: '2023-07-05',
          quantity: 5,
        },
        {
          id: 2,
          name: 'Tomato Sauce',
          description: 'Sauce made from tomatoes, used in pasta and pizza',
          storage_date: '2023-06-30',
          outdate: '2023-07-07',
          quantity: 3,
        },
        {
          id: 3,
          name: 'Pepperoni',
          description: 'Spicy Italian sausage used as a pizza topping',
          storage_date: '2023-07-01',
          outdate: '2023-07-03',
          quantity: 2,
        },
      ],
    },
    {
      groupId: 'MNO345',
      name: 'Hoa Society',
      adminName: 'Trang',
      nguoiThamGia: [
        {
          userId: '1',
          username: 'Trước khi em tồn tại',
          name: 'Ngot',
          password: '123444',
          role: 'admin',
        },
        {
          userId: '2',
          username: 'Sau khi em đi qua',
          name: 'Bun',
          password: 'abc123',
          role: 'user',
        },
        {
          userId: '3',
          username: 'Anh chỉ là cơn gió',
          name: 'Mi',
          password: 'xyz789',
          role: 'user',
        },
      ],
      FoodsData: [
        {
          id: 1,
          name: 'Cheese',
          description: 'Type of cheese used in various dishes',
          storage_date: '2023-06-28',
          outdate: '2023-07-05',
          quantity: 5,
        },
        {
          id: 2,
          name: 'Tomato Sauce',
          description: 'Sauce made from tomatoes, used in pasta and pizza',
          storage_date: '2023-06-30',
          outdate: '2023-07-07',
          quantity: 3,
        },
        {
          id: 3,
          name: 'Pepperoni',
          description: 'Spicy Italian sausage used as a pizza topping',
          storage_date: '2023-07-01',
          outdate: '2023-07-03',
          quantity: 2,
        },
      ],
    },
  ];
  const [data, setData] = useState(dataNhom);
  const handleSearch = value => {
    setSearchText(value);
  };

  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible2(true);
  };

  const handleEdit = record => {
    setSelectedRowData(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };
  const handleDelete = index => {
    const updatedParticipants = [...selectedRowData.nguoiThamGia];
    updatedParticipants.splice(index, 1);
    const updatedData = data.map(item => {
      if (item.groupId === selectedRowData.groupId) {
        return {
          ...item,
          nguoiThamGia: updatedParticipants,
        };
      }
      return item;
    });
    setData(updatedData);
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      nguoiThamGia: updatedParticipants,
    }));
  };
  const handleFormSubmit = values => {
    // Thực hiện cập nhật dữ liệu trong state `data` với giá trị mới từ `values`
    const updatedData = data.map(record => {
      if (record.groupId === selectedRowData.groupId) {
        return {
          ...record,
          name: values.name,
          adminName: values.adminName,
          nguoiThamGia: values.nguoiThamGia,
        };
      }
      return record;
    });
    setData(updatedData);
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: 'Mã Nhóm',
      dataIndex: 'groupId',
    },
    {
      title: 'Tên nhóm',
      dataIndex: 'name',
    },
    {
      title: 'Người tạo',
      dataIndex: 'adminName',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href="#1" onClick={() => handleRowClick(record)}>
            View
          </a>
          <a href="#2" onClick={() => handleEdit(record)}>
            Edit
          </a>
        </Space>
      ),
    },
  ];

  const filteredData = searchText
    ? data.filter(
        record =>
          columns &&
          Array.isArray(columns) &&
          columns.some(
            column =>
              record[column.dataIndex] &&
              record[column.dataIndex]
                .toString()
                .toLowerCase()
                .includes(searchText.toLowerCase()),
          ),
      )
    : data;

  return (
    <div>
      <Search
        placeholder="Tìm kiếm"
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={filteredData} />

      <Modal
        title="Thông tin Nhóm"
        visible={isModalVisible2}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Mã nhóm:</strong> {selectedRowData.groupId}
            </p>
            <p>
              <strong>Tên nhóm:</strong> {selectedRowData.name}
            </p>
            <p>
              <strong>Người Tạo:</strong> {selectedRowData.adminName}
            </p>
            <p>
              <strong>Người tham gia:</strong>
            </p>
            <Table
              size="small"
              bordered
              dataSource={selectedRowData.nguoiThamGia}
              pagination={false}
              columns={[
                {
                  title: 'Tên',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Vai Trò',
                  dataIndex: 'role',
                  key: 'role',
                },
              ]}
            />
          </div>
        )}
      </Modal>

      <Modal
        title="Thông tin cuộc họp"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <Form onFinish={handleFormSubmit} initialValues={selectedRowData}>
            <Form.Item label="Mã nhóm">
              <span>{selectedRowData.groupId}</span>
            </Form.Item>
            <Form.Item
              label="Tên nhóm"
              name="name"
              rules={[{ required: true, message: 'Vui lòng nhập tên nhóm!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Người tạo"
              name="adminName"
              rules={[
                { required: true, message: 'Vui lòng nhập tên người tạo!' },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Người tham gia"
              name="nguoiThamGia"
              rules={[
                { required: true, message: 'Vui lòng nhập người tham gia!' },
              ]}>
              <Table
                size="small"
                bordered
                dataSource={selectedRowData.nguoiThamGia}
                pagination={false}
                columns={[
                  {
                    title: 'Tên',
                    dataIndex: 'name',
                    key: 'name',
                  },
                  {
                    title: 'Vai Trò',
                    dataIndex: 'role',
                    key: 'role',
                  },
                  {
                    title: 'Thao tác',
                    key: 'action',
                    render: (_, record, index) => (
                      <a href="#4" onClick={() => handleDelete(index)}>
                        Xóa
                      </a>
                    ),
                  },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Thêm thành viên</Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default Nhom;
