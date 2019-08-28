import React, {Component} from "react";
import {connect} from "react-redux";
import ProductDetails from "./index"
import {editProduct, deleteProduct} from "../../store/products/actions"

class Container extends Component {
    render() {
        return <ProductDetails 
            list={this.props.list} 
            navigation={this.props.navigation}
            />
    }  
}

const putStateToProps = state => { 
    return {
        list: state.products.list
    };
}

const putDispatchToProps = {
}

export default connect(putStateToProps, putDispatchToProps)(Container)