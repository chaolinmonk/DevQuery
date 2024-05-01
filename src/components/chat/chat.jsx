import React, {useState} from 'react'
import "./chat.css";
import ChatInput from './Input/input';
import ChatContainer from './chatcontainer/chatcontainer';
import {run} from '../../servicios/openai.js';
//import chat_input from './Input/input'
export default function Chat(){
    const [chatMessages, setChatMessages] = useState([]);
    function getDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date().toLocaleDateString('es-ES', options);
    }
    async function addChatMessage(message) {
        // Agregar el mensaje de usuario al estado
        setChatMessages(prevMessages => [...prevMessages, { content: message, user: true, Time: getDate()}]);
    
        // Obtener la respuesta de OpenAI
        const text = await run(message);
    
        // Agregar el mensaje de respuesta al estado
        setChatMessages(prevMessages => [...prevMessages, { content: text, user: false, Time:getDate() }]);
        
    }
    return(
        <div id="chatAi">
            <div id="chatContent">
                {chatMessages.map((message, index) => (
                    <ChatContainer key={index} MsgContent={message.content} user={message.user} Time={message.Time}/>
                ))}
            </div>
            <ChatInput onEnterPress={addChatMessage}/>
        </div>
    )
}


