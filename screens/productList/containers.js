import React, {Component} from "react";
import {connect} from "react-redux";
import ProductList from "./index"
import {showList} from "../../store/products/actions"

class Container extends Component {
    render() {
    return <ProductList 
    list={this.props.list} 
    navigation={this.props.navigation}/>
    }  
}

const putStateToProps = state => { 
    return {
        list: state.products.list
    };
}

const putDispatchToProps = {
    showList
}

export default connect(putStateToProps, putDispatchToProps)(Container)