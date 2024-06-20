import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';

export default function ProfileNav({
  user,
}: {
  user: {
    name: string;
    photo: string;
    id: string;
  };
}) {
  const { id, name, photo } = user;

  return (
    <div className="profile bg-black">
      <img className="photo-author" src={photo} alt="аватар" />
      <div className="user-info">
        <span>{name}</span>
        <a className="id-author" href="#">
          {id}
        </a>
      </div>
      <HiDotsVertical className="tripleDot" />
    </div>
  );
}
