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
  const [selectedUsers, setSelectedUsers] = useState(users);
  const [isAddParticipantFormVisible, setIsAddParticipantFormVisible] =
    useState(false);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

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
    setData(updatedData);
    setIsModalVisible(false);
    setIsModalVisible2(false);
  };
  // Hàm xóa cuộc họp
  const handleDelete = async maCuocHop => {
    try {
      // Gọi API xóa cuộc họp với mã cuộc họp (meetingId)
      const response = await axios.delete(
        `http://localhost:4001/api/meeting/${maCuocHop}`,
      );
      if (response.status === 200) {
        // Nếu API xóa thành công, cập nhật lại state của data (danh sách cuộc họp)
        setData(prevData =>
          prevData.filter(meeting => meeting.maCuocHop !== maCuocHop),
        );
        setIsModalVisible(false);
        setIsModalVisible2(false);
      } else {
        console.error('Error deleting meeting', response.data.error);
        // Xử lý hiển thị thông báo lỗi nếu cần thiết
      }
    } catch (error) {
      console.error('Error deleting meeting', error);
      // Xử lý hiển thị thông báo lỗi nếu cần thiết
    }
  };

  const handleSelectUser = user => {
    setSelectedRowData(prevMeeting => ({
      ...prevMeeting,
      nguoiThamGia: [
        ...prevMeeting.nguoiThamGia,
        {
          hoTen: user.hoTen,
          birthdate: user.birthdate,
          gioiTinh: user.gioiTinh,
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
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/resident/');
        if (response.status === 200) {
          const userData = response.data;
          setUsers(userData);
          setSelectedUsers(userData); // Cập nhật selectedUsers sau khi có dữ liệu người dùng
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/meeting/');
        if (response.status === 200) {
          const resData = response.data;
          setData(resData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleSearch = value => {
    setSearchText(value);
  };
  const handleSearchUsers = value => {
    const filteredUsers = users.filter(user =>
      user.hoTen.toLowerCase().includes(value.toLowerCase()),
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
      title: 'Mã cuộc họp',
      dataIndex: 'maCuocHop',
      // sorter: (a, b) => a.meetingCode.localeCompare(b.meetingCode),
      // sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Người tạo',
      dataIndex: 'hoTen',
    },
    {
      title: 'Nội dung chính',
      dataIndex: 'noiDung',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'ngayTaoCuocHop',
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      sortDirections: ['ascend', 'descend'],
      render: date => new Date(date).toLocaleDateString('vi-VN'),
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
        title="Thông tin cuộc họp"
        visible={isModalVisible2}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <div>
            <p>
              <strong>Mã cuộc họp:</strong> {selectedRowData.maCuocHop}
            </p>
            <p>
              <strong>Người Tạo:</strong> {selectedRowData.hoTen}
            </p>
            <p>
              <strong>Nội Dung:</strong> {selectedRowData.noiDung}
            </p>
            <p>
              <strong>Ngày diễn ra:</strong>{' '}
              {moment(selectedRowData.ngayTaoCuocHop).format('YYYY-MM-DD ')}
            </p>
            <p>
              <strong>Địa điểm:</strong> {selectedRowData.diaDiem}
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
                  dataIndex: 'hoTen',
                  key: 'hoTen',
                  render: (_, record) => <p>{record.hoTen}</p>,
                },
                {
                  title: 'Ngày sinh',
                  dataIndex: 'birthdate',
                  key: 'ngaySinh',
                  render: (_, record) => (
                    <p>{moment(record.namSinh).format('YYYY-MM-DD')}</p>
                  ),
                },
                {
                  title: 'Giới tính',
                  dataIndex: 'gioiTinh',
                  key: 'gioiTinh',
                  render: (_, record) => <p>{record.gioiTinh}</p>,
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
              <strong>Mã cuộc họp:</strong> {selectedRowData.maCuocHop}
            </p>
            <p>
              <strong>Người Tạo:</strong> {selectedRowData.hoTen}
            </p>
            <Form>
              <Form.Item label="Nội Dung">
                <Input
                  value={selectedRowData.noiDung}
                  onChange={e => updateEditValue('noiDung', e.target.value)}
                />
              </Form.Item>
            </Form>
            <Form.Item label="Ngày diễn ra">
              <DatePicker
                value={moment(selectedRowData.ngayTaoCuocHop)}
                onChange={date =>
                  updateEditValue('ngayTaoCuocHop', date.format())
                }
              />
            </Form.Item>
            <Form>
              <Form.Item label="Địa điểm">
                <Input
                  value={selectedRowData.diaDiem}
                  onChange={e => updateEditValue('diaDiem', e.target.value)}
                />
              </Form.Item>
            </Form>
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
                    dataIndex: 'hoTen',
                    key: 'hoTen',
                    render: (_, record) => <p>{record.hoTen}</p>,
                  },
                  {
                    title: 'Ngày sinh',
                    dataIndex: 'birthdate',
                    key: 'birthdate',
                    render: (_, record) => (
                      <p>{moment(record.namSinh).format('YYYY-MM-DD')}</p>
                    ),
                  },
                  {
                    title: 'Giới tính',
                    dataIndex: 'gioiTinh',
                    key: 'gioiTinh',
                    render: (_, record) => <p>{record.gioiTinh}</p>,
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
                      dataIndex: 'hoTen',
                      key: 'hoTen',
                      render: (_, record) => <p>{record.hoTen}</p>,
                    },
                    {
                      title: 'Ngày sinh',
                      dataIndex: 'namSinh',
                      key: 'namSinh',
                      render: (_, record) => (
                        <p>{moment(record.namSinh).format('YYYY-MM-DD')}</p>
                      ),
                    },
                    {
                      title: 'Giới tính',
                      dataIndex: 'gioiTinh',
                      key: 'gioiTinh',
                      render: (_, record) => <p>{record.gioiTinh}</p>,
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
