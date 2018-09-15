import React from 'react';
import {Text, View, Button} from 'react-native';

class AboutScreen extends React.Component {

    static navigationOptions = {
        title: 'About',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Udacity React Nanodegree - Project Readable
                </Text>

                <Text style={{marginTop: 10, marginBottom: 20}}>
                    Developed by: Adriano Medeiros (github.com/abmti)
                </Text>

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

export default AboutScreen

