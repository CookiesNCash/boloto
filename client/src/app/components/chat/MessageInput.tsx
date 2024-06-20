import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosSend } from 'react-icons/io';
import io from 'socket.io-client';
import { addMessage } from '@/redux/slices/messageSlise';

export default function MessageInput() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  // const messagesEndRef = useRef(null);
  // const scrollToBottom = () => {
  //     if (messagesEndRef.current) {
  //         messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  // };

  const socket = io(`${process.env.NEXT_PUBLIC_SOCKET}`);

  socket.on('message', ({ data }) => {
    console.log(data)
    dispatch(addMessage(data))
  });

  const sendMessage = (newMessage: string) => {
    socket.emit('message', {
      data: {
        msg: newMessage,
        userId: 'hello'
      },
    });
    const sendMessage = {
      id: Date.now().toString(),
      message: newMessage,
    };
    dispatch(addMessage(sendMessage));
    setMessage('');
    // scrollToBottom();
  };

  return (
    <div className="flex-messageInput">
      <div className="messageInput">
        <div className="input_btn_message">
          <input
            className="inputMessage"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Новый квак"
          />
          <div
            className="btn hover-btn-grey"
            onClick={() => sendMessage(message)}
          >
            <IoIosSend />
          </div>
        </div>
      </div>
    </div>
  );
}
