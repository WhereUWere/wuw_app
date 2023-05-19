import {useSetRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAxiosWrapper} from 'hooks/axios-wrapper';
import {authAtom} from 'states/auth';
import {Alert} from 'react-native';
import {errorHandler} from 'helpers/errorHandler';

const useUserActions = () => {
  const baseUrl = 'https://whereyouwere.co.kr/api/v1';
  const authPrefix = '/auth';
  const axiosWrapper = useAxiosWrapper();
  const setAuth = useSetRecoilState(authAtom);

  /**
   * 이메일 중복확인
   * @param userEmail 사용자 이메일
   * @returns 이메일 중복여부
   */
  const checkEmailDuplicate = async (userEmail: string) => {
    try {
      const response = axiosWrapper.post(`${baseUrl}${authPrefix}/email`, {
        userEmail,
      });

      return response;
    } catch (error: any) {
      Alert.alert(errorHandler(error));
    }
  };

  /**
   * 닉네임 중복확인
   * @param userNm 사용자 이름(별명)
   * @returns 닉네임 중복여부
   */
  const checkNmDuplicate = async (userNm: string) => {
    try {
      const response = axiosWrapper.post(`${baseUrl}${authPrefix}/nickname`, {
        userNm,
      });

      return response;
    } catch (error: any) {
      Alert.alert(errorHandler(error));
    }
  };

  /**
   * 로그인
   * @param user 사용자 입력정보
   * @returns 사용자 이름, 토큰
   */
  const signin = async (user: {email: string; password: string}) => {
    try {
      const response = await axiosWrapper.post(
        `${baseUrl}${authPrefix}/signin`,
        user,
      );

      if (response.statusCode === 200) {
        await AsyncStorage.setItem('user', JSON.stringify(response));
        setAuth(response.data);

        return response;
      }
    } catch (error: any) {
      Alert.alert(errorHandler(error));
    }
  };

  /**
   * 로그아웃
   */
  const signout = async () => {
    // remove user from local storage, set auth state to null and redirect to login page
    await AsyncStorage.removeItem('user');
    setAuth(null);
  };

  /**
   * 회원가입
   * @param user 사용자 입력정보
   * @returns 사용자 이름, 토큰
   */
  const signup = (user: {
    userEmail: string;
    userNm: string;
    userPw: string;
  }) => {
    const response = axiosWrapper.post(
      `${baseUrl}${authPrefix}/register`,
      user,
    );
    return response;
  };

  /**
   * 회원탈퇴
   * @param password 사용자 비밀번호
   * @returns
   */
  const breakout = async (password: string) => {
    const response = await axiosWrapper.delete(
      `${baseUrl}${authPrefix}/breakout`,
      password,
    );

    return response;
  };

  return {
    checkEmailDuplicate,
    checkNmDuplicate,
    signin,
    signout,
    signup,
    breakout,
  };
};

export {useUserActions};
