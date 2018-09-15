import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

import * as PostsApi from '../utils/PostsAPI'

const uuidv1 = require('uuid/v1');

class AddPostScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: '',
                body: '',
                author: '',
                category: '',
            }
        };
    }

    handleInputChange = (attr, value) => {
        this.setState({post: {...this.state.post, [attr]: value}})
    }

    handlePressSave = () => {
        //alert(JSON.stringify(this.state.post))
        let values = {...this.state.post, id: uuidv1(), timestamp: Date.now()}
        PostsApi.create(values)
            .then((result) => {
                alert(JSON.stringify(result))
            })
    }

    render() {
        const {post} = this.state

        return (
            <View style={{ flex: 1, padding: 5 }}>

                <Text>Add Post Screen</Text>

                <Text>Title:</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Tags!"
                    onChangeText={(text) => this.handleInputChange('title', text)} />


                <Text>Body:</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Body"
                    onChangeText={(text) => this.handleInputChange('body', text)} />


                <Text>Author:</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Author"
                    onChangeText={(text) => this.handleInputChange('author', text)} />


                <Text>Category:</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Category"
                    onChangeText={(text) => this.handleInputChange('category', text)} />


                <Button onPress={this.handlePressSave} title="Save" />

                <Text>{JSON.stringify(this.state)}</Text>

            </View>
        );
    }

}

export default AddPostScreen

