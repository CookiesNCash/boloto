import React from 'react';
import { useSelector } from 'react-redux';
import LeftMessage from './LeftMessage';
import RightMessage from './Rightmessage';
import { selectAllMessage } from '@/redux/slices/messageSlise';
import { selectAllToken } from '@/redux/slices/tokenSlice';

export default function AllMessage() {
  const accessToken = useSelector(selectAllToken);
  const [userId] = Object.keys(accessToken);

  const allMessage = useSelector(selectAllMessage);
  console.log(allMessage)
  return (
    <div className="allMessage">
      {allMessage.map(({ id, message, firstName }:{id: string, message: string, firstName:string}, indx: number) => (
        id === userId ? (
          <RightMessage name={firstName} key={indx}>{message}</RightMessage>
        ) : (
          <LeftMessage name={firstName} key={indx}>{message}</LeftMessage>
        )
      ))}
    </div>
  );
}
