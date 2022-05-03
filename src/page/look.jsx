import { Table, Tag, Space } from 'antd';
import { Tabs } from 'antd';
import Service from '../common/service';
import { useState } from 'react';
import './look.css'
import { useEffect } from 'react/cjs/react.production.min';

function callback(key) {
    console.log(key);
}

const { TabPane } = Tabs;

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
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '单位',
        dataIndex: 'unit',
        key: 'unit',
      },
      {
        title: '职位',
        key: 'position',
        dataIndex: 'position',
        
      },
      {
          title: '性别',
          key: 'sex',
          dataIndex: 'sex',
          
      },
      {
          title: 'nationality',
          key: 'nationality',
          dataIndex: 'nationality',
          
      },
      {
          title: '生日',
          key: 'birthday',
          dataIndex: 'birthday',
          
      },
      {
          title: '专业',
          key: 'expertise',
          dataIndex: 'expertise',
          
      },
      {
          title: '导师',
          key: 'tutor',
          dataIndex: 'tutor',
          
      },
      {
          title: '系统',
          key: 'system',
          dataIndex: 'system',
          
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
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '邮编',
        key: 'post',
        dataIndex: 'post',
         
      },
      {
          title: '地址',
          key: 'location',
          dataIndex: 'location',
           
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
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday',
      },
    ];  
    
    const columns5 = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{test}</a>,
      },
      {
        title: '项目基础与保障',
        dataIndex: 'argument',
        key: 'argument',
      },
      {
        title: '项目论证信息',
        dataIndex: 'guarantee',
        key: 'guarantee'
      }
    ]
  
const data1 = [];
let data2, data3, data4;
const data = [];




const Look = () => {

    const [detail, setDetail] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [showId, setShowId] = useState()
    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState()
    const [data3, setData3] = useState()
    const [data4, setData4] = useState()
    const [data5, setData5] = useState()


    

    const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '摘要',
        dataIndex: 'summary',
        key: 'summary',
    },
    {
        title: '名称',
        key: 'name',
        dataIndex: 'name',
    },
    {
        title: '操作',
        key: '操作',
        render: (text, record) => (
        <Space size="middle">
            <a onClick={() => {
                setIsShow(true)
                setShowId(text.id)
                Service.detailInfo(props).then((res) => {
                  setData1(res.list)
                });
                Service.personalInfo(props).then((res) => {
                  setData2(res)
                });
                Service.unitInfo(props).then((res) => {
                  setData3(res)
                });
                Service.memberInfo(props).then((res) => {
                  setData4(res)
                });
                Service.textInfo(props).then((res) => {
                  setData5(res)
                })
            }}>访问</a>
        </Space>
        ),
    },
    ];

    
    useEffect(() => {
      Service.allInfo().then((res) => {
        setData(res.list)
      })
    },[])
    
    const DetailPage = (props) => {
        return <div className='detail-page'>
            <a className='close' onClick={() => {
                    setIsShow(false)}}>╳</a>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="项目基本信息" key="1">
                    <Table columns={columns1} dataSource={data1} />
                </TabPane>
                <TabPane tab="申报人信息" key="2">
                    <Table columns={columns2} dataSource={data2} />
                </TabPane>
                <TabPane tab="申报人依托单位" key="3">
                    <Table columns={columns3} dataSource={data3} />
                </TabPane>
                <TabPane tab="成员信息" key="4">
                    <Table columns={columns4} dataSource={data4} />
                </TabPane>
                <TabPane tab="正文" key="4">
                    <Table columns={columns5} dataSource={data5} />
                </TabPane>
            </Tabs>
        </div>
    }


    return <>
     <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }}  />
     {
         isShow ? <DetailPage id={showId} /> : null
     }
    </>

}

export default Look