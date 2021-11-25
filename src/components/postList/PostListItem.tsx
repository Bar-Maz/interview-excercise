import React from "react";
import {Post} from "../../types/data"
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface PostListItemProps {
    post: Post,
    onPress: () => void
}

// single post on the list

export const PostListItem = ({post, onPress}: PostListItemProps) => {

    // render the title and body of a given post, keep the title in one line if it doesn't fit in the container

    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}
                      ellipsizeMode='tail'
                      numberOfLines={1}
                >
                    {post.title}
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text
                    ellipsizeMode='tail'
                    numberOfLines={5}
                >
                    {post.body}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 15,
        marginVertical: 8,
        marginHorizontal: 16
    },
    titleContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#AAAAAA"
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
    },
    bodyContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:  "#EEEEEE"
    },
    body: {
        fontSize: 20,
    }

})