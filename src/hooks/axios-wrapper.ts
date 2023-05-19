/* eslint-disable @typescript-eslint/no-unused-vars */
import {useRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authAtom} from 'states/auth';
import {useAlertActions} from 'actions/alert.actions';
import axios from 'axios';

const API_URL_PREFIX = 'https://whereyouwere.co.kr/api/v1';

const useAxiosWrapper = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const alertActions = useAlertActions();

  /**
   * Request
   */
  const request = (method: Method) => {
    return (url: string, body?: any) => {
      const requestOptions: any = {
        method,
        headers: authHeader(url),
      };

      if (body) {
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.body = JSON.stringify(body);
      }

      return axios(url, requestOptions).then(handleResponse).catch(handleError);
    };
  };

  /**
   * Request Header
   */
  const authHeader = (url: string) => {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = auth?.token;
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(API_URL_PREFIX);
    if (isLoggedIn && isApiUrl) {
      return {Authorization: `Bearer ${token}`};
    } else {
      return {};
    }
  };

  /**
   * 응답에 관한 설정
   */
  const handleResponse = (response: any) => {
    return response.text().then((text: string) => {
      const data = text && JSON.parse(text);

      return data;
    });
  };

  /**
   * 응답에 관한 설정
   */
  const handleError = (error: any) => {
    const data = error.response.data;

    return Promise.reject(data);
  };

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
  };
};

export {useAxiosWrapper};
