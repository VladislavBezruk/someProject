import React, {Component} from "react";
import {connect} from "react-redux";
import ProductEdit from "./index"
import {editProduct, deleteProduct} from "../../store/products/actions"

class Container extends Component {
    render() {
        return <ProductEdit 
            list={this.props.list} 
            navigation={this.props.navigation}
            deleteProduct={this.props.deleteProduct}
            editProduct={this.props.editProduct} 
            />
    }  
}

const putStateToProps = state => { 
    return {
        list: state.products.list
    };
}

const putDispatchToProps = {
    editProduct,
    deleteProduct
}

export default connect(putStateToProps, putDispatchToProps)(Container)