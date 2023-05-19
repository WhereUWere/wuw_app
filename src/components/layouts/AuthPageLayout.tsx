import React from 'react';
import {makeStyles} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

import {width} from 'config/globalStyles';

interface PropsType {
  children: React.ReactNode;
}

const AuthPageLayout = (props: PropsType) => {
  const styles = useStyles();

  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: width * 60,
    paddingVertical: width * 80,
  },
}));

export default AuthPageLayout;
