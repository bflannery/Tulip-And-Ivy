import React from 'react';
import InstagramPost from './InstagramPost';

export default React.createClass({
  render() {
    let posts = this.props.posts.map((post, i ,arr) => {
      return <InstagramPost key={i} post={post}/>;
    });
    return (
      <div className="instagram-container">
        <div className="title-container">
          <h2> Follow Us On Instagram </h2>
          <i className="title-icon fa fa-instagram" aria-hidden="true"></i>
        </div>
          <ul className="instagram-feed">
            {posts}
          </ul>
      </div>
    );
  }
});
