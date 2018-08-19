import React, { Component } from "react";
import "./Chats.css";
import { deleteMessage } from "../actions"
import store from "../store";


const Chat = ({ message, onDelete }) => {
  const { text, is_user_msg } = message;
  return (
    <div className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
      <i className="fa fa-close Chat__Close" onClick={onDelete}/>
      <p className="Chat__Text">{text}</p>
    </div>
  );
};

class Chats extends Component {

  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleDelete(number) {
    const { activeUserId } = store.getState();
    store.dispatch(deleteMessage(number, activeUserId));
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  render() {
    const vm = this;

    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} onDelete={this.handleDelete.bind(vm, message.number)}/>
        ))}
      </div>
    );
  }
}

export default Chats;
