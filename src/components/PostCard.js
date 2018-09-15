import React from 'react';
import {Button as RNButton, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Card, Divider} from 'react-native-elements'
import moment from 'moment'
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

class PostCard extends React.Component {


    render() {

        const {post, index} = this.props

        return (
            <Card key={index} containerStyle={{margin: 5}}>

                <TouchableWithoutFeedback onPress={() => this.handlePressDetail(post.id)}>
                    <Text>{post.title}</Text>
                </TouchableWithoutFeedback>

                <View style={{flexDirection: 'row', width: '100%', marginBottom: 5}}>
                    <View style={{flex: 1}}>
                        <Text>
                            <FAIcon name="user" size={12} color="#ccc" />
                            {' '}
                            {post.author}
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: 'center'}}>
                            <FAIcon name="clock-o" size={12} color="#ccc" />
                            {' '}
                            {moment(post.timestamp).format('MM/D H:mm')}
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: 'right'}}>
                            <EntypoIcon name="message" size={12} color="#ccc" />
                            {' '}
                            {post.commentCount} Comments
                        </Text>
                    </View>
                </View>

                <Divider />

                <Text style={{marginTop: 14, marginBottom: 14}}>
                    {post.body}
                </Text>

                <Divider />

                <View style={{marginTop: 10, flexDirection: 'row', width: '100%'}}>
                    <View style={{flex: 1}}>
                        {this.props.showBtnReadMore && (<RNButton onPress={() => this.props.handlePressDetail(post.id)} title="Read more" />)}
                    </View>
                    <View style={{flex: 1}}>
                        <View style={{ flexDirection: 'row', width: '100%', verticalAlign: 'top'}}>
                            <Text style={{marginTop: 10}}>
                                {post.voteScore} Votes
                            </Text>
                            <RNButton
                                title='up' />
                            <RNButton
                                title='down' />
                        </View>
                    </View>
                </View>

            </Card>
        )
    }

}

export default PostCard