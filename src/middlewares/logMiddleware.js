import axios from 'axios';

import {
  SUBMIT_LOGIN,
  FETCH_USER,
  successLogin,
  errorLogin,
  fetchUser,
  saveUser,
} from 'src/actions/login';
import { SUBMIT_INSCRIPTION } from 'src/actions/subscribeForm';
import { fetchUserlist } from 'src/actions/actions';

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const state = store.getState();
      axios.post(
        // URL
        'http://backoffice-keskonmate.me/api/login',
        {
          username: state.user.nicknameLogin,
          password: state.user.passwordLogin,
        },
      )
        .then((response) => {
          const { token, userId } = response.data;
          localStorage.setItem('token', token);
          store.dispatch(fetchUser(userId));
        })
        .catch(() => {
          store.dispatch(errorLogin('Identifiants incorrects'));
        });
      break;
    }

    case FETCH_USER:
      axios.get(`http://backoffice-keskonmate.me/api/v1/users/${action.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          if (response.data.verified === 1) {
            store.dispatch(successLogin());
            store.dispatch(saveUser(response.data));
            store.dispatch(fetchUserlist(action.userId));
          }
          else {
            store.dispatch(errorLogin('Veuillez confirmer votre compte'));
          }
        })
        .catch(() => {
        });

      break;

    case SUBMIT_INSCRIPTION: {
      const state = store.getState();
      const newUser = {
        userNickname: state.subscribeForm.nicknameInput,
        password: state.subscribeForm.passwordInput,
        email: state.subscribeForm.emailInput,
      };
      axios.post(
        'http://backoffice-keskonmate.me/api/v1/users/add',
        newUser,
      )
        .then(() => {
        })
        .catch(() => {
        });
      break;
    }

    default:
  }

  next(action);
};

export default logMiddleware;
