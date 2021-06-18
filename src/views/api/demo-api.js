import { requestPostJson, requestGet } from '../../utils/commonRequest';
export const testApi = (param) => {
    return requestGet('/node/?c=' + param.id)
}