import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import {useRequest} from "../../hooks/useRequest";
import {getPostList} from "../../crud/getPostList";
import {PostListItem} from "../../components/postList/PostListItem";
import {Post} from "../../types/data";
import {ApiError} from "../../components/error/ApiErrors";
import {getDataLength} from "../../utility/getDataLength";
import {NoData} from "../../components/error/NoData";

type PostListScreenProp = StackNavigationProp<RootStackParamList, 'PostList'>;

// screen visible after the application startup, list of all posts

function PostListScreen() {
    // get navigation from the useNavigation hook to redirect to the single post
    const navigation = useNavigation<PostListScreenProp>();

    // get data, loading and error info using an axios function
    const {request: getPostsData, state} = useRequest(getPostList, true);

    // handle item press - redirect to a single post
    const handleItemPress = (item: Post) => () => navigation.navigate("SinglePost", item);

    // define a way in which a single FlatList item is rendered
    const renderItem = ({item}: { item: Post }) => <PostListItem
        post={item}
        onPress={handleItemPress(item)}
    />

    // fetch the posts after the component has mounted
    useEffect(() => {
        getPostsData();
    }, [])

    // conditional rendering:
    // no data and loading        - activity indicator
    // error                      - error message
    // no error and data          - list of posts
    // no error but no posts      - no data message
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
                        title={"Could not fetch posts"}
                        retryFunction={getPostsData}
                    />
                ) : (
                    getDataLength(state.data) ? (
                        <FlatList
                            data={state.data}
                            renderItem={renderItem}
                            refreshing={state.isLoading}
                            overScrollMode={"never"}
                            onRefresh={getPostsData}
                        />
                    ) : (
                        <NoData
                            message={"No posts found"}
                            retryFunction={getPostsData}
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

export default PostListScreen;