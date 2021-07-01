import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';
import FetchUserInfo from './FetchUserInfo';

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  userInfo: {},
};

export default buildSlice('userInfo', [FetchUserInfo], sliceInitialState)
  .reducer;
