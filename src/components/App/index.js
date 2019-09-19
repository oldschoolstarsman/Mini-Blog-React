/* eslint-disable arrow-body-style */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
// == Import : npm
import React from 'react';

// == Import : local
import Menu from 'src/components/Menu';
import Footer from 'src/components/Footer';
import Articles from 'src/components/Articles';
import './app.scss';

import categories from 'src/data/categories';
import posts from 'src/data/posts';

// == Composant

/*
<Menu categories={categories} />
 équivaut à
Menu({
  categories: categories
})
 Dans le composant on récupère un objet avec notre tableau en propriété
*/


// ou avec return implicite
// const filteredPosts = posts.filter((currentPost) => currentPost.category === selectedCategory);


/*
const App = () => (
  <div id="app">
    <Menu active={selectedCategory} categories={categories} />
    <Articles active={selectedCategory} posts={filteredPosts} />
    <Footer />
  </div>
);
*/

// dès qu'on va vouloir gérer un state on va définir notre composant sous forme de classe
// le state centralisera nos données capables d'évoluer dans le temps
// à chaque modification du state on déclenchera un nouveau rendu de notre application

// pour écrire un composant sous forme de classe ou doit étendre React.Component
// on définit ensuite une méthode render qui retourne le JSX
class App extends React.Component {

  /*
  // en ES6 on ne peut pas définir directement des propriétés dans la classe
  // on doit les définit dans la méthode constructor
  // constructor est appelé immédiatement quand on instancie la classe
  constructor() {
    // super permet d'executer la méthode constructor de la classe parent
    super();
    // je définis une propriété sur mon instance
    this.state = {
      selectedCategory: 'Angular',
    };

    // méthode sans babel pour faire en sorte que this représente l'instance de la classe dans la méthode handleClick
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    on ne fera jamais ça :
    this.state.selectedCategory = 'React';
    pour modifier le state, et laisser React faire correctement son travail
    je passe par la méthode setState héritée de React.Component
    console.log(this);
    this.setState({
      selectedCategory: 'React',
    });
  }
  */

  // grâce à Babel on peut déclarer nos propriétés directement
  state = {
    selectedCategory: 'Angular',
  }

  handleClick = (newCategory) => {
    // console.log('une fonction est générée, je peux accéder à :' + newCategory);
    /*
      lorsque je modifie le state
      un nouveau cycle de rendu est déclenché
      mon state / ma donnée est changé
      on rend à nouveau chaque composant avec les données/props redistribuées et à jour
    */
    return () => {
      // console.log('la fonction générée est executée, je peux toujours accéder à '+ newCategory);
      this.setState({
        selectedCategory: newCategory,
      });
    };
  }

  // render est une méthode de ma classe
  // la méthode render de ma classe sera appelée par react-dom
  // lors de l'execution de sa fonction render, chaque fois que j'instancie mon composant App,
  // cad chaque fois que j'écris <App /> (par exemple dans src/index.js) je récupère le JSX retournée parl a méthode render de ma class App
  render() {
    // const selectedCategory = this.state.selectedCategory;
    // this fait référence à l'instance de la classe, je peux y lire sa propriété state
    const { selectedCategory } = this.state;
    const filteredPosts = posts.filter((currentPost) => {
      return currentPost.category === selectedCategory;
    });
    
    return (
      // ici plutôt que de transmettre directement une fonction anonyme
      // on transmet une méthode de la classe, on y fait référence à l'aide de this
      // via les props je peux transmettre une fonction
      <div id="app">
        <Menu
          active={selectedCategory}
          categories={categories}
          changeCategory={this.handleClick}
        />
        <Articles active={selectedCategory} posts={filteredPosts} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default App;
