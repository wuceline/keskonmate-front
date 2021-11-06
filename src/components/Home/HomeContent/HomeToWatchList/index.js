import PropTypes from 'prop-types';

import './styles.scss';
import SeriesCard from 'src/containers/SeriesGrid/SeriesCard';

const HomeToWatchList = ({ toWatchSeries }) => (
  <div className="home-list home-to-watch-list">
    <p className="list-name">
      Les séries à voir
    </p>
    <a href="/lists" className="series-link">
      Voir la liste complète
    </a>
    <div className="series-cards">
      {toWatchSeries.map((serie) => (
        serie.type === 3
        && <SeriesCard key={serie.id} type={serie.type} isHomeToWatchList {...serie.series[0]} />
      ))}
    </div>
  </div>
);

HomeToWatchList.propTypes = {
  toWatchSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HomeToWatchList;
