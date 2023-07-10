import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, Button, Table, Select } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { TextArea } = Input;

const AddMeeting = () => {
  const [form] = Form.useForm();
  const [members, setMembers] = useState([]);

  const [selectedResident, setSelectedResident] = useState([]);
  const [hostId, setHostId] = useState(null);
  const [existingCodes, setExistingCodes] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4001/api/resident/');
  //       if (response.status === 200) {
  //         const resData = response.data.map(e => {
  //           e['key'] = e['ID'];
  //           return e;
  //         });
  //         setResidentData(resData);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const fetchExistingCodes = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4001/api/meeting/');
  //       if (response.status === 200) {
  //         const codes = response.data.map(e => e.maCuocHop);
  //         setExistingCodes(codes);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  //   fetchExistingCodes();
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
  const columns = [
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
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
      callback('Mã nhóm đã tồn tại. Vui Lòng nhập mã khác');
    } else {
      callback();
    }
  };
  const handleSubmit = async values => {
    // try {
    //   values['idNguoiTaoCuocHop'] = hostId;
    //   values['nguoiThamGia'] = selectedResident;
    //   values['ngayHop'] = new Date(
    //     values['meetingDate']['$d'],
    //   ).toLocaleDateString('fr-CA');
    //   console.log(values);
    //   const response = await fetch('http://localhost:4001/api/meeting/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (response.ok) {
    //     console.log('Meeting added successfully');
    //     form.resetFields();
    //     setMembers([]);
    //   } else {
    //     console.error('Failed to add meeting');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <div>
      <h1>Thêm Nhóm</h1>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="groupId"
          label="Mã nhóm"
          rules={[
            { required: true, message: 'Vui lòng nhập mã nhóm' },
            { validator: checkMeetingCode },
          ]}>
          <Input placeholder="Nhập mã nhóm" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Tên Nhóm"
          rules={[
            { required: true, message: 'Vui lòng nhập tên nhóm' },
            { validator: checkMeetingCode },
          ]}>
          <Input placeholder="Nhập mã nhóm" />
        </Form.Item>
        <Form.Item name="noiDung" label="Nội dung">
          <TextArea rows={4} placeholder="Nhập nội dung nhóm" />
        </Form.Item>

        {/* <Select
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
        /> */}

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
        dataSource={users}
      />
    </div>
  );
};

export default AddMeeting;
