import React, {
  Component,
  PropTypes
}
from 'react';
import {
  Link
} from 'react-router';
import ThreadItem from './ThreadItem';
import MessageItem from './MessageItem';

class ChatApp extends Component {
  constructor(props) {
    super(props);

    var m1 = [this.MsgGenMe("愛要精心來雕刻"), this.MsgGen("我是米開朗基羅")];
    var m2 = [this.MsgGen("氣球～高飛～"), this.MsgGen("野豬騎士來囉")];
    var m3 = [this.MsgGen("Hi"), this.MsgGen("欸我姆斯拉")];

    this.state = {
      userName: ["米開朗基羅", "野豬騎士", "LeBron James"],
      userImg: ["https://imgur.com/jINxrKy.jpg",
        "http://i3.shouyou.itc.cn/v3/coc/2014/04/14/0414095945903197761.png",
        "https://imgur.com/goFCHGA.jpg"
      ],
      lastTime: ["上午00:00", "上午00:00", "上午00:00"],
      mesgArr: [m1, m2, m3],
      index: [0, 1, 2],
      targetIndex: 0
    };

    this.handleClickThread = this.handleClickThread.bind(this);
    this.handleMesgInput = this.handleMesgInput.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  MsgGen(text) {
    var obj = {
      who: "other",
      text: text
    };
    return obj;
  }
  MsgGenMe(text) {
    var obj = {
      who: "me",
      text: text
    };
    return obj;
  }

  handleClickThread(i) {
    console.log(i);
    this.setState({
      targetIndex: i
    });
  }

  handleMesgInput(event) {
    if (event.keyCode === 13 && event.target.value !== "") {
      var text = event.target.value;
      var time = new Date().toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      });
      event.target.value = "";
      let tempArr = this.state.mesgArr;
      var msgObj = {
        who: "me",
        text: text
      };
      tempArr[this.state.targetIndex].push(msgObj);
      let tempTime = this.state.lastTime;
      tempTime[this.state.targetIndex] = time;
      this.setState({
        mesgArr: tempArr,
        lastTime: tempTime
      });
    }
  }

  render() {
    console.log(this.state.mesgArr);
    const index = this.state.index;
    const {
      userName,
      userImg,
      lastTime,
      mesgArr,
      targetIndex
    } = this.state;
    let handleClickThread = this.handleClickThread;

    return (
      <div className="chat-app clearfix">
        <div className="chat-app_left">
          <div className="heading">
            <h3 className="messenger-title">Messenger</h3>
          </div>
          <div className="thread-list">
            {index.map(function(i) {
              let lastMesg = mesgArr[i][mesgArr[i].length -1].text;
              return <ThreadItem key={i} index={i}
                       name={userName[i]} 
                       lastMesg={lastMesg} 
                       lastTime={lastTime[i]}
                       userImg={userImg[i]} 
                       onClick={handleClickThread}/>;
            })}
          </div>
        </div>
        <div className="chat-app_right">
          <div className="heading">
            <div className="current-target">{userName[targetIndex]}</div>
			    </div>
          <MessageItem mesgList={mesgArr[targetIndex]}/>
          <div className="footer">
				    <input className="new-message" type="text" onKeyDown={this.handleMesgInput}/>
			    </div>
        </div>
      </div>
    );
  }
}

export default ChatApp;