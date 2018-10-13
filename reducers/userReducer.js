const user = (state = {}, action) => {
  switch (action.type) {
  case 'SIGN_IN':
    console.log(action.user)
    return action.user;
  default:
    return state;
  }
}

export default user;