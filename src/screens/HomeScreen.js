import React from 'react';
import {Text, View, Button as RNButton} from 'react-native';
import { Button } from 'react-native-elements'

class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Readable',
            headerBackTitle: ' ',
            headerRight: (
                <RNButton
                    onPress={() => navigation.navigate('About')}
                    title="About"
                    color="#000"
                />
            ),
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Button title="Posts" onPress={() => this.props.navigation.navigate("Posts")} backgroundColor="blue" />

                <Button title="Posts (Redux)" onPress={() => this.props.navigation.navigate("PostsContainer")} backgroundColor="blue" style={{marginTop: 10}} />

            </View>
        );
    }

}

export default HomeScreen

