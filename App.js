import React, {Component} from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./store/reducers";
import AppContainer from "./modules/navigator";

const store = createStore(reducers);

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <AppContainer/> 
            </Provider>
        )
    }
}