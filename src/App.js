import React, { Component } from 'react';
import styles from './App.module.scss';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    let posts = [
      {
          id: '8xf0y6ziyjabvozdd253nd',
          timestamp: 1467166872634,
          title: 'React rocks!',
          body: 'Everyone says so after all.',
          author: 'thingtwo',
          category: 'react',
          voteScore: 6,
          deleted: false,
          commentCount: 2
      },
      {
          id: '6ni6ok3ym7mf1p33lnez',
          timestamp: 1468479767190,
          title: 'Learn Redux in 10 minutes!',
          body: 'Just kidding. It takes more than 10 minutes to learn technology.',
          author: 'thingone',
          category: 'redux',
          voteScore: -5,
          deleted: false,
          commentCount: 0
      }
    ];
    const votePost = (id, action) => {
      posts = posts.map(post => {
          if(post.id === id) {
              post.voteScore = action === 'up' ? post.voteScore + 1 : post.voteScore - 1;
              console.log(post.id, post.voteScore);
          }
          return post;
      });
    }
    return (
      <div className={styles.App}>
        <Dashboard posts={posts} votePost={votePost}/>
      </div>
    );
  }
}

export default App;
