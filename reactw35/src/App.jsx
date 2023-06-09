import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  state = {
    comments: [],
    active: null,
    form: {
      name: '',
      comment: ''
    }
  }
  target(id) {
    this.setState({ active: id });
  }
  addComment = (e) => {
    e.preventDefault();
    this.setState({
      comments: [
        {
          name: this.state.form.name,
          comment: this.state.form.comment
        },
        ...this.state.comments
      ], active: +e.target.classList.contains("new_comments"),
      form: {
        name: '',
        comment: ''
      }
    })
  }
  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    })
  }
  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  render() {
    const { comment, active } = this.state;
    return (
      <div className="App">
        {this.state.comments.map((comment, i) => <div key={comment.id} className='comment_box'>
          <span>{comment.id} </span>
          <div className='user_id'>
            <a href="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg"><img src="https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-54.jpg" width="50"
              height="50" alt="avatar" /></a>
            <span>   {comment.name}</span></div>
          <div className={i === active ? 'new_comments' : 'comments'}>{comment.comment}</div>
          <button className="btn_del" onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
        </div>)}
        <div className="form-name">
          <label>Имя: <input
            type="text"
            value={this.state.form.name}
            name="name"
            onChange={this.handleChange} /></label>
          <label>Комментарий:<textarea
            name="comment"
            value={this.state.form.comment}
            onChange={this.handleChange}></textarea>
          </label>
          <button onClick={this.addComment}>Добавить комментарий</button>
        </div>
      </div>
    )
  }
}
