import request from './request';


// get 请求
export const requestGet = (url) => {
    return request({ url, method: 'get' });
}


// post 请求
export const requestPost = (url, param) => {
    return request({ url, method: 'post', data: param });
}


// post 请求 json类型
export const requestPostJson = (url, param) => {
    return request({ url, method: 'post', data: JSON.stringify(param), type: 'application/json;charset=utf-8' });
}


// post 上传文件api
export const requestUploadFileApi = (param) => {
    return request({
        url,
        method: 'post',
        type: 'multipart/form-data',
        data: param
    });
}