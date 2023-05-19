export const errorHandler = (error: FetchErrorResponse) => {
  let message = '';

  switch (error.errorCode) {
    case '0000':
      message = '이메일 형식이 아니거나 비밀번호 형식이 아닙니다';
      break;
    case '0001':
      message = '가입된 이메일이 아닙니다';
      break;
    case '0002':
      message = '비밀번호가 일치하지 않습니다';
      break;
    case '0005':
      message = '닉네임이 존재하지 않습니다';
      break;
    default:
      message = '네트워크 오류';
  }

  return message;
};
