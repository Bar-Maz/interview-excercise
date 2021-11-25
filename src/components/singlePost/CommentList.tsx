import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useRequest} from "../../hooks/useRequest";
import {getCommentList} from "../../crud/getCommentList";
import {CommentListItem} from "./CommentListItem";
import {Comment} from "../../types/data";
import {ApiError} from "../error/ApiErrors";
import {getDataLength} from "../../utility/getDataLength";
import {NoData} from "../error/NoData";

interface CommentListProps {
    postId: number,
}

// component for displaying a list of comments under the post details

function CommentList({postId}: CommentListProps) {

    // get data, loading and error info using an axios function
    const {request: getCommentsData, state} = useRequest(getCommentList(postId), true);

    // define a way in which a single FlatList item is rendered
    const renderItem = ({item}: { item: Comment }) => <CommentListItem
        comment={item}
    />

    // fetch the comments after the component has mounted
    useEffect(() => {
        getCommentsData();
    }, [])

    // conditional rendering:
    // no data and loading        - activity indicator
    // error                      - error message
    // no error and data          - list of comments
    // no error but no comments   - no data message
    return (
        <View style={styles.root}>
            {state.isLoading && !getDataLength(state.data) ? (
                <ActivityIndicator
                    style={styles.loading}
                    color={"gray"}
                    size={"large"}
                />
            ) : (
                state.error ? (
                    <ApiError
                        error={state.error}
                        title={"Could not fetch comments"}
                        retryFunction={getCommentsData}
                    />
                ) : (
                    getDataLength(state.data) ? (
                        <FlatList
                            data={state.data}
                            renderItem={renderItem}
                            refreshing={state.isLoading}
                            overScrollMode={"never"}
                            onRefresh={getCommentsData}
                        />
                    ) : (
                        <NoData
                            message={"No comments found"}
                            retryFunction={getCommentsData}
                        />
                    )
                )
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white"
    },
    loading: {
        paddingTop: 20,
    }
})

export default CommentList;