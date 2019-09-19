/* eslint-disable react/jsx-props-no-spreading */
// imports npm
import React from 'react';
import PropTypes from 'prop-types';

// imports locaux
import Article from 'src/components/Articles/Article';
import './articles.scss';

// composant
const Articles = ({ posts, active }) => {
  return (
    <main className="articles">
      <h1 className="articles-title">Les articles de la catégorie {active}</h1>
      <div className="articles-container">
        {/* posts.map((post) => {
          return (
            <Article
              key={post.id}
              title={post.title}
              category={post.category}
              excerpt={post.excerpt}
            />
          );
        }) */}
        {/* on peut utiliser l'opérateur de spread pour déverser le contenu de notre objet post 
          c'est à dire qu'on va déverser toutes ses propriétés
        */}
        {posts.map((post) => {
          return (
            <Article
              key={post.id}
              {...post}
            />
          );
        })}
      </div>
    </main>
  );
};

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  active: PropTypes.string.isRequired,
};


// export
export default Articles;
