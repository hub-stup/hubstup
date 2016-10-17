import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Posts extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderHeader(id, imageName, videoURL) {
    if (videoURL) {
      return (
        <div className="video">
          <div className="iframe-wrapper">
            <iframe src={videoURL} width="620" height="350" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
          </div>
        </div>
      );
    }
    return (
      <Link className="pic" to={"posts/" + id}>
        <img src={"images/" + imageName} className="img-responsive" alt="blogpost"/>
      </Link>
    );
  }

  renderTitle(id, title) {
    return(
      <div className="title">
        <Link className="pic" to={"posts/" + id}>
          {title}
        </Link>
      </div>
    );
  }

  renderAuthorAndDate(author, date) {
    return (
      <div className="author">
        <img src="images/testimonials/testimonial2.jpg" className="avatar" alt="author"/>
        {author}, {date}
      </div>
    );
  }

  renderTags(tags) {
    return tags.map(tag => {
      return(
        <Link className="" to={"tag/" + tag} key={tag}>
          {tag}
        </Link>
      );
    });
  }

  renderIntro(intro) {
    return(
      <p className="intro">
      {intro}
      </p>
    );
  }

  renderPosts(posts) {

    return posts.map(post => {
      return (
      <div className="post" key={post.id}>
        {this.renderHeader(post.id, post.image, post.video)}
        {this.renderTitle(post.id, post.title)}
        {this.renderAuthorAndDate(post.author, post.date)}
        {this.renderTags(post.tags)}
        {this.renderIntro(post.intro)}
        <Link classname="continue-reading" to={"posts/" + post.id}>
          Continue reading this post
        </Link>
      </div>
      );
    });
  }

  render() {

    const { posts, error } = this.props.postsList;

    return (
      <div id="blog">
        <div id="posts">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                {this.renderPosts(posts)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Posts.propTypes = {
//  fetchPosts : PropTypes.func.isRequired,
//  postsList : PropTypes.object.isRequired
//};

export default Posts;
