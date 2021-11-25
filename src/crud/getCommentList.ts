import axios from "../lib/axios";
import {Comment} from "../types/data";


// function to get the comments for a given post
//  uncomment the commented promise to return an empty array after 2 seconds of loading
//  (testing the loading indicator and NoData component)
export const getCommentList = (postId: number) => (): Promise<{ data: Comment[] }> => {
    // return new Promise(resolve => setTimeout(() => resolve({data: []}), 2000));
    return axios.get(`/posts/${postId}/comments`)
}
