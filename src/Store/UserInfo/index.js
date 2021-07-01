import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper';
import { UserActions } from './UserActions';

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  userInfo: {},
};

export default buildSlice('userInfo', [UserActions.userInfo], sliceInitialState)
  .reducer;
