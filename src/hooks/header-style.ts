import {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@rneui/themed';

const useHeaderStyle = (icon: React.ReactNode) => {
  const nav = useNavigation();
  const {theme} = useTheme();

  const headerLeft = useCallback(() => icon, [icon]);

  useEffect(() => {
    nav.setOptions({
      headerLeft,
      headerTitleStyle: {
        color: theme.colors.primary,
      },
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
    });
  }, [nav, theme, headerLeft]);
};

export default useHeaderStyle;
