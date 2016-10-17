import React, {PropTypes} from 'react';

class AddBlogPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: ""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const post = this.state.post;
    post.title = event.target.value;
    this.setState({post : post});
  }

  onSave(event) {
    alert(this.state.post.title);
  }

  render() {
    return (
      <div>
        <h1>Add Blog Post</h1>
        <input type="text" onChange={this.onChange} value={this.state.post.title} />
        <input type="submit" value="Save" onSubmit={this.onSave} />

      </div>
    );
  }
}

AddBlogPostPage.propTypes = {
  //onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  post: PropTypes.object
};

export default AddBlogPostPage;

