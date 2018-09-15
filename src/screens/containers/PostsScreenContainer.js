import React from 'react';
import { connect } from 'react-redux'
import {Button as RNButton, FlatList, StyleSheet, View} from 'react-native';

import PostCardRedux from '../../components/PostCardRedux'
import { search } from '../../actions/posts';

class PostsScreenContainer extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Posts(Redux)',
            headerRight: (
                <RNButton
                    onPress={() => navigation.navigate('AddPost')}
                    title="Create Post"
                    color="#000"
                />
            ),
        }
    };


    componentDidMount() {
        this.props.search()
    }


    handlePressDetail = (itemId) => {
        this.props.navigation.navigate("DetailContainer", {id: itemId})
    }

    renderItem = ({item, index}) => {
        return (
            <PostCardRedux key={index} index={index} post={item} showBtnReadMore={true} handlePressDetail={this.handlePressDetail} />
        )
    }

    render() {
        const {listLocal} = this.props
        return (
            <View style={{ flex: 1 }}>

                <FlatList
                    data={listLocal}
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


const mapStateToProps = state => ({listLocal: state.postReducer.list})
const mapDispatchToProps = { search }
export default connect(mapStateToProps, mapDispatchToProps)(PostsScreenContainer)

