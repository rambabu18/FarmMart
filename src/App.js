//feature 1
import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
  render(){
  return (
    <Provider store={store} >
      <div className="grid-container">
      <header>

        <a href="/" >Fresh Mart</a>
      </header>
      <main> 
        <div className='content' >
        <div className='main' >
          <Filter></Filter>
          <Products></Products>
        </div>
        <div className='sidebar' >
            <Cart/>
        </div>
        </div>
      </main>
      <footer>All right are reserved</footer>
    </div>
    </Provider>

  );
  }
}

export default App;
