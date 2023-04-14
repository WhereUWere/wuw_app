import {Dimensions} from 'react-native';
import {StyleProp} from 'react-native';
import {TextStyle} from 'react-native';

interface TextThemeType {
  displayLarge: StyleProp<TextStyle>;
  displayMedium: StyleProp<TextStyle>;
  displaySmall: StyleProp<TextStyle>;
  titleLarge: StyleProp<TextStyle>;
  titleMedium: StyleProp<TextStyle>;
  titleSmall: StyleProp<TextStyle>;
  bodyLarge: StyleProp<TextStyle>;
  bodyMedium: StyleProp<TextStyle>;
  bodySmall: StyleProp<TextStyle>;
  labelLarge: StyleProp<TextStyle>;
  labelMedium: StyleProp<TextStyle>;
  labelSmall: StyleProp<TextStyle>;
}

export const colors = {
  primary: '#3475F5',
  black: '#10141b',
  white: '#FEFEFE',
  darkslategray: '',
  darkgray: '',
  lightgray: '#B0B1B7',
};

// XD파일 스크린의 세로,가로
export const basicDimensions = {
  height: 2436,
  width: 1125,
};

// 세로 변환 작업
export const height = Number(
  (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2),
);

// 가로 변환 작업
export const width = Number(
  (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2),
);

export const TextTheme: TextThemeType = {
  displayLarge: {
    fontSize: width * 70,
    fontWeight: 'bold',
  },
  displayMedium: {},
  displaySmall: {
    fontSize: width * 50,
    color: '#323C4A',
  },
  titleLarge: {
    fontSize: 24,
  },
  // 비밀번호 찾기, 비밀번호 변경 ... Title
  titleMedium: {
    fontSize: width * 72,
    fontWeight: 'bold',
    color: '#1A1F27',
  },
  // 비밀번호 찾기, 비밀번호 변경 ... subTitle
  titleSmall: {
    fontSize: width * 42,
    color: '#3D434C',
    fontWeight: '400',
  },
  bodyLarge: {
    fontSize: 20,
  },
  bodyMedium: {
    fontSize: width * 54,
  },
  bodySmall: {
    fontSize: width * 42,
  },
  labelLarge: {
    fontSize: 16,
  },
  // 비밀번호 찾기, 비밀번호 변경 ... 이름, 휴대폰번호
  labelMedium: {
    fontSize: width * 42,
    color: '#424954',
  },
  labelSmall: {
    fontSize: width * 36,
  },
};

export const sizes = {
  xxs: width * 20,
  xs: width * 30,
  sm: width * 40,
  md: width * 50,
  lg: width * 60,
  xl: width * 88,
  xxl: width * 90,
};
