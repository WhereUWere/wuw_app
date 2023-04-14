import React from 'react';
import {Button, makeStyles} from '@rneui/themed';
import {Text, View} from 'react-native';

import AuthPageLayout from 'components/layouts/AuthPageLayout';
import {sizes} from '@/config/globalStyles';

const SigninScreen = () => {
  const styles = useStyles();
  return (
    <AuthPageLayout>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>로그인</Text>
      </View>

      <View style={styles.btnContainer}>
        <Button title="이메일 로그인" size="lg" />
      </View>
    </AuthPageLayout>
  );
};

const useStyles = makeStyles(theme => ({
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    fontSize: sizes.lg,
    textAlign: 'center',
  },

  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: theme.spacing.lg,
  },
}));

export default SigninScreen;
