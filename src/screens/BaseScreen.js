import React from 'react';
import {Text, View} from 'react-native';

import PostCard from '../components/PostCard'
import * as PostsApi from '../utils/PostsAPI'

class BaseScreen extends React.Component {

    static navigationOptions = {
        title: 'Detail Posts',
    };

    state = {
        loading: true,
        post: {}
    }

    componentDidMount() {
        let id = this.props.navigation.getParam('id')
        PostsApi.get(id)
            .then((result) => {
                this.setState({loading: false, post: result})
            })
    }

    render() {

        const {post} = this.state

        return (
            <View style={{ flex: 1 }}>

                {this.state.loading ? (
                    <Text>Aguarde...</Text>
                ) : (
                    <PostCard key={1} index={1} post={post} showBtnReadMore={false} />
                )}

            </View>
        );
    }
}



export default BaseScreen

