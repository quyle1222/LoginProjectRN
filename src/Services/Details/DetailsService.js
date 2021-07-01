import api from '@/Services';
import { LocalStorage } from '@/Services/utils/LocalStorage';

const detailsService = async () => {
  const id = await LocalStorage.getUserId();
  const response = await api.get(`/api/v1/user/info?userId=${id}`);
  return response.data.data;
};
export default detailsService;
