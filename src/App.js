import React, { Component } from 'react';
import styles from './App.module.scss';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Dashboard posts={this.state.posts} votePost={this.votePost}/>
      </div>
    );
  }
}

export default App;
