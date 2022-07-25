import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';


class Posts extends Component {

    componentWillMount(){
      this.props.fetchPosts();
      this.props.deletePost();
    }
 
    componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
      }
    }
  render() {
    const postItems = this.props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={this.props.deletePost.bind(this, post.id)}>delete</button>
            
        </div> 
    ));

    return (
      <div>
        <h1>Posts</h1>
        <h2>{this.props.posts.length}</h2>
        {postItems  }
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  newPost: PropTypes.object,
  deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})
export default connect(mapStateToProps, {fetchPosts, deletePost})(Posts)