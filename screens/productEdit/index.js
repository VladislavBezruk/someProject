import React, {Component} from 'react';
import {View, Text, Button, Image, TextInput } from 'react-native';
import Styles from "./styles";

export default class ProductEdit extends Component {
  constructor(props) {
    super(props);

    const item = this.props.navigation.getParam('item', 'empty');
    this.state = { name: item.name, price: item.price,  item: item, image_url: item.image_url };

    this.onEditProduct = this.onEditProduct.bind(this)
    this.onDeleteProduct = this.onDeleteProduct.bind(this)
  }

  onDeleteProduct(){
    this.props.deleteProduct(this.state.item)
    this.props.navigation.navigate('ProductList')
  }

  onEditProduct(){
    this.props.editProduct(this.state.item, this.state.image_url, this.state.name, this.state.price)
    this.props.navigation.navigate('ProductDetails')
  }

  render() {
    return (
      <View style={Styles.center}>
      <TextInput
        style={Styles.input}
        onChangeText={(image_url) => this.setState({image_url})}
        value={this.state.image_url}
      />
      <TextInput
        style={Styles.input}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
      />
      <TextInput
        style={Styles.input}
        onChangeText={(price) => this.setState({price})}
        value={this.state.price}
      />
      <Button
        title="Сохранить"
        onPress={this.onEditProduct}
      />
      <Button
        title="Удалить"
        onPress={this.onDeleteProduct}
      />
      </View>
    );
  }  
}