import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Form, Input, message } from 'antd';
// import toBuyListData from './toBuyListData'
import FoodDetail from './foodDetail';
import AddToNhom from './AddToNhom';
import axios from 'axios';
import moment from 'moment';

import { API_URL } from '../../utils/apiUrl';
const { Search } = Input;
const QuanLyDoMuaNhom = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [toBuyList, setToBuyList] = useState([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  //State tạo Mới
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState(false);
  const [selectedRowToDelete, setSelectedRowToDelete] = useState(null);
  const [selectedGroup, setselectedGroup] = useState(null);
  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible(true);
  };
  const handleSearch = value => {
    setSearchText(value);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  const getGroupName = async groupOwnerId => {
    try {
      const response = await axios.get(`${API_URL}/group/${groupOwnerId}`);
      if (response.status === 200) {
        return response.data.groupName;
      } else {
        return '';
      }
    } catch (error) {
      console.error(error);
      return '';
    }
  };
  const fetchGroupData = async () => {
    try {
      const groupData = await axios.get(
        `${API_URL}/group/${localStorage.getItem('userId')}`,
      );
      if (groupData.status === 200) {
        const groups = groupData.data;
        const fetchGroupDataPromises = groups.map(async group => {
          const response = await axios.post(
            `${API_URL}/to-buy-list/listGroup`,
            {
              groupOwnerId: group.groupId,
            },
          );
          const toBuyListData = response.data.map(item => {
            return {
              ...item,
              name: group.name, // Sử dụng 'name' thay vì 'groupName'
            };
          });
          return toBuyListData;
        });
        const fetchGroupDataResults = await Promise.all(fetchGroupDataPromises);
        const mergedData = fetchGroupDataResults.flatMap(data => data);
        setToBuyList(mergedData);
        setselectedGroup(groups);
      } else {
        message.error('Lấy dữ liệu nhóm thất bại, vui lòng thử lại sau');
      }
    } catch (error) {
      message.error('Lấy dữ liệu nhóm thất bại, vui lòng thử lại sau');
    }
  };
  useEffect(() => {
    fetchGroupData();
  }, []);

  useEffect(() => {
    fetchGroupData();
  }, []);
  useEffect(() => {
    fetchGroupData();
  }, [isCreateModalOpen]);
  const handleDeleteRow = async record => {
    setIsDeleteConfirmationVisible(true);
    setIsDeleteConfirmationVisible(true);
    setSelectedRowToDelete(record.toBuyListId);
  };
  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${API_URL}/to-buy-list/${selectedRowToDelete}`);
      // Xóa dữ liệu thành công, có thể thực hiện các thao tác cần thiết (cập nhật lại danh sách, thông báo, v.v.)
      fetchGroupData();
      setIsDeleteConfirmationVisible(false);
    } catch (error) {
      // Xử lý lỗi khi không thể xóa dữ liệu
      console.error(error);
      message.error('Xóa dữ liệu thất bại');
    }
  };
  const columns = [
    {
      title: 'Mã Danh Sách',
      dataIndex: 'toBuyListId',
    },
    {
      title: 'Ngày',
      dataIndex: 'date',
      render: date => moment(date).format('DD-MM-YYYY'),
    },
    {
      title: 'Thuộc về',
      dataIndex: 'groupOwnerId',
      render: (groupOwnerId, record) => {
        if (groupOwnerId === null) {
          return 'Cá Nhân';
        } else if (record.ownerId === null) {
          return record.name; // Sử dụng 'name' thay vì 'groupName'
        } else {
          // Trường hợp khác nếu cần
          return '';
        }
      },
    },

    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <div>
          <Button type="link" onClick={() => handleRowClick(record)}>
            Xem
          </Button>
          <Button type="link" onClick={() => handleDeleteRow(record)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];
  const filteredData = searchText
    ? toBuyList.filter(
        record =>
          columns &&
          Array.isArray(columns) &&
          columns.some(column => {
            const dataIndex = column.dataIndex;
            const recordValue = dataIndex ? record[dataIndex] : '';

            if (recordValue === null) {
              return false;
            }

            if (recordValue instanceof Date) {
              const formattedDate = moment(recordValue).format('DD-MM-YYYY');
              const searchDate = moment(searchText, 'DD-MM-YYYY', true);
              return formattedDate
                .toLowerCase()
                .includes(searchDate.format('DD-MM-YYYY').toLowerCase());
            }

            return recordValue
              .toString()
              .toLowerCase()
              .includes(searchText.toLowerCase());
          }),
      )
    : toBuyList;

  return (
    <div>
      <Search
        placeholder="Tìm kiếm"
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Button
        onClick={() => {
          setIsCreateModalOpen(true);
          console.log(selectedGroup.map(group => group.groupId));
        }}>
        Tạo list mới
      </Button>
      <Modal
        title="Tạo nhóm"
        open={isCreateModalOpen}
        footer={null}
        onCancel={() => {
          setIsCreateModalOpen(false);
        }}>
        <AddToNhom
          setIsCreateModalOpen={setIsCreateModalOpen}
          selectedGroup={selectedGroup}
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        rowKey="toBuyListId"
      />

      <Modal
        title="Thông tin Đơn Hàng"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}>
        {selectedRowData && (
          <FoodDetail
            selectedRowData={selectedRowData}
            key={selectedRowData.toBuyListId}
          />
        )}
      </Modal>
      <Modal
        title="Xác nhận xóa"
        visible={isDeleteConfirmationVisible}
        onCancel={() => setIsDeleteConfirmationVisible(false)}
        onOk={() => {
          handleConfirmDelete();
        }}>
        <p>Bạn có chắc chắn muốn xóa dữ liệu này?</p>
      </Modal>
    </div>
  );
};

export default QuanLyDoMuaNhom;
