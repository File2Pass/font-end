import Service from "../common/service"

// const Post = () => {
    
//     return <div style={{margin: '80px 450px'}}>
//         <div>
//             <label for="uploads">请选择要上传的申报书(PDF,Word)</label>
//         </div>
//         <div style={{margin: '20px 0px'}}>
//             <input type="file" id="uploads" name="uploads" accept=".doc, .docx, .pdf" multiple/>
//         </div>
//         <div style={{margin: '0px 0px'}}>
//             <button onClick={() => {
//                Service.postFile()
//             }}>提交</button>
//         </div>
                
//         {/* <br />
//         <input style={{ margin: '180px 500px' }}type='file'/>
//         <p style={{ margin: '40px 16px' }}>请上传Word或PDF文件</p> */}
//         </div>
// }

import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Post = () => {

    const props = {
        // beforeUpload: file => {
        //   const isRequired = file.type === '.doc, .docx, .pdf';
        //   if (!isRequired) {
        //     message.error(`${file.name} is not a png file`);
        //   }
        //   return isRequired || Upload.LIST_IGNORE;
        // },
        onChange: info => {
          console.log(info.fileList);
        },
      };
    
    return <div style={{margin: '80px 450px'}}>
        <div>
            <label for="uploads">请选择要上传的申报书(PDF,Word)</label>
        </div>
        <div style={{margin: '20px 0px'}}>
        <Upload onChange={({file}) => {
            let formData = new FormData();
            formData.append('file', file[0])
            Service.postFile(formData)

        }} {...props} accept=".doc, .docx, .pdf" type="file" id="file-uploader">
         <Button icon={<UploadOutlined />}  >请上传Word或PDF文件</Button>
        </Upload>
        </div>
        {/* <div style={{margin: '0px 0px'}}>
            <button onClick={}>提交</button>
        </div> */}
                
        {/* <br />
        <input style={{ margin: '180px 500px' }}type='file'/>
        <p style={{ margin: '40px 16px' }}>请上传Word或PDF文件</p> */}
        </div>
}

export default Post