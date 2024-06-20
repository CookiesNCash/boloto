import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosSend } from 'react-icons/io';
import io from 'socket.io-client';
import { addMessage } from '@/redux/slices/messageSlise'; 
import { selectAllToken } from '@/redux/slices/tokenSlice';

export default function MessageInput() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const accessToken = useSelector(selectAllToken);
  const userId = Object.keys(accessToken)[0];
  const soket = process.env.NEXT_PUBLIC_SOCKET
  
  useEffect(() => {
    const socket = io(soket);

    socket.on('message', ({ data }) => {
      const receivedMessage = {
        id: data.userId,
        message: data.msg,
        firstName: data.firstName
      };
      dispatch(addMessage(receivedMessage));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const sendMessage = () => {
    if (message.trim()) {
      const socket = io(soket);
      socket.emit('message', {
        data: {
          msg: message,
          userId: userId,
          firstName: accessToken[userId].fistName
        },
      });
      const newMessage = {
        id: userId,
        message: message,
      };
      setMessage('');
    }
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
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <div
            className="btn hover-btn-grey"
            onClick={sendMessage}
          >
            <IoIosSend />
          </div>
        </div>
      </div>
    </div>
  );
}
