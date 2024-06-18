import { useState} from "react"
import { useDispatch } from "react-redux";
import { addMessage } from "@/redux/slices/messageSlise";
import { IoIosSend } from "react-icons/io";
import io from 'socket.io-client';

export default function MessageInput () {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    // const socket = io(`${process.env.NEXT_PUBLIC_SOCKET}`);

    // socket.on('message', ({ data }) => {
    //     dispatch(addMessage({message:data}))
    // })

    const sendMessage = (newMessage: string) => {
        // socket.emit('message', {
        // data: newMessage,
        // });
        dispatch(addMessage({message:newMessage}))
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
// const socket = io('http://localhost:80');
// const handleSubmit = () => {
//     socket.emit('message', {
//         data: message,
//     });
// };
// socket.on('message', ({ data }) => {
//     console.log(data)
// })