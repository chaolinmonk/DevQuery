import React from "react";
import "./chatcontainer.css";
import ChatMsg from "./chatmsg/chatmsg";
export default function ChatContainer(props){

    
    const chat_container = !props.user ? "chat_container_user_false" : "chat_container";
    console.log(props.Time)
    return(
        <div className={chat_container}>
            <ChatMsg MsgContent = {props.MsgContent} user={props.user} Time={props.Time}/>
        </div>
    )
};


