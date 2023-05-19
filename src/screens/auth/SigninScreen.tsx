import React from 'react';
import {Button, makeStyles} from '@rneui/themed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Alert, ScrollView, View} from 'react-native';

import Google from 'assets/google.svg';
import Kakao from 'assets/kakao.svg';
import Logo from 'assets/logo_light.svg';
import AuthPageLayout from 'components/layouts/AuthPageLayout';
import {RootStackParamList} from 'types/navigation';

const SigninScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Signin'>) => {
  const styles = useStyles();

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollCtn}>
      <AuthPageLayout>
        <View style={styles.titleCtn}>
          <Logo width={'100%'} height={280} />
        </View>

        <View style={styles.btnCtn}>
          <Button
            onPress={() => Alert.alert('준비중입니다.')}
            size="lg"
            buttonStyle={styles.kakao}
            titleStyle={styles.black}
            color={'#F9E54D'}
            icon={<Kakao width={24} height={24} color="#121722" />}
            title="카카오로 로그인"
          />
          <Button
            onPress={() => Alert.alert('준비중입니다.')}
            size="lg"
            buttonStyle={styles.google}
            titleStyle={styles.black}
            color={'white'}
            icon={<Google width={24} height={24} />}
            title="구글로 로그인"
          />
          <Button
            size="lg"
            buttonStyle={styles.email}
            title="이메일로 로그인"
            onPress={() => navigation.push('SigninForm')}
          />
        </View>
      </AuthPageLayout>
    </ScrollView>
  );
};

const useStyles = makeStyles(theme => ({
  scrollCtn: {
    flexGrow: 1,
  },
  titleCtn: {
    flex: 1,
    justifyContent: 'center',
  },

  btnCtn: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: theme.spacing.lg,
  },

  kakao: {
    backgroundColor: '#F9E54D',
    gap: theme.spacing.lg,
  },
  google: {
    backgroundColor: 'white',
    gap: theme.spacing.lg,
  },
  email: {
    backgroundColor: theme.colors.primary,
  },

  btnTitle: {
    marginLeft: 10,
    fontSize: 16,
  },

  black: {
    color: 'black',
  },
}));

export default SigninScreen;
