import React, {
  Component, PropTypes
}
from 'react';

class ThreadItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }
  render() {
    // html -> jsx
    return (
      <li onClick={this.handleClick} className="thread-item">
        <div className="clearfix">
          <div className="thread-item_left">
            <img className="img-circle" src={this.props.userImg} width="50" height="50" alt="" class="img"/>
          </div>
					<div className="thread-item_right">
              <div className="thread-from">{this.props.name}</div>
              <span className="thread-content">
                {this.props.lastMesg}
              </span>
              <span className="thread-time">{this.props.lastTime}</span>
					</div>
				</div>
			</li>
    );
  }
}

export default ThreadItem;