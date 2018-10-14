import { isLoading, hasErrored, signUp } from '../actions';

export const signInThunk = (signUpObj) => {
  const {
    url,
    options
  } = signUpObj;
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(user => dispatch(signUp(user)))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signUpThunk;