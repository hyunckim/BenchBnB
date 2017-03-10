import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);

    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);

    default:
      return state;
  }
};

export default SessionReducer;
