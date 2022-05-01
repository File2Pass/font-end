import 'whatwg-fetch';

const BASE = "/api"

function Fetch(url, opt = {}) {
    opt.method = opt.method || 'GET';
    const isFile = opt.body instanceof FormData

    opt.headers = isFile ? {} :  {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }; 


    // if (url.includes('message')) {
    //     opt.headers = new Headers()
    //     opt.headers.append("Content-Type", "application/x-www-form-urlencoded");
    // }
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
//    // 获得随机用户名
//     rand(id) {
//         return Fetch(BASE + `/rand?id${id}`)
//     },

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

    //post
    postFile(uploadFile) {
        return Fetch(BASE + '/file/upload', {
            method: 'POST',
            data: {
                file: uploadFile,
            }
        })
    },



    // 
    info(info) {
        return Fetch(BASE + '/file/review', {
            method: 'POST',
            data: {
                sex: info.sex,
                point: info.point,
                user_name: info.user_name,
                time: info.time,
                group_id: info.group_id
            }
        })
    },
    // 获得讨论信息
    message(result, group_id) {
        // let postResult = JSON.stringify(result)
        // let urlencoded = new URLSearchParams(BASE)
        // for (let i = 0; i < result.length; i++) {
        //     urlencoded.append("result", result[i])
        // }
        // urlencoded.append("group_id", `${group_id}`)
        // let urlStr = urlencoded.toString()
        return Fetch(BASE + '/message', {
            method: 'POST',
            data: {
                result: result,
                group_id: `${group_id}`
            }
        })
    }
};

export default Service;