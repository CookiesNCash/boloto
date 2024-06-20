import React, { useEffect, useRef } from 'react';
import AllMessage from './AllMessage';
import MessageInput from './MessageInput';

export default function MainChat() {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, []); // Прокрутка вниз при загрузке страницы

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mainChat">
      <AllMessage />
      <div ref={messagesEndRef} />
      {' '}
      {/* Референс на конец списка сообщений */}
      <div className="end">
        <MessageInput />
      </div>
    </div>
  );
}
