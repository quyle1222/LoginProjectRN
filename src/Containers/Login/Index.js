import { ButtonLogin } from '@/Components';
import { loginService } from '@/Services/Login/Index';
import { LocalStorage } from '@/Services/utils/LocalStorage';
import { navigationConstant } from '@/Services/utils/Navigation';
import { useTheme } from '@/Theme';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../Store/UserInfo/UserActions';
const LoginContainer = ({ navigation }) => {
  const { Gutters, Layout, Images, Container } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();
  const actionLogin = () => {
    if (!email.trim() || !password.trim()) {
      return Alert.alert(t('notification'), t('userEmailPasswordRequired'));
    }
    loginService(email, password)
      .then(res => {
        if (res.success) {
          if (res.data.token && res.data.userId) {
            LocalStorage.saveToken(res.data.token);
            LocalStorage.saveUserId(res.data.userId);
            dispatch(UserActions.userInfo.action(res.data.userId));
          }
          navigation.navigate(navigationConstant.MAIN);
        } else {
          Alert.alert(t('notification'), t('userEmailPasswordInvalid'));
          setEmail('');
          setPassword('');
        }
      })
      .catch();
  };

  return (
    <View style={[Layout.fill, Gutters.smallHPadding]}>
      <Image source={Images.LoginImage} style={Container.login.image} />
      <View style={Container.login.inputContainer}>
        <Text style={Container.login.textHeader}>{t('email')}</Text>
        <TextInput
          placeholder={t('enterYouEmail')}
          style={Container.login.textInputLogin}
          defaultValue={email}
          onChangeText={email => setEmail(email)}
        />
        <Text style={Container.login.textHeader}>{t('password')}</Text>
        <TextInput
          placeholder={t('enterYouPassword')}
          defaultValue={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
          style={[Container.login.textInputLogin]}
        />
        <ButtonLogin
          title={t('buttonLogin')}
          buttonContainer={Container.login.button}
          onPress={() => actionLogin()}
        />
      </View>
    </View>
  );
};
export default LoginContainer;
