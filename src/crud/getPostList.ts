import axios from "../lib/axios";
import {Post} from "../types/data";


// function to get the list of posts
export const getPostList = (): Promise<{ data: Post[] }> => {
    return axios.get(`/posts`)
}
