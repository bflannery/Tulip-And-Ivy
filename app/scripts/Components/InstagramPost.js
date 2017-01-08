import React from 'react';

export default React.createClass({
  render() {
    console.log(this.props);
      return (
        <li className="instagram-post">
          <img className="image" src={this.props.post.image.url} />
          <span className="caption"> {this.props.post.caption} </span>
          <div className="like-comment-container">
            <img className="insta-button" src='../../assets/images/heart.png'/>
            <span className="insta-count"> {this.props.post.likes} </span>
            <img className="insta-button" src='../../assets/images/comment.png'/>
            <span className="insta-count"> {this.props.post.comments} </span>
          </div>
        </li>
      );
  }
});
