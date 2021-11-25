import React from "react";
import {Comment} from "../../types/data"
import {StyleSheet, Text, View} from 'react-native';

interface CommentListItemProps {
    comment: Comment,
}

// single comment on the list

export const CommentListItem = ({comment}: CommentListItemProps) => {

    return (
        <View style={styles.itemContainer}>
            <View style={styles.bodyContainer}>
                <Text>
                    {comment.body}
                </Text>
            </View>
            <View style={styles.emailContainer}>
                <Text>
                    {comment.email}
                </Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 10,
        marginVertical: 6,
        marginHorizontal: 12
    },
    emailContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#AAAAAA"
    },
    bodyContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#EEEEEE"
    },
})