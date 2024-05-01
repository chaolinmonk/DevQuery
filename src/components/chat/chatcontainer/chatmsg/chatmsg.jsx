import React from "react";
import "./chatmsg.css";
export default function ChatMsg(props){

    const chat_msg = !props.user ? "chatmsg_user_false" : "chatmsg";
    console.log("fecha de mensaje",props.Time)
    return(
        <div className={chat_msg}>
            <p>
                {props.MsgContent}
            </p>
            <div className="date_msg">{props.Time}</div>
        </div>
    )
}