import React from 'react';
import {Button, Input, makeStyles, useTheme} from '@rneui/themed';
import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import AuthPageLayout from 'components/layouts/AuthPageLayout';
import {RootStackParamList} from 'types/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {sizes} from 'config/globalStyles';
import useHeaderStyle from 'hooks/header-style';

const SignupFormScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SignupForm'>) => {
  const styles = useStyles();
  const {theme} = useTheme();

  /**
   * 네비게이션 헤더 설정
   */
  useHeaderStyle(
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="arrowleft" size={24} color={theme.colors.primary} />
    </TouchableOpacity>,
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollViewCtn}>
        <AuthPageLayout>
          <View style={styles.dupChkCtn}>
            <Input
              containerStyle={styles.inputCtn}
              autoCapitalize="none"
              label="닉네임"
              placeholder="사용할 닉네임을 입력하세요."
              keyboardType="default"
            />
            <Button title={'확인'} buttonStyle={{padding: sizes.md}} />
          </View>

          <View style={styles.dupChkCtn}>
            <Input
              containerStyle={styles.inputCtn}
              autoCapitalize="none"
              label="이메일"
              placeholder="1234@exam.com"
              keyboardType="email-address"
            />
            <Button title={'확인'} buttonStyle={{padding: sizes.md}} />
          </View>
          <Input
            label="비밀번호"
            autoCapitalize="none"
            placeholder="8~15자리 숫자,영문,특수문자 조합"
            keyboardType="default"
            secureTextEntry
            textContentType={'oneTimeCode'}
          />
          <Input
            label="비밀번호 확인"
            autoCapitalize="none"
            placeholder="8~15자리 숫자,영문,특수문자 조합"
            keyboardType="default"
            secureTextEntry
            textContentType={'oneTimeCode'}
          />
          <View style={styles.btnCtn}>
            <Button title="회원가입" size="lg" />
          </View>
        </AuthPageLayout>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const useStyles = makeStyles(theme => ({
  scrollViewCtn: {
    flexGrow: 1,
  },
  btnCtn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: theme.spacing.xl,
  },
  dupChkCtn: {
    flexDirection: 'row',
    gap: theme.spacing.lg,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  inputCtn: {
    flex: 1,
  },
}));

export default SignupFormScreen;
