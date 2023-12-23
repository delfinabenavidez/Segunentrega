import "./App.css"
import React from 'react';
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { CartProvider } from "./context/CartContext"
import { SearchResultsProvider } from "./context/SearchResultsContext"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShoppingList from "./components/ShoppingList";
import Product from "./components/Product";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/src/components/ShoppingList.js" component={ShoppingList} />
      <Route path="/src/components/Product.js" component={Product} />
    </Router>
  );
}

export default App;

// Home.js

// Home.js
import React from 'react';

function Home() {
  return <h1>Home</h1>;
}

export default Home;

// ShoppingList.js
import React from 'react';

function ShoppingList() {
  return <h1>ShoppingList</h1>;
}

export { ShoppingList }; // Exporting ShoppingList without default

// App.js
import React from 'react';
import Home from './Home';
import { ShoppingList } from './ShoppingList';

function App() {
  return (
    <div>
      <Home />
      <ShoppingList />
    </div>
  );
}

export default App;