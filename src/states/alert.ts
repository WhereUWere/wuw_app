import {atom} from 'recoil';

interface Alert {
  message: string;
  type: 'alert-success' | 'alert-danger' | null;
}

const initialState = (): Alert => {
  return {
    message: '',
    type: null,
  };
};

const alertAtom = atom({
  key: 'alert',
  default: initialState(),
});

export {alertAtom};
