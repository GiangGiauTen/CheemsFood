import React, { useState } from 'react';
import { Table, Button } from 'antd';
import Detail from './Detail';

const FoodDetail = ({ selectedRowData }) => {
  const [detailData, setDetailData] = useState(
    Detail.find(data => data.toBuyListId === selectedRowData.toBuyListId),
  );

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
    </div>
  );
};

export default FoodDetail;
