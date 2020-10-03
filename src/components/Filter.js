import { connect } from 'react-redux'
import React, { Component } from 'react'
import {sortProducts} from '../actions/productActions'

 class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts ? (
                <div>Loading...</div>
            ) : (
            <div className='filter' >
                <div className='filter-result' >
                    {this.props.filteredProducts.length} Products {" "}
                </div>
                <div className='filter-sort' >
                    SortBy Price {" "}
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}  >
                        <option value='latest'>Latest</option>
                        <option value='lowest' >Low to High</option>
                        <option value='highest' >High to Low</option>
                    </select>
                </div>      
            </div>
            )
        )
    }
}

export default connect((state)=>({
    sort:state.products.sort,
    products:state.products.items,
    filteredProducts: state.products.filteredItems
}), {
    sortProducts
})(Filter);
