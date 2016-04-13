import React, {
  Component, PropTypes
}
from 'react';

class MessageItem extends React.Component {
  render() {
    const mesgList = this.props.mesgList;
    var count = 0;
    return (
      <div>
        <div className="message-list">
          {mesgList.map(function(msg) {
            count += 1;
            let className = "message-item message-from-me";
            if (msg.who === "other") className = "message-item message-from-other";
            return (
              <div className={className}>
                <span>{msg.text}</span>
              </div>
              );
          })}
        </div>
      </div>
    );
  }
}

export default MessageItem;