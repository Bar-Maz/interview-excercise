import {Post} from "../types/data";

// define parameters for each navigator route
export type RootStackParamList = {
    PostList: undefined;
    SinglePost: Post;
};