import React, { PureComponent } from "react";
import Message from "../message";
import Send from "../send";
import "./chat.css";
import { socket } from "./socket";
import shortid from "shortid";

class Chat extends PureComponent {
  socket = socket;
  state = {
    currentUser: "",
    messages: [],
    message: "",
    isLoggedIn: false,
    users: {},
  };

  componentDidMount() {
    this.socket.on("message", (data) => {
      if (this.state.isLoggedIn) {
        this.setState(({ messages }) => {
          const newMessages = [...messages];
          if (newMessages.length > 10) {
            newMessages.shift();
          }
          return {
            messages: [
              ...newMessages,
              { user: data.user, text: data.message, id: shortid.generate() },
            ],
          };
        });
      }
    });
    this.socket.on("users", (data) => {
      // const usersData = { ...data };
      // console.log(usersData);
      this.setState({ users: data });
    });
  }

  changeName = (event) => {
    this.setState({ currentUser: event.target.value });
  };

  inputName = () => {
    const user = this.state.currentUser;
    if (user.trim().length > 0) {
      this.socket.emit("change:name", user);
      this.setState({ isLoggedIn: true });
    }
  };

  sendMessage = (event) => {
    event.preventDefault();
    const { currentUser, message } = this.state;
    if (message.trim().length > 0) {
      this.socket.emit("message", {
        user: currentUser,
        message: message.trim(),
      });
      this.setState({ message: "" });
    }
  };

  changeMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { message, messages, currentUser, isLoggedIn, users } = this.state;
    if (!isLoggedIn) {
      return (
        <main className="form-signin">
          <h4 className="form-floating mb-3">Introduce yourself, please</h4>
          <div className="form-floating mb-3">
            <input
              className="form-control"
              value={currentUser}
              onChange={this.changeName}
              placeholder="Enter Your Nickname"
              id="floatingInput"
            />
            <label for="floatingInput">Nickname</label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            onClick={this.inputName}
          >
            ??????????
          </button>
        </main>
      );
    }

    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="message-list col-md-9">
            <Send
              value={message}
              onChange={this.changeMessage}
              onSend={this.sendMessage}
            />
            <div className="messages">
              {messages.map((item) => {
                const { id } = item;

                return (
                  <Message item={item} currentUser={currentUser} key={id} />
                );
              })}
            </div>
          </div>
          <ul className="list-group col-md-3">
            {Object.values(users).map((user, i) => {
              return (
                <li className="list-group-item" key={i}>
                  {user}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Chat;
