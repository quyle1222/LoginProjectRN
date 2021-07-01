import { ButtonLogin } from '@/Components';
import { LoginService } from '@/Services/Login/Index';
import { useTheme } from '@/Theme';
import React, { useState } from 'react';
import { Alert, Image, Text, TextInput, View } from 'react-native';
import { LocalStorage } from '../../Services/utils/LocalStorage';

const LoginContainer = ({ navigation }) => {
  const { Gutters, Layout, Images, Container } = useTheme();
  const [email, setEmail] = useState('lethuhien.qn96@gmail.com');
  const [password, setPassword] = useState('pss201806');
  const ActionLogin = () => {
    if (!email || !password) {
      return Alert.alert(
        'Notification',
        'User email and password is required !',
      );
    }
    LoginService(email, password)
      .then(res => {
        if (res.success) {
          if (res.data.token && res.data.userId) {
            LocalStorage.saveToken(res.data.token);
            LocalStorage.saveUserId(res.data.userId);
          }
          navigation.navigate('Details');
        } else {
          Alert.alert('Notification', 'Username or password invalid !');
          setEmail('');
          setPassword('');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={[Layout.fill, Gutters.smallHPadding]}>
      <Image source={Images.LoginImage} style={Container.login.image} />
      <View style={Container.login.inputContainer}>
        <Text style={Container.login.textHeader}>Email</Text>
        <TextInput
          placeholder="Enter you email"
          style={Container.login.textInputLogin}
          defaultValue={email}
          onChangeText={email => setEmail(email)}
        />
        <Text style={Container.login.textHeader}>Password</Text>
        <TextInput
          placeholder="Enter you password"
          defaultValue={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
          style={[Container.login.textInputLogin]}
        />
        <ButtonLogin
          title="Login"
          buttonContainer={Container.login.button}
          onPress={() => ActionLogin()}
        />
      </View>
    </View>
  );
};
export default LoginContainer;
