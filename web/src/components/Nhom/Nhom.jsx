import React, { useEffect, useState } from 'react';
import { Table, Input, Modal, Form, DatePicker, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
const { Search } = Input;
const Nhom = () => {
  const [searchText, setSearchText] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
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
  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible2(true);
  };
  const handleEdit = record => {
    setSelectedRowData(record);
    setIsModalVisible2(false);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setIsModalVisible2(false);
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
      render: (_, record, index) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          Thao Tác
        </Button>
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
        onRow={record => ({
          onClick: () => {
            handleRowClick(record);
            // console.log(record);
          },
        })}
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
            <p>
              <strong>Mã nhóm:</strong> {selectedRowData.groupId}
            </p>
            <p>
              <strong>Tên nhóm:</strong> {selectedRowData.name}
            </p>
            <p>
              <strong>Người Tạo:</strong> {selectedRowData.adminName}
            </p>

            <Form.Item>
              <p>
                <strong>Người tham gia:</strong>
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
    </div>
  );
};

export default Nhom;
