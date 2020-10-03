//feature 1
import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import {Provider} from 'react-redux';
import store from './store';

class App extends React.Component {
  constructor(){
    super();
    this.state= { 
      cartItems: localStorage.getItem("cartItems") ?
      JSON.parse(localStorage.getItem("cartItems")) : []
  }
  
  }

  createOrder = (order) =>{
    alert("Need to save your order" + order.name)
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems:cartItems.filter((x)=>x.id !== product.id)
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x)=>x.id !== product.id)))
  }

  addToCart = (product)=>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item)=>{
      if(item.id===product.id){
        item.count++;
        alreadyInCart = true;
      }
      
    });
    if(!alreadyInCart){
      cartItems.push({...product, count:1});
    }
    this.setState({cartItems})
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  };
  
 
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
          <Products addToCart={this.addToCart}></Products>
        </div>
        <div className='sidebar' >
            <Cart cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
            createOrder = {this.createOrder}
            />
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
