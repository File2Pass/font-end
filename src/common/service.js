import 'whatwg-fetch';

const BASE = "/api"

function Fetch(url, opt = {}) {
    opt.method = opt.method || 'GET';
    const isFile = opt.body instanceof FormData

    opt.headers = isFile ? {} :  {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }; 
    
    if (opt.body) {
        opt.body = isFile ? opt.body : json.stringify(opt.body)
    }
    
    return fetch(url, opt)
        .then(response => {
            if (response.ok) {
                return response.json().then(res => {
                    return res;
                });
            } else {
                return response.json().then(res => {
                    return new Promise((_, reject) => {
                        reject(res);
                    });
                });
            }
        })
        .catch(e => {
            console.log(`服务端错误：${e.message}`)
            throw e;
        })
}

let Service = {

    //all
    allInfo() {
        return Fetch(BASE + '/file/review')
    },

    //detailinfo
    detailInfo(id) {
        return Fetch(BASE + `/file/review/id?=${id}/project`); 
    },

    //personalinfo
    personalInfo(id) {
        return Fetch(BASE + `/file/review/id?=${id}/manager`);
    },

    //unitinfo
    unitInfo(id) {
        return Fetch(BASE + `/file/review/id?=${id}/unit`);
    },

    //memberinfo
    memberInfo(id) {
        return Fetch(BASE + `/file/review/id?=${id}/member`);
    },

    //maintext
    textInfo(id) {
        return Fetch(BASE + `/file/review/id?=${id}/text`);
    },

    //post
    postFile(uploadFile) {
        return Fetch(BASE + '/file/upload', {
            method: 'POST',
            data: {
                file: uploadFile,
            }
        })
    },
};

export default Service;