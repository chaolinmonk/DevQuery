import React ,{useState}from "react";
import "./input.css"

export default function ChatInput(props){
    const [message, setMessage] = useState("hola mundsfsdfdo");
    console.log(message)
    function handleChange(event) {
        setMessage(event.target.value);
        console.log(event.target);
    }
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            props.onEnterPress(message);
            setMessage("");
        }
    }
    
    return (
        <textarea
            id="ai_chat_input"
            type="text"
            placeholder="Preguntame algo"
            value={message}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
}