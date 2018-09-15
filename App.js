/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'

import store from './src/config/store'
import AppNavigator from './src/AppNavigator'

type Props = {};
export default class App extends Component<Props> {

    state = {
        loading: true,
        isLogged: false
    }

    componentDidMount() {

        //ApiStorage.getUser().then((user) => {
        //    this.setState({loading: false, isLogged: user != null});
        //})

        this.setState({loading: false, isLogged: false});

        //console.disableYellowBox = true;
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {this.state.loading ? (
                        <Text>Aguarde...</Text>
                    ) : (
                        <AppNavigator isLogged={this.state.isLogged} />
                    )}
                </View>
            </Provider>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});