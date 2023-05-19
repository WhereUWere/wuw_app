import {atom} from 'recoil';

const initialState = (): Auth | null => {
  return {
    userNm: '',
    userEmail: '',
    userPw: '',
    token: '',
  };
};

const authAtom = atom({
  key: 'auth',
  // get initial state from local storage to enable user to stay logged in
  default: initialState(),
});

export {authAtom};
