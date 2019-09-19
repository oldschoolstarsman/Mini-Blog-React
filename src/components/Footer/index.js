// imports npm
import React from 'react';

// imports locaux
import './footer.scss';

// composant
const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <footer className="footer">
      DevOfThrones, a React developer blog — {currentYear}&copy;
    </footer>
  );
};


// export
export default Footer;
