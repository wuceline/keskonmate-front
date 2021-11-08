import usersData from 'src/utils/users';
import { SET_PASSWORD, SET_NICKNAME, SUCCESS_LOGIN } from 'src/actions/login';

const initialState = {
  user: usersData[0],
  isConnected: false,
  nicknameLogin: '',
  passwordLogin: '',
  
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NICKNAME:
      return {
        ...state,
        nicknameLogin: action.value,
      };
      case SET_PASSWORD:
        return {
          ...state,
          passwordLogin: action.value,
        }

       case SUCCESS_LOGIN:
        return {
          ...state,
          isConnected: true,
          nickname: action.nicknameLogin,
        };
    default:
      return state;
  }
}

export default userReducer;
