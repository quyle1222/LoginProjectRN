import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import detailsService from '@/Services/Details/DetailsService'

const fectWeather = {
  initialState: buildAsyncState('fetchUserInfo'),
  action: buildAsyncActions('fectWeather/fetchUserInfo', detailsService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchUserInfo.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchUserInfo.loading',
    itemKey: 'userInfo',
  }),
}

export const UserActions = {
  fectWeather,
}
