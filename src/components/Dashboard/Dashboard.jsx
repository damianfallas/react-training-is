import React, { Component } from 'react';
import PostList from '../PostList/PostList';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <PostList />
            </div>
        );
    }
}

export default Dashboard;