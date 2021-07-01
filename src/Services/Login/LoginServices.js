import api from '@/Services';

const LoginService = async (userName, password) => {
  const response = await api.post(`/api/v1/login`, {
    username: userName,
    password: password,
  });
  return response.data;
};
export default LoginService;
