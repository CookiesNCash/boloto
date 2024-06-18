import { useState } from "react"
import { IoIosSend } from "react-icons/io";

export default function MessageInput () {
    const [message, setMessage] = useState('');

    const sendMessage = (newMessage) => {

    }

    return (
        <div className="flex-messageInput">
            <div className="messageInput">
                <div className="input_btn_message">
                    <input className="inputMessage" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Новый квак"/>
                    <div className="btn hover-btn-grey" onClick={() => sendMessage(message) }>
                        <IoIosSend />
                    </div>
                </div>
            </div>
        </div>
    )
}