import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import detailsService from '@/Services/Details/DetailsService'

const userInfo = {
  initialState: buildAsyncState('fetchUserInfo'),
  action: buildAsyncActions('userInfo/fetchUserInfo', detailsService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchUserInfo.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchUserInfo.loading',
    itemKey: 'userInfo',
  }),
}

export const UserActions = {
  userInfo,
}
