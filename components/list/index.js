import React, {Component} from 'react';
import {SectionList, Text, Button, View} from 'react-native';
import Styles from "./styles";
import { ListItem } from 'react-native-elements'
import list from '../../data/data'

export default class ListOfProducts extends Component {
    render() {
    return (
        list.map((el, i) => (
            <ListItem
            key={i}
            leftAvatar={{ source: { uri: el.avatar_url } }}
            title={el.name}
            onPress={() => this.props.navigation.navigate('ProductDetails', {item: el})}
            />
        ))
    );
    }  
}
