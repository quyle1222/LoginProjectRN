import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async token => {
  await AsyncStorage.setItem('@token', token);
};

const saveUserId = async userId => {
  await AsyncStorage.setItem('@id', userId);
};

const getToken = async () => {
  return AsyncStorage.getItem('@token');
};

const getUserId = async () => {
  return AsyncStorage.getItem('@id');
};

export const LocalStorage = {
  saveToken,
  saveUserId,
  getToken,
  getUserId,
};
