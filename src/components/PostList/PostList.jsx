import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa/index.mjs';
import { FiDelete, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import Moment from 'react-moment'

class PostList extends Component {
    static PropTypes = {
        title: PropTypes.string,
        posts: PropTypes.array
    }
    static defaultProps = {
        title: 'Posts'
    }
    render() {
        const {posts, title} = this.props;
        return (
            <div>
                <h2>{title}</h2>
                {posts ? (
                    <p>Our Post List goes here</p>
                ) : (
                    <p>Create your first post!</p>
                )}
                {posts ? (
                    <ListGroup>
                        {posts.map((post) => (
                            <ListGroupItem key={post.id}>
                                {post.title}&nbsp;
                                <FaEdit size={16} />&nbsp;
                                <FiDelete size={16} />&nbsp;
                                <FiThumbsUp size={16} />&nbsp;
                                <FiThumbsDown size={16} />
                                <div>
                                    <Moment forma="MMM Do YY" unix>{post.timestamp / 1000}</Moment>&nbsp;
                                    <strong>Author:</strong>{post.author}&nbsp; |&nbsp;
                                    <strong>Store:</strong>{post.voteScore}
                                </div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}

export default PostList;