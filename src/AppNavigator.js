import React from 'react';
import {createStackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import PostsScreen from './screens/PostsScreen'
import DetailScreen from './screens/DetailScreen'
import AddPostScreen from './screens/AddPostScreen'

import PostsScreenContainer from './screens/containers/PostsScreenContainer'
import DetailScreenContainer from './screens/containers/DetailScreenContainer'

export default createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    About: {
        screen: AboutScreen
    },
    Posts: {
        screen: PostsScreen
    },
    Detail: {
        screen: DetailScreen
    },
    AddPost: {
        screen: AddPostScreen
    },
    DetailContainer: {
        screen: DetailScreenContainer
    },
    PostsContainer: {
        screen: PostsScreenContainer
    },
});

