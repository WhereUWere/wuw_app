import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width} from 'config/globalStyles';

interface PropsType {
  children: React.ReactNode;
  bgcolor?: string;
}

const AuthPageLayout = (props: PropsType) => {
  return (
    <SafeAreaView
      style={{
        ...styles.container,
      }}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 60,
    paddingVertical: width * 100,
  },
});
export default AuthPageLayout;
