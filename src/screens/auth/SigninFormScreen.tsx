import React from 'react';
import {Button, Input, makeStyles, useTheme} from '@rneui/themed';
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import AuthPageLayout from 'components/layouts/AuthPageLayout';
import {RootStackParamList} from 'types/navigation';
import useHeaderStyle from 'hooks/header-style';
import {useUserActions} from 'actions/user.actions';
import {Formik} from 'formik';

const SigninFormScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SigninForm'>) => {
  const styles = useStyles();
  const {theme} = useTheme();

  /**
   * 로그인 로직
   */
  const userActions = useUserActions();

  /**
   * 유효성 폼 검사
   */
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('유효한 이메일 형식이 아닙니다')
      .required('이메일을 입력하세요'),
    password: Yup.string()
      .min(8, '비밀번호는 8자 이상 15자 이하입니다')
      .max(15, '비밀번호는 8자 이상 15자 이하입니다')
      .required('비밀번호를 입력하세요'),
  });

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollViewCtn}>
        <AuthPageLayout>
          <Formik
            validationSchema={validationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={user => userActions.signin(user)}>
            {({
              handleChange,
              setFieldTouched,
              touched,
              handleSubmit,
              values,
              isValid,
              errors,
            }) => (
              <>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  value={values.email}
                  autoCapitalize="none"
                  placeholder="이메일 입력"
                  keyboardType="email-address"
                  errorMessage={
                    touched.email && errors.email ? errors.email : ''
                  }
                />
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  value={values.password}
                  autoCapitalize="none"
                  placeholder="비밀번호 입력"
                  keyboardType="default"
                  secureTextEntry
                  errorMessage={
                    touched.password && errors.password ? errors.password : ''
                  }
                />
                <Button
                  title="이메일 로그인"
                  size="lg"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </>
            )}
          </Formik>
          <View style={styles.optionContainer}>
            <Text
              style={styles.optionText}
              onPress={() => navigation.navigate('SignupForm')}>
              회원가입
            </Text>
            <Text style={styles.optionText}>/</Text>
            <Text style={styles.optionText}>비밀번호 찾기</Text>
          </View>
        </AuthPageLayout>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const useStyles = makeStyles(theme => ({
  scrollViewCtn: {
    flex: 1,
  },

  optionContainer: {
    flex: 1,
    marginTop: theme.spacing.lg,
    flexDirection: 'row',
    gap: theme.spacing.lg,
    justifyContent: 'center',
  },
  optionText: {
    color: theme.colors.secondary,
  },
}));

export default SigninFormScreen;
