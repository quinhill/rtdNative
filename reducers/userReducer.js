const user = (state = {}, action) => {
  switch (action.type) {
  case 'SIGN_IN':
    return action.user;
  case 'SIGN_UP':
    return action.user;
  default:
    return state;
  }
}

export default user;