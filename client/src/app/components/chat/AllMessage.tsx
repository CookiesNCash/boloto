import React from 'react';
import { useSelector } from 'react-redux';
import LeftMessage from './LeftMessage';
import RightMessage from './Rightmessage';
import { selectAllMessage } from '@/redux/slices/messageSlise';
import { selectAllToken } from '@/redux/slices/tokenSlice';

export default function AllMessage() {
  const accessToken = useSelector(selectAllToken);
  const [userId] = Object.keys(accessToken);

  const allMessage: {
    [key: number]: {
      id?: number;
      message?: string;
    };
  } = useSelector(selectAllMessage);
  console.log(allMessage)
  return (
    <div className="allMessage">
      {allMessage.map(({ id, message }:{id: string, message: string}, indx: number) => (
        id === userId ? (
          <RightMessage key={indx}>{message}</RightMessage>
        ) : (
          <LeftMessage key={indx}>{message}</LeftMessage>
        )
      ))}
    </div>
  );
}
