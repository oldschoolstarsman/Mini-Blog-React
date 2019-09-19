// imports npm
import React from 'react';
import PropTypes from 'prop-types';

// imports locaux

// composant
const Article = ({ title, category, excerpt }) => (
  <article className="article">
    <h2 className="article-title">{title}</h2>
    <h3 className="article-category">{category}</h3>
    <p>
      {excerpt}
    </p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

// export
export default Article;
