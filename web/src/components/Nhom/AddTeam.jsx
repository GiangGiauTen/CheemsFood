import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Button, Table, Select } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { TextArea } = Input;

const AddMeeting = () => {
  const [form] = Form.useForm();
  const [members, setMembers] = useState([]);
  const [residentData, setResidentData] = useState([]);
  const [selectedResident, setSelectedResident] = useState([]);
  const [hostId, setHostId] = useState(null);
  const [existingCodes, setExistingCodes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/resident/');
        if (response.status === 200) {
          const resData = response.data.map(e => {
            e['key'] = e['ID'];
            return e;
          });
          setResidentData(resData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchExistingCodes = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/meeting/');
        if (response.status === 200) {
          const codes = response.data.map(e => e.maCuocHop);
          setExistingCodes(codes);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchExistingCodes();
  }, []);

  const columns = [
    {
      title: 'Họ và tên',
      dataIndex: 'hoTen',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'namSinh',
      render: (_, record) => (
        <p>{moment(record.namSinh).format('YYYY-MM-DD')}</p>
      ),
    },
    {
      title: 'Giới tính',
      dataIndex: 'gioiTinh',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedResident(selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  };

  const checkMeetingCode = (rule, value, callback) => {
    if (existingCodes.includes(value)) {
      callback('Mã Cuộc Họp đã tồn tại. Vui Lòng nhập mã khác');
    } else {
      callback();
    }
  };
  const handleSubmit = async values => {
    try {
      values['idNguoiTaoCuocHop'] = hostId;
      values['nguoiThamGia'] = selectedResident;
      values['ngayHop'] = new Date(
        values['meetingDate']['$d'],
      ).toLocaleDateString('fr-CA');
      console.log(values);

      const response = await fetch('http://localhost:4001/api/meeting/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Meeting added successfully');
        form.resetFields();
        setMembers([]);
      } else {
        console.error('Failed to add meeting');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Thêm cuộc họp</h1>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="maCuocHop"
          label="Mã cuộc họp"
          rules={[
            { required: true, message: 'Vui lòng nhập mã cuộc họp' },
            { validator: checkMeetingCode },
          ]}>
          <Input placeholder="Nhập mã cuộc họp" />
        </Form.Item>

        <Form.Item
          name="meetingDate"
          label="Ngày họp"
          rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}>
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            disabledDate={current => current && current < moment().endOf('day')}
          />
        </Form.Item>

        <Form.Item
          name="diaDiem"
          label="Địa điểm"
          rules={[{ required: true, message: 'Vui lòng nhập địa điểm' }]}>
          <Input placeholder="Nhập địa điểm" />
        </Form.Item>

        <Form.Item name="noiDung" label="Nội dung">
          <TextArea rows={4} placeholder="Nhập nội dung cuộc họp" />
        </Form.Item>

        <Select
          showSearch
          placeholder="Chọn người chủ trì"
          onChange={target => {
            setHostId(target);
          }}
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option ? option.label : '')
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          options={selectedResident.map(e => {
            return {
              value: e['ID'],
              label: e['hoTen'],
            };
          })}
        />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>
      </Form>

      <h2>Thành viên</h2>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={residentData}
      />
    </div>
  );
};

export default AddMeeting;
