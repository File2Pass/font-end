import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

import { Table, Tag, Space } from 'antd';

const columns1 = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: '类型',
    dataIndex: '类型',
    key: '类型',
  },
  {
    title: '摘要',
    dataIndex: '摘要',
    key: '摘要',
  },
  {
    title: '名称',
    key: '名称',
    dataIndex: '名称',
    
  },
];

const columns2 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '姓名',
      dataIndex: '姓名',
      key: '姓名',
    },
    {
      title: '组织',
      dataIndex: '组织',
      key: '组织',
    },
    {
      title: '地域',
      key: '地域',
      dataIndex: '地域',
      
    },
    {
        title: '性别',
        key: '性别',
        dataIndex: '性别',
        
    },
    {
        title: 'nationality',
        key: 'nationality',
        dataIndex: 'nationality',
        
    },
    {
        title: '生日',
        key: '生日',
        dataIndex: '生日',
        
    },
    {
        title: '专业',
        key: '专业',
        dataIndex: '专业',
        
    },
    {
        title: '导师',
        key: '导师',
        dataIndex: '导师',
        
    },
    {
        title: '系统',
        key: '系统',
        dataIndex: '系统',
        
    },
];

const columns3 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '名称',
      dataIndex: '名称',
      key: '名称',
    },
    {
      title: '联系方式',
      dataIndex: '联系方式',
      key: '联系方式',
    },
    {
      title: '邮编',
      key: '邮编',
      dataIndex: '邮编',
       
    },
    {
        title: '地址',
        key: '地址',
        dataIndex: '地址',
         
      },
  ];  

  const columns4 = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '姓名',
      dataIndex: '姓名',
      key: '姓名',
    },
    {
      title: '性别',
      dataIndex: '性别',
      key: '性别',
    },
    {
      title: '生日',
      key: '生日',
      dataIndex: '生日',
       
    },
  ];    

const data1 = [], data2 = [], data3 = [], data4 = [];
for (let i = 0; i < 100; i++) {
    data1.push({
    key: i,
    id: `${i}`,
    类型: `Edward King ${i}`,
    摘要: 32,
    名称: `London, Park Lane no. ${i}`,
    });
}

const Tab = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="项目基本信息" key="1">
        <Table columns={columns1} dataSource={data1} />;
    </TabPane>
    <TabPane tab="申报人信息" key="2">
        <Table columns={columns2} dataSource={data2} />;
    </TabPane>
    <TabPane tab="申报人依托单位" key="3">
        <Table columns={columns3} dataSource={data3} />;
    </TabPane>
    <TabPane tab="成员信息" key="4">
        <Table columns={columns4} dataSource={data4} />;
    </TabPane>
  </Tabs>
);

export default Tab;