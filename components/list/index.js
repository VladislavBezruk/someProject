import React, {Component} from 'react';
import {SectionList, Text, Button, View} from 'react-native';
import { ListItem } from 'react-native-elements'
import Styles from "./styles";

export default class ListOfProducts extends Component {
    render() {
    return (
        this.props.list.map((el, i) => (
            <ListItem
            key={i}
            leftAvatar={{ source: { uri: el.image_url } }}
            title={el.name}
            onPress={() => this.props.navigation.navigate('ProductDetails', {item: el})}
            />
        ))
    );
    }  
}
