// imports npm
import React from 'react';
import PropTypes from 'prop-types';


// imports locaux
import './menu.scss';

// composant
// const Menu = (props) => {
//   const { categories } = props
const Menu = ({ categories, active, changeCategory }) => {

  return (
    <header>
      <nav className="nav">
        {/*
        // avec return explciite
        categories.map((currentCategorie) => {
          return <a key={currentCategorie} className="nav-link">{currentCategorie}</a>;
        }) */}
        {/*
        // avec return implicite sur 1 ligne
        categories.map((currentCategorie) => <a key={currentCategorie} className="nav-link">{currentCategorie}</a>)}
        */}
        {
          // avec return implciite sur plusieurs lignes
          categories.map((currentCategorie) => {
            let cssClass = 'nav-link';
            if (currentCategorie === active) {
              cssClass += ' nav-link--active';
            }
            
            const generatedFunction = changeCategory(currentCategorie);
            return (
              // je viens placer une écouteur sur un événement, je suis dans du jsx pour écouter l'événement click je vais indiquer une props onClick à qui j'associe une fonction
              <a onClick={generatedFunction} key={currentCategorie} className={cssClass}>
                {currentCategorie}
              </a>
            );
          })
        }
      </nav>
    </header>
  );
};

// je valide tout ce que j'utilise, ici j'ai besoin d'un tableau de chaînes de caractères
Menu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  active: PropTypes.string.isRequired,
  changeCategory: PropTypes.func.isRequired,
};


// export
export default Menu;
