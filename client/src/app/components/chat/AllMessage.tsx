import React from 'react';
import { useSelector } from 'react-redux';
import LeftMessage from './LeftMessage';
import RightMessage from './Rightmessage';
import { selectAllMessage } from '@/redux/slices/messageSlise';

export default function AllMessage() {
  const allMessage: {
    [key: number]: {
      id?: number;
      message?: string;
    };
  } = useSelector(selectAllMessage);
  const allMessageArray = Object.values(allMessage);

  return (
    <div className="allMessage">
      <LeftMessage />
      {allMessageArray.map((el) => (
        <RightMessage key={el.id}>{el.message}</RightMessage>
      ))}
    </div>
  );
}
