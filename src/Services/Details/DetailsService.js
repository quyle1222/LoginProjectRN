import api from '@/Services';

const detailsService = async userId => {
  const response = await api.get(`/api/v1/user/info?userId=${userId}`);
  return response.data.data;
};
export default detailsService;
