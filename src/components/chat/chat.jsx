import React, {useState} from 'react'
import "./chat.css";
import ChatInput from './Input/input.jsx';
import ChatContainer from './chatcontainer/chatcontainer.jsx';
import {run} from '../../servicios/openai.js';
//import chat_input from './Input/input'
export default function Chat(){
    const [chatMessages, setChatMessages] = useState([]);
    const [visible, setVisible] = useState(false);
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
    const chatVisible = ()=>{
        setVisible(!visible);
        
    }
    const chatea = visible ? 'Clickea para minimizar' : 'Clickea para chatear con la IA'
    return(
        <div id="chatAi" style={{ height: visible ? '500px' : '30px', overflow: visible ? 'auto' : 'hidden'}}>
            <div id="top_border" onClick={chatVisible}>
                <p style={{color: '#fff', paddingLeft: '10px'}}>{chatea}</p>
            </div>
            <div id="chatContent" >
                {chatMessages.map((message, index) => (
                    <ChatContainer key={index} MsgContent={message.content} user={message.user} Time={message.Time}/>
                ))}
            </div>
            <ChatInput onEnterPress={addChatMessage}/>
        </div>
    )
}


