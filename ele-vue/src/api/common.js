/**
 * 请求统一管理
 */
import Request from '../common/js/request'

/* Common */
export const rankGender = data => Request.get('/ranking/gender', data);
