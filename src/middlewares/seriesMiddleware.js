import axios from 'axios';
import {
  FETCH_SERIES,
  FIND_SERIES,
  saveSeries,
  saveCurrentSeriesDetails,
} from 'src/actions/series';

import {
  ALPHABETICAL_TITLE_FILTER,
  REVERSE_ALPHABETICAL_TITLE_FILTER,
  YOUNGER_TO_OLDER_FILTER,
  OLDER_TO_YOUNGER_FILTER,
  ALPHABETICAL_DIRECTOR_FILTER,
  REVERSE_ALPHABETICAL_DIRECTOR_FILTER,
  GENRE_FILTER,
  FETCH_HOME_ORDER,
  saveHomeOrder,
} from 'src/actions/seriesFilter';

const seriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SERIES:
      axios.get('http://keskonmate.me/api/v1/series')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case FIND_SERIES:
      axios.get(`http://keskonmate.me/api/v1/series/${action.slug}`)
        .then((response) => {
          store.dispatch(saveCurrentSeriesDetails(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case ALPHABETICAL_TITLE_FILTER:
      axios.get('http://keskonmate.me/api/v1/series?order=ASC')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case REVERSE_ALPHABETICAL_TITLE_FILTER:
      axios.get('http://keskonmate.me/api/v1/series?order=DESC')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case YOUNGER_TO_OLDER_FILTER:
      axios.get('http://keskonmate.me/api/v1/series?column=releaseDate&order=DESC')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case OLDER_TO_YOUNGER_FILTER:
      axios.get('http://keskonmate.me/api/v1/series?column=releaseDate&order=ASC')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case ALPHABETICAL_DIRECTOR_FILTER:
      axios.get('http://keskonmate.me/api/v1/series?column=director&order=ASC')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case REVERSE_ALPHABETICAL_DIRECTOR_FILTER:
      axios.get('http://keskonmate.me/api/v1/series?column=director&order=DESC')
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case GENRE_FILTER:
      axios.get(`http://keskonmate.me/api/v1/series?genre=${action.genreId}`)
        .then((response) => {
          store.dispatch(saveSeries(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;

    case FETCH_HOME_ORDER:
      axios.get('http://keskonmate.me/api/v1/series/homeorder')
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveHomeOrder(response.data));
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default seriesMiddleware;
