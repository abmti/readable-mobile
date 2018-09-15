import React from 'react';
import { connect } from 'react-redux'
import {Text, View} from 'react-native';

import PostCard from '../../components/PostCard'
import * as PostsApi from '../../utils/PostsAPI'
import {load} from "../../actions/posts";

class DetailScreenContainer extends React.Component {

    static navigationOptions = {
        title: 'Detail Posts(Redux)',
    };

    state = {
        loading: true,
    }

    componentDidMount() {
        let id = this.props.navigation.getParam('id')

        //PostsApi.get(id)
        //    .then((result) => {
        //        this.setState({loading: false, post: result})
        //    })

        this.props.load(id)
            .then(() => {
                this.setState({loading: false})
            })

    }

    render() {

        //const {post} = this.state
        const {post} = this.props

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


const mapStateToProps = state => ({post: state.postReducer.post})
const mapDispatchToProps = { load }
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreenContainer)

