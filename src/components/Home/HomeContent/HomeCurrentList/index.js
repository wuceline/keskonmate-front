import PropTypes from 'prop-types';

import './styles.scss';
import SeriesCard from 'src/components/SeriesGrid/SeriesCard';

const HomeCurrentList = ({ series }) => (
  <div className="home-list home-current-list">
    <p className="list-name">
      Les séries en cours
    </p>
    <a href="/lists">
      Voir la liste complète
    </a>
    <div className="series-cards">
      {series.map((serie) => (
        <SeriesCard key={serie.id} {...serie} />
      ))}
    </div>

  </div>
);

HomeCurrentList.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HomeCurrentList;