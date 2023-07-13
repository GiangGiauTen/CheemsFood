import React, { useState } from 'react';
import { Table, Modal, Button } from 'antd';
import toBuyListData from './toBuyListData';
import FoodDetail from './foodDetail';

const QuanLyDoCanMua = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleRowClick = record => {
    setSelectedRowData(record);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Mã Danh Sách',
      dataIndex: 'toBuyListId',
    },
    {
      title: 'Ngày',
      dataIndex: 'date',
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
        dataSource={toBuyListData}
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
    </div>
  );
};

export default QuanLyDoCanMua;
