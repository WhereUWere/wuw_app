import {createTheme} from '@rneui/themed';
import {sizes} from './globalStyles';

export const mainTheme = createTheme({
  lightColors: {
    primary: '#7762f6',
    secondary: 'grey',
    // background: 'black',
    // white: 'black',
    // black: 'black',
    // grey0: 'black',
    // grey1: 'black',
    // grey2: 'black',
    // grey3: 'black',
    // grey4: 'black',
    // grey5: 'black',
    // greyOutline: 'black',
    // searchBg: 'black',
    // success: 'black',
    // warning: 'black',
    // error: 'black',
    // disabled: 'black',
    // divider: 'black',
    background: '#f1f3f5',
  },
  darkColors: {
    primary: '#7762f6',
    secondary: 'grey',
    // background: 'black',
    // white: 'black',
    // black: 'black',
    // grey0: 'black',
    // grey1: 'black',
    // grey2: 'black',
    // grey3: 'black',
    // grey4: 'black',
    // grey5: 'black',
    // greyOutline: 'black',
    // searchBg: 'black',
    // success: 'black',
    // warning: 'black',
    // error: 'black',
    // disabled: 'black',
    // divider: 'black',
    background: '#f1f3f5',
  },
  components: {
    Button: {
      radius: 'sm',
      titleStyle: {
        fontSize: sizes.md,
      },
    },
    Input: {
      containerStyle: {
        paddingHorizontal: 0,
      },
      labelStyle: {
        marginBottom: sizes.xxs,
      },
      inputContainerStyle: {
        backgroundColor: 'white',
        borderRadius: sizes.xxs,
        borderBottomWidth: 0,
        paddingHorizontal: sizes.lg,
        paddingVertical: sizes.xxs,
      },
    },
  },
  mode: 'light',
});
