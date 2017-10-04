import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = {
    userName: '',
    message: '',
    userNameTextColor: 'red',
    messageTextColor: 'red',
  };

  handleUserNameChange = e => {
    e.target.value.length > 9 ?
      this.setState({userNameTextColor: '#000'}) :
      this.setState({userNameTextColor: 'red'});

    this.setState({
      userName: e.target.value});
  };

  handleMessageChange = e => {
    e.target.value.length > 9 ?
      this.setState({messageTextColor: '#000'}) :
      this.setState({messageTextColor: 'red'});

    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = e => {
    const {userName, message} = this.state;
    e.preventDefault();

    if (userName.length < 10 || userName.length > 50 ||
        message.length < 10 || message.length > 50) {
      return null;
    }

    this.setState({
      userName: '',
      message: '',
    });
  };

  render() {
    const {userName, message, userNameTextColor, messageTextColor} = this.state;
    return (
    <form onSubmit={this.handleSubmit} >
      <input type="text" placeholder="User name" value={userName} onChange={this.handleUserNameChange}
             style={{color: userNameTextColor}}/>

      <input type="text" placeholder="Your comment" value={message} onChange={this.handleMessageChange}
             style={{color: messageTextColor}}/>
      <input type="submit"/>
    </form>
    );
  }
}

Form.propTypes = {};
Form.defaultProps = {};

export default Form;
