import React from 'react';
import {Button as RNButton, FlatList, StyleSheet, View} from 'react-native';

import PostCard from '../components/PostCard'
import * as PostsApi from '../utils/PostsAPI'

class PostsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Posts',
            headerRight: (
                <RNButton
                    onPress={() => navigation.navigate('AddPost')}
                    title="Create Post"
                    color="#000"
                />
            ),
        }
    };

    state = {
        list: []
    }


    componentDidMount() {
        PostsApi.getAll().then((result) => {
            this.setState({list: result})
        })
    }


    handlePressDetail = (itemId) => {
        this.props.navigation.navigate("Detail", {id: itemId})
    }

    renderItem = ({item, index}) => {
        return (
            <PostCard key={index} index={index} post={item} showBtnReadMore={true} handlePressDetail={this.handlePressDetail} />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <FlatList
                    data={this.state.list}
                    keyExtractor={(item, index) => index}
                    renderItem={this.renderItem} />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
});

export default PostsScreen

