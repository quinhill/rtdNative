import { isLoading, hasErrored, signIn } from '../actions';

export const signInThunk = (url) => {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        dispatch(isLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(user => dispatch(signIn(user)))
      .catch(() => dispatch(hasErrored(true)));
  };
};

export default signInThunk;