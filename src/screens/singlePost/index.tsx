import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../RootStackParams';
import CommentList from "../../components/singlePost/CommentList";

//single post screen
function SinglePostScreen() {
    // get params to read the post
    // could also be read from the API
    const {params} = useRoute<RouteProp<RootStackParamList, 'SinglePost'>>()

    //render title, body and the list of comments
    return (
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}
                >
                    {params.title}
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text>
                    {params.body}
                </Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}
                >
                    Comments
                </Text>
            </View>
            <View style={styles.commentListContainer}>
                <CommentList postId={params.id}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    titleContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "#AAAAAA"
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
    },
    bodyContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "#EEEEEE"
    },
    body: {
        fontSize: 20,
    },
    commentListContainer: {
        flex: 1
    }
})

export default SinglePostScreen;