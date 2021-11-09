import { useState } from 'react';

import { Filter, X } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueFilters = () => {
  // isOpen : booléen qui simule le clic sur l'icone' filtre
  // s'il vaut false : on affiche uniquement l'icone filtre
  // s'il vaut true : il faut déployer le menu des filtres
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <div className="catalogue-filters">
      {!isFiltersOpen && (
      <div className="catalogue-filters-close">
        <Filter size={30} onClick={() => setIsFiltersOpen(true)} className="catalogue-filters-close-logo" />
      </div>
      )}
      {isFiltersOpen && (
      <div className="catalogue-filters-open">
        <div className="catalogue-filters-header">
          <h2>Filtres</h2>
          <X size={30} className="catalogue-filters-close-button" onClick={() => setIsFiltersOpen(false)} />
        </div>
        <ul className="catalogue-filters-list">
          {/* Filtres du catalogue */}
          <li className="catalogue-filters-item">
            <button className="catalogue-filters-item-button" type="button">
              par ordre alphabétique
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button className="catalogue-filters-item-button" type="button">
              par date de parution
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button className="catalogue-filters-item-button" type="button">
              par nouveauté
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button className="catalogue-filters-item-button" type="button">
              autre filtre
            </button>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
};

// == Export
export default CatalogueFilters;
