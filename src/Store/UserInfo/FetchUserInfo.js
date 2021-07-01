import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';
import detailsService from '@/Services/Details/DetailsService';

export default {
  initialState: buildAsyncState('fetchUserInfo'),
  action: buildAsyncActions('userInfo/fetchUserInfo', detailsService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchUserInfo.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchUserInfo.loading',
    itemKey: 'userInfo',
  }),
};
