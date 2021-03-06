export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as SessionAPIUtil from '../util/session_api_util';

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => {
      return dispatch(receiveErrors(error.responseJSON)
    );})
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(error => {
      return dispatch(receiveErrors(error.responseJSON)
    );})
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then((user) => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
