//feature 1
import React from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json'

class App extends React.Component {
  constructor(){
    super();
    this.state= { 
      products: data.products,
      sort : "",
      cartItems:[]
  }
  
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems:cartItems.filter((x)=>x.id !== product.id)
    })
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
  };
  
sortProducts=(event)=>{
  const sort = event.target.value;
  this.setState((state)=>({
    sort:sort,
    products:this.state.products
    .slice()
    .sort((a,b)=>
    sort === "lowest" 
    ? a.price > b.price ? 
    1 : -1
     : sort === "highest" 
    ? a.price < b.price ?
     1:-1
     : a.id < b.id
      ? 1 :-1),
  }));
};
 
  render(){
  return (
    <div className="grid-container">
      <header>

        <a href="/" >Fresh Mart</a>
      </header>
      <main> 
        <div className='content' >
        <div className='main' >
          <Filter count={this.state.products.length}
          sort={this.state.sort}
          sortProducts={this.sortProducts}
          ></Filter>
          <Products products={this.state.products}
          addToCart={this.addToCart}
          ></Products>
        </div>
        <div className='sidebar' >
            <Cart cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
            />
        </div>
        </div>
      </main>
      <footer>All right are reserved</footer>
    </div>
  );
  }
}

export default App;
