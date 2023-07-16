import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, message } from 'antd';
// import toBuyListData from './toBuyListData'
import FoodDetail from './foodDetail';
import axios from 'axios';
import moment from 'moment';
import ThemDanhSachDoCanMua from './ThemDanhSachDoCanMua';
import { API_URL } from '../../utils/apiUrl';
const QuanLyDoCanMua = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [toBuyList, setToBuyList] = useState([]);
  //State tạo Mới
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .post(`${API_URL}/to-buy-list/list`, {
            ownerId: localStorage.getItem('userId'),
          })
          .then(res => {
            if (res.status == 201) setToBuyList(res.data);
            else message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
          });
      } catch (error) {
        message.error('Lấy dữ liệu thất bại, vui lòng thử lại sau');
      }
    };
    fetchData();
  }, []);

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
          return 'Nhóm ' + groupOwnerId;
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
        <Button type="link" onClick={() => handleRowClick(record)}>
          Xem
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={toBuyList}
        pagination={false}
        rowKey="toBuyListId"
      />
      <ThemDanhSachDoCanMua setToBuyList={setToBuyList} />
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
    </div>
  );
};

export default QuanLyDoCanMua;
