import * as ReadableApi from './ReadableApi';
import {RECEIVE_POST, RECEIVE_VOTE_POST} from '../actions/types';

//Get Posts
export const getPost = () => dispatch => (
    ReadableApi.getPosts()
        .then(posts => dispatch(receivePosts(posts)))
)
const receivePosts = posts => ({
    type: RECEIVE_POST,
    posts
})