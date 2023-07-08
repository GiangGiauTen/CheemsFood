import React, { useEffect, useState } from 'react';
import { Table, Input, Modal, Form, DatePicker, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import axios from 'axios';
import moment from 'moment';
// import { Link } from 'react-router-dom';
const { Search } = Input;
const Nhom = () => {
  const [searchText, setSearchText] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] =
    useState(false);
  // const [users, setUsers] = useState([]);
  // const [data, setData] = useState([]);

  const [editMeeting, setEditMeeting] = useState({});
  // Hàm cập nhật giá trị sửa
  const updateEditValue = (field, value) => {
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      [field]: value,
    }));
  };
  // Hàm lưu giá trị sửa
  const saveEditValue = () => {
    const updatedData = data.map(meeting => {
      if (meeting.maCuocHop === selectedRowData.maCuocHop) {
        return selectedRowData;
      }
      return meeting;
    });
    // setData(updatedData);
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setIsModalVisible3(false);
  };
  // Hàm xóa cuộc họp
  const handleDelete = async maCuocHop => {
    // try {
    //   // Gọi API xóa cuộc họp với mã cuộc họp (meetingId)
    //   const response = await axios.delete(
    //     `http://localhost:4001/api/meeting/${maCuocHop}`,
    //   );
    //   if (response.status === 200) {
    //     // Nếu API xóa thành công, cập nhật lại state của data (danh sách cuộc họp)
    //     setData(prevData =>
    //       prevData.filter(meeting => meeting.maCuocHop !== maCuocHop),
    //     );
    //     setIsModalVisible(false);
    //     setIsModalVisible2(false);
    //   } else {
    //     console.error('Error deleting meeting', response.data.error);
    //     // Xử lý hiển thị thông báo lỗi nếu cần thiết
    //   }
    // } catch (error) {
    //   console.error('Error deleting meeting', error);
    //   // Xử lý hiển thị thông báo lỗi nếu cần thiết
    // }
  };

  const handleSelectUser = user => {
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      nguoiThamGia: [
        ...prevMeeting.nguoiThamGia,
        {
          name: user.name,
          role: user.role,
        },
      ],
    }));
  };
  const handleSelectFood = food => {
    setSelectedRowData(prevData => ({
      ...prevData,
      FoodsData: [
        ...prevData.FoodsData,
        {
          id: food.id,
          name: food.name,
          description: food.description,
          outdated: food.outdated,
          quantity: food.quantity,
          storage_date: food.storage_date,
        },
      ],
    }));
  };
  // Hàm thêm người tham gia
  const addParticipant = () => {
    setIsAddParticipantFormVisible(!isAddParticipantFormVisible);
  };

  // Hàm xóa người tham gia
  const removeParticipant = index => {
    const updatedParticipants = [...selectedRowData.nguoiThamGia];
    updatedParticipants.splice(index, 1);
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      nguoiThamGia: updatedParticipants,
    }));
  };
  // Hàm xóa đồ ăn
  const removeFood = index => {
    const updatedParticipants = [...selectedRowData.FoodsData];
    updatedParticipants.splice(index, 1);
    setSelectedRowData(prevFood => ({
      ...prevFood,
      FoodsData: updatedParticipants,
    }));
  };
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4001/api/resident/');
  //       if (response.status === 200) {
  //         const userData = response.data;
  //         setUsers(userData);
  //         setSelectedUsers(userData); // Cập nhật selectedUsers sau khi có dữ liệu người dùng
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  const users = [
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
    {
      userId: '4',
      username: 'Nắng chưa từng tắt',
      name: 'Xinh',
      password: 'qwe456',
      role: 'user',
    },
    {
      userId: '5',
      username: 'Để đời còn mơ',
      name: 'Hoa',
      password: '789def',
      role: 'admin',
    },
  ];
  const CateGoryData = [
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
    // Add more ingredients here...
    {
      id: 4,
      name: 'Mushrooms',
      description: 'Edible fungi used in various dishes',
      storage_date: '2023-07-01',
      outdate: '2023-07-06',
      quantity: 4,
    },
    // Add more ingredients here...
    {
      id: 5,
      name: 'Onions',
      description: 'Commonly used vegetable in cooking',
      storage_date: '2023-07-02',
      outdate: '2023-07-04',
      quantity: 3,
    },
    {
      id: 6,
      name: 'Chicken',
      description: 'Poultry meat used in various recipes',
      storage_date: '2023-07-03',
      outdate: '2023-07-09',
      quantity: 6,
    },
    {
      id: 7,
      name: 'Garlic',
      description: 'Aromatic bulb used as a flavor enhancer',
      storage_date: '2023-07-04',
      outdate: '2023-07-10',
      quantity: 8,
    },
    {
      id: 8,
      name: 'Olive Oil',
      description: 'Healthy oil extracted from olives',
      storage_date: '2023-07-05',
      outdate: '2023-07-12',
      quantity: 2,
    },
    {
      id: 9,
      name: 'Salt',
      description: 'Common seasoning used in cooking',
      storage_date: '2023-07-06',
      outdate: '2023-07-08',
      quantity: 10,
    },
    {
      id: 10,
      name: 'Cumin',
      description: 'Spice with a warm, earthy flavor',
      storage_date: '2023-07-07',
      outdate: '2023-07-13',
      quantity: 3,
    },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4001/api/meeting/');
  //       if (response.status === 200) {
  //         const resData = response.data;
  //         setData(resData);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const data = [
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
  const handleSearch = value => {
    setSearchText(value);
  };
  const handleSearchUsers = value => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase()),
    );
    setSelectedUsers(filteredUsers);
  };
  //Hàm xem thông tin nhóm
  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible2(true);
  };
  //hàm Edit thông tin nhóm
  const handleEdit = record => {
    setSelectedRowData(record);

    setIsModalVisible(true);
  };
  //hàm xem danh sách đồ ăn cần mua
  const handleViewFood = record => {
    setSelectedRowData(record);

    setIsModalVisible3(true);
  };
  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
    setIsModalVisible3(false);
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
          <a href="#3" onClick={() => handleViewFood(record)}>
            Xem Đồ Cần Mua
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
      <Table
        columns={columns}
        dataSource={filteredData}
        // onRow={record => ({
        //   // onClick: () => {
        //   //   handleRowClick(record);
        //   //   // console.log(record);
        //   },
        // })}
      />
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
              dataSource={selectedRowData['nguoiThamGia']}
              pagination={false}
              columns={[
                {
                  title: 'Tên',
                  dataIndex: 'name',
                  key: 'name',
                  render: (_, record) => <p>{record.name}</p>,
                },

                {
                  title: 'Vai Trò',
                  dataIndex: 'role',
                  key: 'role',
                  render: (_, record) => <p>{record.role}</p>,
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
          <div>
            <Form.Item>
              <p>
                <strong>Danh Sách Đồ Cần Mua:</strong>
              </p>
              <Table
                size="small"
                bordered
                dataSource={selectedRowData['nguoiThamGia']}
                pagination={true}
                columns={[
                  {
                    title: 'Tên',
                    dataIndex: 'name',
                    key: 'name',
                    render: (_, record) => <p>{record.name}</p>,
                  },

                  {
                    title: 'Vai Trò',
                    dataIndex: 'role',
                    key: 'eole',
                    render: (_, record) => <p>{record.role}</p>,
                  },
                  {
                    title: 'Hành động',
                    dataIndex: 'action',
                    key: 'action',
                    render: (_, record, index) => (
                      <Button
                        type="link"
                        onClick={() => removeParticipant(index)}>
                        Xóa
                      </Button>
                    ),
                  },
                ]}
              />
              <Button
                type="dashed"
                onClick={addParticipant}
                style={{ marginTop: '10px' }}>
                Thêm người tham gia
              </Button>
            </Form.Item>
            {isAddParticipantFormVisible && (
              <Form.Item>
                <p>
                  <strong>Thêm người người tham gia:</strong>
                </p>
                <Search
                  placeholder="Tìm kiếm người dùng"
                  onSearch={handleSearchUsers}
                  style={{ marginBottom: 10 }}
                />
                <Table
                  size="small"
                  bordered
                  dataSource={selectedUsers}
                  pagination={{ pageSize: 5 }}
                  columns={[
                    {
                      title: 'Tên',
                      dataIndex: 'name',
                      key: 'name',
                      render: (_, record) => <p>{record.name}</p>,
                    },

                    {
                      title: 'Vai Trò',
                      dataIndex: 'role',
                      key: 'eole',
                      render: (_, record) => <p>{record.role}</p>,
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
                {/* ... */}
              </Form.Item>
            )}
          </div>
        )}

        <div>
          <Button onClick={saveEditValue} style={{ marginTop: '10px' }}>
            OK
          </Button>
          <Button
            onClick={() => handleDelete(selectedRowData.maCuocHop)}
            style={{ marginTop: '10px' }}>
            Xóa Cuộc Họp
          </Button>
        </div>
      </Modal>
      <Modal
        title="Đồ ăn cần mua"
        visible={isModalVisible3}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Mã nhóm:</strong> {selectedRowData.name}
            </p>
            <Form.Item>
              <p>
                <strong>Đồ ăn cần mua:</strong>
              </p>
              <Table
                size="small"
                bordered
                dataSource={selectedRowData['FoodsData']}
                pagination={true}
                columns={[
                  {
                    title: 'Tên',
                    dataIndex: 'name',
                    key: 'name',
                    render: (_, record) => <p>{record.name}</p>,
                  },

                  {
                    title: 'Decription',
                    dataIndex: 'description',
                    key: 'description',
                    render: (_, record) => <p>{record.description}</p>,
                  },
                  {
                    title: 'Hành động',
                    dataIndex: 'action',
                    key: 'action',
                    render: (_, record, index) => (
                      <Button type="link" onClick={() => removeFood(index)}>
                        Xác nhận đã mua
                      </Button>
                    ),
                  },
                ]}
              />
              <Button
                type="dashed"
                onClick={addParticipant}
                style={{ marginTop: '10px' }}>
                Thêm Đồ ăn cần mua
              </Button>
            </Form.Item>
            {isAddParticipantFormVisible && (
              <Form.Item>
                <p>
                  <strong>Thêm Đồ ăn cần mua:</strong>
                </p>
                <Search
                  placeholder="Tìm kiếm đồ ăn"
                  onSearch={handleSearchUsers}
                  style={{ marginBottom: 10 }}
                />
                <Table
                  size="small"
                  bordered
                  dataSource={CateGoryData}
                  pagination={{ pageSize: 5 }}
                  columns={[
                    {
                      title: 'Tên',
                      dataIndex: 'name',
                      key: 'name',
                      render: (_, record) => <p>{record.name}</p>,
                    },

                    {
                      title: 'Decription',
                      dataIndex: 'description',
                      key: 'description',
                      render: (_, record) => <p>{record.description}</p>,
                    },
                    {
                      title: 'Hành động',
                      dataIndex: 'action',
                      key: 'action',
                      render: (_, record) => (
                        <Button
                          type="link"
                          onClick={() => {
                            handleSelectFood(record);
                            // console.log(record);
                          }}>
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
        )}

        <div>
          <Button onClick={saveEditValue} style={{ marginTop: '10px' }}>
            OK
          </Button>
          <Button
            onClick={() => handleDelete(selectedRowData.groupIdp)}
            style={{ marginTop: '10px' }}>
            Xóa Nhóm
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Nhom;
